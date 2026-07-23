import {
  acceptNextEmotion,
  chooseVessel,
  circulate,
  continueAfterResult,
  createGameState,
  startNextDay,
  sellFromShelf,
  saveToStore,
  loadFromStore,
  clearSave,
  listVesselHints,
  formatHintLine,
  loadSettings,
  updateSettings,
  listEarnedUnlocks,
  listLockedUnlocks,
  vesselAffinityLines,
  newlyEarnedUnlocks,
  ProceduralAudioBus,
  sfxForGameEvent,
  averageMatchScore,
  bestVesselForGuest,
  maybeAppendRevisit,
  priceLabel,
  rollShopEvent,
  applyShopEvent,
  topFavoredGuests,
  computeSessionStats,
  formatStatsSummary,
  dayGoalProgress,
  formatDayGoalLine,
  phaseLabel,
  vesselByHotkey,
  VESSEL_ORDER,
  formatRatioPercent,
  bestQualityInHistory,
  type GameState,
  type PlayerSettings,
  VESSEL_LABELS,
  QUALITY_LABELS,
  DEFAULT_SETTINGS,
} from "../core";
import { describeDayOpener, freshDayQueue, goalsForDay } from "../data/emotions";
import { vesselIconHtml } from "./icons";
import { playWebAudioTone } from "./beep";

const VESSELS = VESSEL_ORDER;

type View = "menu" | "shop" | "about" | "codex" | "settings" | "tutorial";

export class YixiApp {
  private root: HTMLElement;
  private state: GameState;
  private settings: PlayerSettings;
  private view: View = "menu";
  private audio: ProceduralAudioBus = new ProceduralAudioBus(playWebAudioTone);
  private toast: string | null = null;
  /** 店内/菜单帮助覆盖层 */
  private helpOpen = false;

  constructor(root: HTMLElement) {
    this.root = root;
    this.state = createGameState(freshDayQueue(1));
    this.settings = this.readSettings();
    this.applyDocumentSettings();
    this.bindKeyboard();
    this.syncAudioEnabled();
    this.audio.playBgm("bgm_menu");
    this.render();
  }

  private syncAudioEnabled(): void {
    // 减少动效或手动关闭音效时静音
    this.audio.setEnabled(this.settings.sfxEnabled && !this.settings.reduceMotion);
  }

  private bindKeyboard(): void {
    document.addEventListener("keydown", (ev) => {
      if (ev.key === "?" || (ev.key === "/" && ev.shiftKey)) {
        ev.preventDefault();
        this.helpOpen = !this.helpOpen;
        this.render();
        return;
      }
      if (ev.key === "Escape") {
        if (this.helpOpen) {
          this.helpOpen = false;
          this.render();
          return;
        }
        if (this.view === "shop" || this.view === "codex" || this.view === "settings" || this.view === "about") {
          this.go("menu");
        }
        return;
      }
      if (this.helpOpen) return;
      // 数字 1–5 在选形态阶段快速选择（与 vesselByHotkey 同源）
      if (this.view === "shop" && this.state.phase === "awaiting_vessel") {
        const vessel = vesselByHotkey(ev.key);
        if (vessel) {
          ev.preventDefault();
          this.setState(chooseVessel(this.state, vessel));
        }
      }
      if (this.view === "shop" && this.state.phase === "awaiting_emotion" && (ev.key === "Enter" || ev.key === " ")) {
        const target = ev.target as HTMLElement | null;
        if (target && (target.tagName === "BUTTON" || target.tagName === "INPUT")) return;
        if (this.state.queue.length > 0) {
          ev.preventDefault();
          this.setState(acceptNextEmotion(this.state));
        }
      }
    });
  }

  /** 暴露只读状态，便于自动化冒烟 */
  getState(): Readonly<GameState> {
    return this.state;
  }

  getSettings(): Readonly<PlayerSettings> {
    return this.settings;
  }

  private go(view: View): void {
    this.view = view;
    this.render();
  }

  private readSettings(): PlayerSettings {
    const store = this.storage();
    return store ? loadSettings(store) : { ...DEFAULT_SETTINGS };
  }

  private patchSettings(patch: Partial<PlayerSettings>): void {
    const store = this.storage();
    if (store) {
      this.settings = updateSettings(store, patch);
    } else {
      this.settings = { ...this.settings, ...patch };
    }
    this.applyDocumentSettings();
    this.syncAudioEnabled();
    this.render();
  }

  private applyDocumentSettings(): void {
    document.documentElement.dataset.reduceMotion = this.settings.reduceMotion
      ? "true"
      : "false";
  }

  private storage(): Storage | null {
    try {
      return typeof localStorage !== "undefined" ? localStorage : null;
    } catch {
      return null;
    }
  }

  private persist(): void {
    const store = this.storage();
    if (store) saveToStore(store, this.state);
  }

  private setState(next: GameState): void {
    const prev = this.state;
    const unlocked = newlyEarnedUnlocks(prev, next);
    if (unlocked.length > 0) {
      this.toast = `解锁：${unlocked.map((u) => u.title).join("、")}`;
      this.audio.playSfx(sfxForGameEvent("rare"));
    }
    if (next.phase === "awaiting_circulation" && prev.phase === "awaiting_vessel") {
      this.audio.playSfx(
        next.crafted?.quality === "rare" ? sfxForGameEvent("rare") : sfxForGameEvent("craft"),
      );
    }
    if (next.history.length > prev.history.length) {
      this.audio.playSfx(sfxForGameEvent("circulate"));
      // 流通后尝试店事事件
      const ev = rollShopEvent(next);
      if (ev) {
        next = applyShopEvent(next, ev);
      }
    }
    if (next.shelf.length < prev.shelf.length) {
      this.audio.playSfx(sfxForGameEvent("sell"));
    }
    this.state = next;
    this.persist();
    this.render();
  }

  private startNewGame(): void {
    const store = this.storage();
    if (store) clearSave(store);
    this.state = createGameState(freshDayQueue(1), goalsForDay(1));
    this.state = {
      ...this.state,
      message: describeDayOpener(1),
    };
    this.persist();
    if (!this.settings.tutorialSeen) {
      this.view = "tutorial";
    } else {
      this.view = "shop";
    }
    this.render();
  }

  private finishTutorial(): void {
    this.patchSettings({ tutorialSeen: true });
    this.view = "shop";
    this.render();
  }

  private continueGame(): void {
    const store = this.storage();
    if (!store) {
      this.startNewGame();
      return;
    }
    try {
      const loaded = loadFromStore(store);
      if (loaded) {
        this.state = loaded;
        this.view = "shop";
        this.render();
        return;
      }
    } catch {
      clearSave(store);
    }
    this.startNewGame();
  }

  private hasSave(): boolean {
    const store = this.storage();
    if (!store) return false;
    try {
      return loadFromStore(store) !== null;
    } catch {
      return false;
    }
  }

  private render(): void {
    this.root.innerHTML = "";
    this.root.classList.toggle("shop-theme", this.view === "shop");
    if (this.view === "menu") {
      this.root.appendChild(this.renderMenu());
    } else if (this.view === "about") {
      this.root.appendChild(this.renderAbout());
    } else if (this.view === "codex") {
      this.root.appendChild(this.renderCodex());
    } else if (this.view === "settings") {
      this.root.appendChild(this.renderSettings());
    } else if (this.view === "tutorial") {
      this.root.appendChild(this.renderTutorial());
    } else {
      this.root.appendChild(this.renderShop());
    }
    if (this.toast) {
      const t = document.createElement("div");
      t.className = "toast";
      t.dataset.testid = "toast";
      t.textContent = this.toast;
      this.root.appendChild(t);
      const msg = this.toast;
      this.toast = null;
      window.setTimeout(() => {
        const el = this.root.querySelector(`[data-testid=toast]`);
        if (el && el.textContent === msg) el.remove();
      }, 3200);
    }
    if (this.helpOpen) {
      this.root.appendChild(this.renderHelpOverlay());
    }
    const foot = document.createElement("footer");
    foot.className = "site-foot";
    foot.textContent = "一息 · 温柔瞬间铺 — 情绪流通，而非贩卖商品 · 按 ? 打开帮助";
    this.root.appendChild(foot);
  }

  private renderHelpOverlay(): HTMLElement {
    const wrap = document.createElement("div");
    wrap.className = "help-overlay";
    wrap.dataset.testid = "help-overlay";
    wrap.setAttribute("role", "dialog");
    wrap.setAttribute("aria-modal", "true");
    wrap.setAttribute("aria-label", "操作帮助");
    wrap.innerHTML = `
      <div class="help-panel card">
        <h2>一息 · 帮助</h2>
        <ol class="tutorial-steps">
          <li><strong>接待</strong> — 店内「接待下一位」或 Enter</li>
          <li><strong>转化</strong> — 点选形态，或按 1–5</li>
          <li><strong>流通</strong> — 上架进货架，或赠予立即流通</li>
          <li><strong>货架</strong> — 「被买走」完成二次流通</li>
        </ol>
        <p class="muted">Esc 关闭本层或返回主菜单 · ? 切换帮助 · 设置可关音效/动效</p>
        <div class="btn-row"></div>
      </div>
    `;
    wrap.querySelector(".btn-row")!.append(
      this.button("关闭", () => {
        this.helpOpen = false;
        this.render();
      }),
    );
    wrap.addEventListener("click", (e) => {
      if (e.target === wrap) {
        this.helpOpen = false;
        this.render();
      }
    });
    return wrap;
  }

  private renderMenu(): HTMLElement {
    const el = document.createElement("section");
    el.className = "screen active menu-center";
    el.innerHTML = `
      <div class="menu-hero" role="img" aria-label="一息小店午后橱窗插画" data-testid="menu-hero"></div>
      <p class="muted">Gentle Moments Shop · v0.2.2</p>
      <h1 class="logo">一息</h1>
      <p class="tagline">收集小情绪，化作花、茶、画、音乐或小物件，再轻轻流通出去。</p>
      <div class="btn-row"></div>
    `;
    const row = el.querySelector(".btn-row")!;
    row.append(
      this.button("开始今日经营", () => this.startNewGame()),
      this.button("继续经营", () => this.continueGame(), "secondary", !this.hasSave()),
      this.button("瞬间图鉴", () => this.go("codex"), "secondary"),
      this.button("设置", () => this.go("settings"), "secondary"),
      this.button("关于", () => this.go("about"), "secondary"),
    );
    return el;
  }

  private renderTutorial(): HTMLElement {
    const el = document.createElement("section");
    el.className = "screen active";
    el.dataset.testid = "tutorial";
    el.innerHTML = `
      <div class="card">
        <h2>欢迎来到「一息」</h2>
        <ol class="tutorial-steps">
          <li><strong>接待</strong> — 听取客人交来的一小段心情。</li>
          <li><strong>转化</strong> — 选择花 / 茶 / 画 / 音乐 / 小物件作为容器。</li>
          <li><strong>流通</strong> — 上架或赠予，让情绪再次被需要的人接住。</li>
        </ol>
        <p class="muted">匹配越贴切，品质与温存越高。没有严格失败，只有更温柔的选择。</p>
        <div class="btn-row"></div>
      </div>
    `;
    el.querySelector(".btn-row")!.append(
      this.button("明白了，开始经营", () => this.finishTutorial()),
    );
    return el;
  }

  private renderSettings(): HTMLElement {
    const el = document.createElement("section");
    el.className = "screen active";
    el.dataset.testid = "settings";
    const s = this.settings;
    el.innerHTML = `
      <div class="card">
        <h2>设置</h2>
        <label class="setting-row">
          <input type="checkbox" data-key="showHints" ${s.showHints ? "checked" : ""} />
          <span>显示气息提示（弱相性）</span>
        </label>
        <label class="setting-row">
          <input type="checkbox" data-key="reduceMotion" ${s.reduceMotion ? "checked" : ""} />
          <span>减少动效</span>
        </label>
        <label class="setting-row">
          <input type="checkbox" data-key="sfxEnabled" ${s.sfxEnabled ? "checked" : ""} />
          <span>程序化音效</span>
        </label>
        <label class="setting-row">
          <input type="checkbox" data-key="tutorialSeen" ${s.tutorialSeen ? "checked" : ""} />
          <span>已阅读教程（取消勾选后下次新游戏将再次显示）</span>
        </label>
        <div class="btn-row"></div>
      </div>
    `;
    el.querySelectorAll<HTMLInputElement>("input[type=checkbox]").forEach((input) => {
      input.addEventListener("change", () => {
        const key = input.dataset.key as keyof PlayerSettings;
        this.patchSettings({ [key]: input.checked });
      });
    });
    el.querySelector(".btn-row")!.append(
      this.button("返回", () => this.go("menu"), "secondary"),
    );
    return el;
  }

  private renderCodex(): HTMLElement {
    const el = document.createElement("section");
    el.className = "screen active";
    el.dataset.testid = "codex";
    const list = this.state.history;
    const earned = listEarnedUnlocks(this.state);
    const locked = listLockedUnlocks(this.state);
    const items =
      list.length === 0
        ? `<p class="muted">还没有完成的流通。去店里接待一位客人吧。</p>`
        : list
            .map(
              (r, i) => `
        <article class="card" data-testid="codex-item">
          <h3>#${i + 1} ${r.item.label}</h3>
          <p class="muted">${r.action === "gift" ? "赠予" : "上架"} · 温存 +${r.warmthGained} · ${QUALITY_LABELS[r.item.quality]}</p>
          <p class="moment-card">${r.momentCard}</p>
        </article>`,
            )
            .join("");
    const unlockHtml = `
      <div class="card" data-testid="unlocks">
        <h3>店面解锁</h3>
        ${
          earned.length === 0
            ? `<p class="muted">经营中积累口碑与流通，会留下纪念性解锁。</p>`
            : earned.map((u) => `<p>✓ <strong>${u.title}</strong> — ${u.description}</p>`).join("")
        }
        ${
          locked.length
            ? `<p class="muted">未解锁：${locked.map((u) => u.title).join("、")}</p>`
            : ""
        }
      </div>
      <div class="card" data-testid="affinity-codex">
        <h3>形态图鉴</h3>
        ${vesselAffinityLines()
          .map((l) => `<p class="muted">${l.line}</p>`)
          .join("")}
      </div>
      <div class="card" data-testid="favor-board">
        <h3>客人好感</h3>
        ${
          topFavoredGuests(this.state, 5).length === 0
            ? `<p class="muted">完成流通后，常客的好感会慢慢累积。</p>`
            : topFavoredGuests(this.state, 5)
                .map((g) => `<p><strong>${g.name}</strong> · 好感 ${g.favor}</p>`)
                .join("")
        }
      </div>
      <div class="card" data-testid="session-stats">
        <h3>本局统计</h3>
        <p data-testid="stats-summary">${formatStatsSummary(computeSessionStats(this.state))}</p>
        <p class="muted" data-testid="best-quality">历史最高品质：${(() => { const q = bestQualityInHistory(this.state.history); return q ? QUALITY_LABELS[q] : "尚无"; })()}</p>
      </div>`;
    el.innerHTML = `
      <h2>瞬间图鉴</h2>
      <p class="muted">每一次流通留下的温柔记录（本局 ${list.length} 条）</p>
      ${unlockHtml}
      <div data-testid="codex-list">${items}</div>
      <div class="btn-row"></div>
    `;
    const row = el.querySelector(".btn-row")!;
    row.append(
      this.button("返回菜单", () => this.go("menu"), "secondary"),
      this.button("进入店内", () => this.go("shop")),
    );
    return el;
  }

  private renderAbout(): HTMLElement {
    const el = document.createElement("section");
    el.className = "screen active";
    el.innerHTML = `
      <div class="card">
        <h2>关于「一息」</h2>
        <div class="menu-hero" style="background-image:linear-gradient(180deg,rgba(247,243,236,.2),rgba(247,243,236,.75)),url('/assets/promo/cover.jpg')" role="img" aria-label="一息宣传封面"></div>
        <p>这是一家经营「情绪流通」的小店。客人把说不出口的心情交给你；你选择最贴切的容器，让它变成可以被带走的温柔瞬间。</p>
        <p class="muted">毕业设计演示原型 v0.2 · 规则可测 · 文案向治愈体验</p>
        <p class="muted">版本与验收：npm run check · 文档见 docs/</p>
        <div class="btn-row"></div>
      </div>
    `;
    el.querySelector(".btn-row")!.append(
      this.button("返回", () => this.go("menu"), "secondary"),
    );
    return el;
  }

  private renderShop(): HTMLElement {
    const s = this.state;
    const wrap = document.createElement("section");
    wrap.className = "screen active";
    wrap.dataset.phase = s.phase;
    wrap.dataset.circulations = String(s.circulationsToday);
    wrap.dataset.warmth = String(s.warmth);

    const hud = document.createElement("div");
    hud.className = "hud";
    hud.innerHTML = `
      <span>阶段 <strong data-testid="phase-label">${phaseLabel(s.phase)}</strong></span>
      <span>第 <strong>${s.day}</strong> 日</span>
      <span>温存 <strong data-testid="warmth">${s.warmth}</strong></span>
      <span>口碑 <strong>${s.reputation}</strong></span>
      <span>今日流通 <strong data-testid="circulations">${s.circulationsToday}</strong> / 目标 ${s.config.dayGoalCirculations}</span>
      <span class="muted" data-testid="day-goal">${formatDayGoalLine(dayGoalProgress(s))}（${formatRatioPercent(dayGoalProgress(s).bestRatio)}）</span>
      <span>连心 <strong data-testid="streak">${s.qualityStreak ?? 0}</strong></span>
      <span>默契 <strong data-testid="avg-match">${averageMatchScore(s).toFixed(1)}</strong></span>
      <span>等候 <strong>${s.queue.length}</strong></span>
    `;
    wrap.appendChild(hud);

    const msg = document.createElement("p");
    msg.className = "message";
    msg.dataset.testid = "message";
    msg.textContent = s.message;
    wrap.appendChild(msg);

    const kbd = document.createElement("p");
    kbd.className = "kbd-hint";
    kbd.textContent =
      "键盘：Esc 回主菜单 · 接待处 Enter 接待 · 选形态时按 1–5";
    wrap.appendChild(kbd);

    wrap.appendChild(this.renderPhaseCard(s));

    if (s.shelf.length > 0) {
      wrap.appendChild(this.renderShelf(s));
    }

    const nav = document.createElement("div");
    nav.className = "btn-row";
    nav.append(
      this.button("瞬间图鉴", () => this.go("codex"), "secondary"),
      this.button("回到主菜单", () => this.go("menu"), "secondary"),
    );
    wrap.appendChild(nav);
    return wrap;
  }

  private renderShelf(s: GameState): HTMLElement {
    const card = document.createElement("div");
    card.className = "card";
    card.dataset.testid = "shelf";
    card.innerHTML = `<h2>货架</h2><p class="muted">上架的温柔在此等候知音。</p>`;
    s.shelf.forEach((item) => {
      const row = document.createElement("div");
      row.className = "btn-row";
      row.style.alignItems = "center";
      const label = document.createElement("span");
      label.textContent = `${item.crafted.label}（${QUALITY_LABELS[item.crafted.quality]}）· ${priceLabel(item.crafted)}`;
      const id = item.crafted.id;
      row.append(
        label,
        this.button(
          "被买走",
          () => {
            const idx = this.state.shelf.findIndex((x) => x.crafted.id === id);
            this.setState(sellFromShelf(this.state, idx));
          },
          "display",
        ),
      );
      card.appendChild(row);
    });
    return card;
  }

  private renderPhaseCard(s: GameState): HTMLElement {
    const card = document.createElement("div");
    card.className = "card";
    card.dataset.testid = "phase-card";

    if (s.phase === "awaiting_emotion" || (s.phase === "result" && !s.current)) {
      card.innerHTML = `<h2>接待处</h2><p class="muted">把门推开一点，听听今天的故事。</p>`;
      const row = document.createElement("div");
      row.className = "btn-row";
      const canAccept = s.queue.length > 0;
      row.append(
        this.button(
          canAccept ? "接待下一位" : "暂无客人",
          () => this.setState(acceptNextEmotion(s)),
          undefined,
          !canAccept && s.phase !== "result",
        ),
      );
      if (s.phase === "result") {
        row.append(
          this.button("继续", () => this.setState(continueAfterResult(s))),
        );
      }
      card.appendChild(row);
      if (s.lastResult) {
        card.appendChild(this.renderLastResult(s));
      }
      return card;
    }

    if (s.phase === "awaiting_vessel" && s.current) {
      const e = s.current;
      card.innerHTML = `
        <h2>${e.guestName}</h2>
        <p class="emotion-text" data-testid="emotion-text">「${e.text}」</p>
        <div class="tags">${e.tags.map((t) => `<span class="tag">${t}</span>`).join("")}</div>
        <p class="muted">强度 ${e.intensity} · 选择容器形态</p>
        <div class="vessel-grid" data-testid="vessel-grid"></div>
        <p class="muted" data-testid="hints" style="margin-top:0.75rem"></p>
      `;
      const grid = card.querySelector(".vessel-grid")!;
      for (const v of VESSELS) {
        const b = document.createElement("button");
        b.type = "button";
        b.className = "vessel-btn";
        b.dataset.vessel = v;
        b.innerHTML = `<span class="icon">${vesselIconHtml(v)}</span><span>${VESSEL_LABELS[v]}</span><span class="muted" style="font-size:0.75rem">${VESSELS.indexOf(v) + 1}</span>`;
        b.setAttribute("aria-label", `选择${VESSEL_LABELS[v]}`);
        b.addEventListener("click", () => this.setState(chooseVessel(s, v)));
        grid.appendChild(b);
      }
      const hintEl = card.querySelector("[data-testid=hints]") as HTMLElement;
      if (this.settings.showHints) {
        const hints = listVesselHints(e)
          .map((h) => formatHintLine(h))
          .join(" · ");
        const best = VESSEL_LABELS[bestVesselForGuest(e)];
        hintEl.textContent = `气息提示：${hints}。隐约更靠近「${best}」。`;
      } else {
        hintEl.textContent = "";
        hintEl.hidden = true;
      }
      return card;
    }

    if (s.phase === "awaiting_circulation" && s.crafted) {
      const item = s.crafted;
      card.innerHTML = `
        <h2>转化台</h2>
        <p data-testid="crafted-label"><strong>${item.label}</strong></p>
        <p>品质：<span class="quality-${item.quality}" data-testid="quality">${QUALITY_LABELS[item.quality]}</span>
          · 匹配分 ${item.matchScore} · ${priceLabel(item)}</p>
        <p class="muted">上架等待知音，或直接赠予需要的人。</p>
        <div class="btn-row"></div>
      `;
      const row = card.querySelector(".btn-row")!;
      row.append(
        this.button("上架", () => this.setState(circulate(s, "display")), "display"),
        this.button("赠予", () => this.setState(circulate(s, "gift")), "gift"),
      );
      return card;
    }

    if (s.phase === "result") {
      card.innerHTML = `<h2>流通完成</h2>`;
      card.appendChild(this.renderLastResult(s));
      const row = document.createElement("div");
      row.className = "btn-row";
      row.append(
        this.button("继续经营", () => this.setState(continueAfterResult(s))),
      );
      card.appendChild(row);
      return card;
    }

    if (s.phase === "day_complete") {
      const stats = computeSessionStats(s);
      card.innerHTML = `
        <h2>今日打烊</h2>
        <p>你完成了今日的情绪流通。温存 ${s.warmth}，今日流通 ${s.circulationsToday} 次。</p>
        <p class="muted" data-testid="day-end-stats">${formatStatsSummary(stats)}</p>
      `;
      if (s.lastResult) {
        card.appendChild(this.renderLastResult(s));
      }
      const row = document.createElement("div");
      row.className = "btn-row";
      row.append(
        this.button("进入下一日", () => {
          const day = s.day + 1;
          const goals = goalsForDay(day);
          let queue = freshDayQueue(day);
          queue = maybeAppendRevisit(s, queue);
          let next = startNextDay(s, queue, describeDayOpener(day));
          next = {
            ...next,
            config: { ...next.config, ...goals },
          };
          if (queue.some((e) => e.id.startsWith("revisit_"))) {
            next = {
              ...next,
              message: `${next.message} 柜台边多了一位故人。`,
            };
          }
          this.setState(next);
        }),
        this.button("回到主菜单", () => this.go("menu"), "secondary"),
      );
      card.appendChild(row);
      return card;
    }

    card.textContent = "店内暂时无事。";
    return card;
  }

  private renderLastResult(s: GameState): HTMLElement {
    const box = document.createElement("div");
    if (!s.lastResult) return box;
    const r = s.lastResult;
    box.innerHTML = `
      <div class="moment-card" data-testid="moment-card">
        <p><strong>瞬间卡片</strong> · 温存 +${r.warmthGained}</p>
        <p>${r.momentCard}</p>
      </div>
    `;
    return box;
  }

  private button(
    label: string,
    onClick: () => void,
    className?: string,
    disabled = false,
  ): HTMLButtonElement {
    const b = document.createElement("button");
    b.type = "button";
    b.textContent = label;
    b.setAttribute("aria-label", label);
    if (className) b.className = className;
    b.disabled = disabled;
    if (disabled) b.setAttribute("aria-disabled", "true");
    b.addEventListener("click", onClick);
    return b;
  }
}

