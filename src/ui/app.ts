/* 一息 · 温柔瞬间铺 — 可读可玩的界面层
 *
 * 设计原则：
 * 1. 每一屏只保留玩家决策所需信息
 * 2. HUD 用状态芯片，不再刷屏 flavor 文案
 * 3. 装饰图最多一张/屏，不淹没主操作
 * 4. 核心循环：接待 → 选形态 → 上架/赠予 必须一眼可见
 */

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
  formatNextUnlockLine,
  formatUnlockEncourage,
  formatUnlockBoardSummary,
  vesselAffinityLines,
  newlyEarnedUnlocks,
  HybridAudioBus,
  sfxForGameEvent,
  averageMatchScore,
  maybeAppendRevisit,
  priceLabel,
  firstOrderBonusHint,
  rollShopEvent,
  applyShopEvent,
  topFavoredGuests,
  formatFavorLine,
  formatFavorBoardSummary,
  favorForGuest,
  formatFavorGreeting,
  formatNextGuestFavorHint,
  formatRevisitHint,
  computeSessionStats,
  formatStatsSummary,
  formatOrderDayEndLine,
  dayGoalProgress,
  formatDayGoalLine,
  phaseLabel,
  formatPhaseHintLine,
  vesselByHotkey,
  VESSEL_ORDER,
  formatCodexSummary,
  formatFavoriteVesselLine,
  formatShelfLine,
  reputationRankTitle,
  warmthRankTitle,
  buildDayEndNarrative,
  formatAtmosphereLine,
  formatAtmosphereClosing,
  formatDayHeaderLine,
  atmosphereForDay,
  formatRevisitWelcome,
  evaluateRevisitEligibility,
  buildGuestbookEntries,
  formatGuestbookBoardSummary,
  formatLanternAside,
  formatQueueStatus,
  formatMatchScoreLine,
  formatQualityLine,
  formatVesselRecommendLine,
  listVesselHotkeyHints,
  formatIntensityLine,
  intensityCraftHint,
  formatActionLine,
  formatCirculationResultLine,
  formatMomentCardHeader,
  formatMomentCardFooter,
  announceMomentCard,
  formatSettingsSummary,
  listTutorialStepLines,
  formatTutorialFooter,
  formatTutorialWelcome,
  formatAcceptButtonLabel,
  formatAcceptReadyHint,
  formatAcceptAriaLabel,
  formatSaveEmptyLine,
  formatSaveReadyLine,
  formatContinueButtonLabel,
  formatAutosaveHint,
  formatOrderLine,
  formatOrderShort,
  formatOrderRewardLine,
  ensureActiveOrder,
  ensurePendingSecondary,
  listVisibleOrders,
  vesselHelpsAnyOrder,
  announcePhaseWithHint,
  announceUnlock,
  announceViewChange,
  announceDayCompleteRich,
  announceAtmosphere,
  announceCirculation,
  announceFavorTop,
  favorRankTitle,
  guestPortraitDataAttr,
  guestPortraitAriaLabel,
  announceOrderFulfilled,
  helpDialogA11y,
  joinAnnouncements,
  type GameState,
  type PlayerSettings,
  VESSEL_LABELS,
  QUALITY_LABELS,
  DEFAULT_SETTINGS,
  formatVesselLine,
} from "../core";
import { describeDayOpener, freshDayQueue, goalsForDay } from "../data/emotions";
import { getDayScript } from "../data/day-scripts";
import { vesselIconHtml } from "./icons";
import { playWebAudioTone } from "./beep";
import { playHtmlSample, stopHtmlBgm } from "./sample-player";

const VESSELS = VESSEL_ORDER;

type View = "menu" | "shop" | "about" | "codex" | "settings" | "tutorial";

export class YixiApp {
  private root: HTMLElement;
  private state: GameState;
  private settings: PlayerSettings;
  private view: View = "menu";
  private audio: HybridAudioBus = new HybridAudioBus(
    playHtmlSample,
    playWebAudioTone,
    stopHtmlBgm,
  );
  private toast: string | null = null;
  private helpOpen = false;
  private liveMessage: string | null = null;
  private focusBeforeHelp: HTMLElement | null = null;

  constructor(root: HTMLElement) {
    this.root = root;
    this.state = createGameState(freshDayQueue(1));
    this.settings = this.readSettings();
    this.applyDocumentSettings();
    this.bindKeyboard();
    this.syncAudioEnabled();
    this.audio.playBgm("bgm_menu");
    this.queueAnnounce(announceViewChange("menu"));
    this.render();
  }

  debugLiveMessage(): string | null {
    return this.liveMessage;
  }

  private queueAnnounce(msg: string | null | undefined): void {
    const t = (msg ?? "").trim();
    if (!t) return;
    this.liveMessage = this.liveMessage
      ? joinAnnouncements(this.liveMessage, t)
      : t;
  }

  private syncAudioEnabled(): void {
    this.audio.setEnabled(this.settings.sfxEnabled && !this.settings.reduceMotion);
    this.audio.setVolume("master", this.settings.volumeMaster);
    this.audio.setVolume("sfx", this.settings.volumeSfx);
    this.audio.setVolume("bgm", this.settings.volumeBgm);
  }

  private syncBgmForView(view: View): void {
    if (view === "shop") this.audio.playBgm("bgm_shop");
    else this.audio.playBgm("bgm_menu");
  }

  private bindKeyboard(): void {
    document.addEventListener("keydown", (ev) => {
      if (ev.key === "?" || (ev.key === "/" && ev.shiftKey)) {
        ev.preventDefault();
        if (this.helpOpen) {
          this.closeHelp();
        } else {
          this.focusBeforeHelp =
            document.activeElement instanceof HTMLElement
              ? document.activeElement
              : null;
          this.helpOpen = true;
          this.queueAnnounce(helpDialogA11y().title);
          this.render();
        }
        return;
      }
      if (ev.key === "Escape") {
        if (this.helpOpen) {
          this.closeHelp();
          return;
        }
        if (
          this.view === "shop" ||
          this.view === "codex" ||
          this.view === "settings" ||
          this.view === "about"
        ) {
          this.go("menu");
        }
        return;
      }
      if (this.helpOpen) return;
      if (this.view === "shop" && this.state.phase === "awaiting_vessel") {
        const vessel = vesselByHotkey(ev.key);
        if (vessel) {
          ev.preventDefault();
          this.setState(chooseVessel(this.state, vessel));
        }
      }
      if (
        this.view === "shop" &&
        this.state.phase === "awaiting_emotion" &&
        (ev.key === "Enter" || ev.key === " ")
      ) {
        const target = ev.target as HTMLElement | null;
        if (target && (target.tagName === "BUTTON" || target.tagName === "INPUT")) return;
        if (this.state.queue.length > 0) {
          ev.preventDefault();
          this.setState(acceptNextEmotion(this.state));
        }
      }
    });
  }

  getState(): Readonly<GameState> {
    return this.state;
  }

  getSettings(): Readonly<PlayerSettings> {
    return this.settings;
  }

  private go(view: View): void {
    this.view = view;
    this.syncBgmForView(view);
    this.queueAnnounce(announceViewChange(view));
    if (view === "shop") {
      this.queueAnnounce(announceAtmosphere(this.state.day));
    }
    this.render();
  }

  private readSettings(): PlayerSettings {
    const store = this.storage();
    return store ? loadSettings(store) : { ...DEFAULT_SETTINGS };
  }

  private patchSettings(patch: Partial<PlayerSettings>, reRender = true): void {
    const store = this.storage();
    if (store) {
      this.settings = updateSettings(store, patch);
    } else {
      this.settings = { ...this.settings, ...patch };
    }
    this.applyDocumentSettings();
    this.syncAudioEnabled();
    if (
      "volumeMaster" in patch ||
      "volumeBgm" in patch ||
      "sfxEnabled" in patch ||
      "reduceMotion" in patch
    ) {
      this.syncBgmForView(this.view);
    }
    if (reRender) this.render();
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
      const titles = unlocked.map((u) => u.title);
      this.toast = announceUnlock(titles);
      this.queueAnnounce(announceUnlock(titles));
      this.audio.playSfx(sfxForGameEvent("rare"));
    }
    if (next.phase === "awaiting_vessel" && prev.phase === "awaiting_emotion") {
      this.audio.playSfx(sfxForGameEvent("accept"));
    }
    if (next.phase === "awaiting_circulation" && prev.phase === "awaiting_vessel") {
      this.audio.playSfx(
        next.crafted?.quality === "rare" ? sfxForGameEvent("rare") : sfxForGameEvent("craft"),
      );
    }
    if (next.history.length > prev.history.length) {
      this.audio.playSfx(sfxForGameEvent("circulate"));
      const last = next.history[next.history.length - 1];
      if (last) {
        const q = last.item.quality;
        this.queueAnnounce(announceCirculation(QUALITY_LABELS[q] ?? q));
        if (next.lastResult) {
          this.queueAnnounce(announceMomentCard(next.lastResult));
        }
      }
      const shopEv = rollShopEvent(next);
      if (shopEv) {
        next = applyShopEvent(next, shopEv);
      }
    }
    if (next.shelf.length < prev.shelf.length) {
      this.audio.playSfx(sfxForGameEvent("sell"));
    }
    const prevFulfilled = prev.ordersFulfilled ?? 0;
    const nextFulfilled = next.ordersFulfilled ?? 0;
    if (nextFulfilled > prevFulfilled) {
      const guest =
        prev.activeOrder?.guestName ??
        next.message.match(/【委托完成】(.+?)满意/)?.[1] ??
        "客人";
      const bonus =
        prev.activeOrder?.bonusWarmth ?? Math.max(0, next.warmth - prev.warmth);
      const line = announceOrderFulfilled(guest, bonus);
      this.toast = line;
      this.queueAnnounce(line);
      this.audio.playSfx(sfxForGameEvent("rare"));
    }
    if (next.phase === "day_complete" && prev.phase !== "day_complete") {
      this.audio.playSfx(sfxForGameEvent("day_end"));
      this.queueAnnounce(
        announceDayCompleteRich(next.day, next.warmth, {
          reputation: next.reputation,
          circulations: next.circulationsToday,
        }),
      );
      const top = topFavoredGuests(next, 1)[0];
      if (top) {
        this.queueAnnounce(
          announceFavorTop(top.name, top.favor, favorRankTitle(top.favor)),
        );
      }
    }
    if (next.phase !== prev.phase) {
      this.queueAnnounce(announcePhaseWithHint(next.phase));
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
      this.queueAnnounce(announceAtmosphere(1));
    }
    this.syncBgmForView(this.view);
    this.render();
  }

  private finishTutorial(): void {
    this.patchSettings({ tutorialSeen: true });
    this.view = "shop";
    this.syncBgmForView("shop");
    this.queueAnnounce(announceAtmosphere(this.state.day));
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
        this.syncBgmForView("shop");
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
    this.root.classList.toggle(
      "evening-theme",
      this.view === "shop" && this.state.day >= 12,
    );
    this.root.classList.toggle(
      "rain-theme",
      this.view === "shop" &&
        ((this.state.day >= 2 && this.state.day <= 4) || this.state.day === 37),
    );

    if (this.view === "menu") this.root.appendChild(this.renderMenu());
    else if (this.view === "about") this.root.appendChild(this.renderAbout());
    else if (this.view === "codex") this.root.appendChild(this.renderCodex());
    else if (this.view === "settings") this.root.appendChild(this.renderSettings());
    else if (this.view === "tutorial") this.root.appendChild(this.renderTutorial());
    else this.root.appendChild(this.renderShop());

    if (this.toast) {
      const t = document.createElement("div");
      t.className = "toast";
      t.setAttribute("role", "status");
      t.textContent = this.toast;
      this.root.appendChild(t);
      const keep = this.toast;
      window.setTimeout(() => {
        if (this.toast === keep) {
          this.toast = null;
          t.remove();
        }
      }, 3200);
    }

    this.root.appendChild(this.renderLiveRegion());
    if (this.helpOpen) {
      this.root.appendChild(this.renderHelpOverlay());
      queueMicrotask(() => {
        this.root.querySelector<HTMLElement>("[data-help-close]")?.focus();
      });
    }

    const foot = document.createElement("footer");
    foot.className = "site-foot";
    foot.innerHTML =
      '<span class="doorbell-icon" role="img" aria-label="门铃"></span> 一息 · 温柔瞬间铺 · 按 ? 打开帮助';
    this.root.appendChild(foot);
  }

  private renderLiveRegion(): HTMLElement {
    const live = document.createElement("div");
    live.className = "sr-only";
    live.setAttribute("aria-live", "polite");
    live.setAttribute("aria-atomic", "true");
    live.dataset.testid = "live-region";
    const msg = this.liveMessage;
    this.liveMessage = null;
    if (msg) live.textContent = msg;
    return live;
  }

  private closeHelp(): void {
    this.helpOpen = false;
    this.render();
    queueMicrotask(() => {
      this.focusBeforeHelp?.focus();
      this.focusBeforeHelp = null;
    });
  }

  private renderHelpOverlay(): HTMLElement {
    const a11y = helpDialogA11y();
    const wrap = document.createElement("div");
    wrap.className = "help-overlay";
    wrap.setAttribute("role", "dialog");
    wrap.setAttribute("aria-modal", "true");
    wrap.setAttribute("aria-label", a11y.title);
    wrap.innerHTML = `
      <div class="card help-panel">
        <h2>${a11y.title}</h2>
        <ul class="help-list">
          <li>接待客人 → 读情绪 → 选形态（1–5）→ 上架或赠予</li>
          <li>标签与形态越契合，品质越高</li>
          <li>赠予比上架多一点温存；连心靠连续精致/珍稀</li>
          <li><kbd>Enter</kbd> 接待 · <kbd>1–5</kbd> 形态 · <kbd>Esc</kbd> 返回</li>
        </ul>
        <div class="btn-row">
          <button type="button" data-help-close class="secondary">关闭</button>
        </div>
      </div>
    `;
    wrap.querySelector("[data-help-close]")!.addEventListener("click", () => this.closeHelp());
    wrap.addEventListener("click", (e) => {
      if (e.target === wrap) this.closeHelp();
    });
    return wrap;
  }

  private renderMenu(): HTMLElement {
    const el = document.createElement("section");
    el.className = "screen active menu-screen";
    const saved = this.hasSave();
    let saveLine = formatSaveEmptyLine();
    if (saved) {
      const store = this.storage();
      const loaded = store ? loadFromStore(store) : null;
      if (loaded) saveLine = formatSaveReadyLine(loaded.day, loaded.warmth);
    }
    el.innerHTML = `
      <div class="menu-hero" role="img" aria-label="一息小店午后橱窗" data-testid="menu-hero"></div>
      <div class="menu-copy">
        <p class="menu-kicker">Gentle Moments Shop · v0.3</p>
        <h1 class="logo">一息</h1>
        <p class="tagline">把小情绪变成花、茶、画、音乐或小物件，再轻轻流通出去。</p>
        <p class="muted save-status" data-testid="save-line">${saveLine}</p>
        <p class="muted tiny" data-testid="autosave-hint">${formatAutosaveHint()}</p>
      </div>
      <div class="btn-stack menu-actions"></div>
    `;
    const row = el.querySelector(".menu-actions")!;
    row.append(
      this.button("开始今日经营", () => this.startNewGame(), "primary"),
      this.button(
        formatContinueButtonLabel(saved),
        () => this.continueGame(),
        "secondary",
        !saved,
      ),
      this.button("瞬间图鉴", () => this.go("codex"), "ghost"),
      this.button("设置", () => this.go("settings"), "ghost"),
      this.button("关于", () => this.go("about"), "ghost"),
    );
    return el;
  }

  private renderTutorial(): HTMLElement {
    const el = document.createElement("section");
    el.className = "screen active";
    el.dataset.testid = "tutorial";
    const steps = listTutorialStepLines()
      .map((line) => {
        const m = line.match(/^\d+\.\s(.+?)\s—\s(.+)$/);
        if (!m) return `<li>${line}</li>`;
        return `<li><strong>${m[1]}</strong> — ${m[2]}</li>`;
      })
      .join("");
    el.innerHTML = `
      <div class="card tutorial-card">
        <div class="tutorial-art" role="img" aria-label="教程册页" data-testid="tutorial-art"></div>
        <h2>欢迎来到「一息」</h2>
        <p class="muted" data-testid="tutorial-welcome">${formatTutorialWelcome()}</p>
        <ol class="tutorial-steps" data-testid="tutorial-steps">${steps}</ol>
        <p class="muted" data-testid="tutorial-footer">${formatTutorialFooter()}</p>
        <div class="btn-row"></div>
      </div>
    `;
    el.querySelector(".btn-row")!.append(
      this.button("明白了，开始经营", () => this.finishTutorial(), "primary"),
    );
    return el;
  }

  private renderSettings(): HTMLElement {
    const el = document.createElement("section");
    el.className = "screen active";
    el.dataset.testid = "settings";
    const s = this.settings;
    const pct = (v: number) => `${Math.round(v * 100)}%`;
    el.innerHTML = `
      <div class="card settings-card">
        <h2>设置</h2>
        <p class="muted" data-testid="settings-summary">${formatSettingsSummary(s)}</p>
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
          <span>开启音效与 BGM</span>
        </label>
        <label class="setting-row volume-row">
          <span>主音量 <em data-vol-label="volumeMaster">${pct(s.volumeMaster)}</em></span>
          <input type="range" min="0" max="100" step="1" data-vol="volumeMaster"
            value="${Math.round(s.volumeMaster * 100)}" aria-label="主音量" />
        </label>
        <label class="setting-row volume-row">
          <span>音效 <em data-vol-label="volumeSfx">${pct(s.volumeSfx)}</em></span>
          <input type="range" min="0" max="100" step="1" data-vol="volumeSfx"
            value="${Math.round(s.volumeSfx * 100)}" aria-label="音效音量" />
        </label>
        <label class="setting-row volume-row">
          <span>背景音乐 <em data-vol-label="volumeBgm">${pct(s.volumeBgm)}</em></span>
          <input type="range" min="0" max="100" step="1" data-vol="volumeBgm"
            value="${Math.round(s.volumeBgm * 100)}" aria-label="背景音乐音量" />
        </label>
        <label class="setting-row">
          <input type="checkbox" data-key="tutorialSeen" ${s.tutorialSeen ? "checked" : ""} />
          <span>已阅读教程（取消后下次新游戏会再显示）</span>
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
    el.querySelectorAll<HTMLInputElement>("input[type=range][data-vol]").forEach((input) => {
      const apply = () => {
        const key = input.dataset.vol as "volumeMaster" | "volumeSfx" | "volumeBgm";
        const v = Number(input.value) / 100;
        const label = el.querySelector(`[data-vol-label="${key}"]`);
        if (label) label.textContent = pct(v);
        this.patchSettings({ [key]: v }, false);
      };
      input.addEventListener("input", apply);
      input.addEventListener("change", apply);
    });
    el.querySelector(".btn-row")!.append(
      this.button("返回", () => this.go("menu"), "secondary"),
    );
    return el;
  }

  private renderCodex(): HTMLElement {
    const el = document.createElement("section");
    el.className = "screen active codex-screen";
    el.dataset.testid = "codex";
    const list = this.state.history;
    const earned = listEarnedUnlocks(this.state);
    const locked = listLockedUnlocks(this.state);
    const items =
      list.length === 0
        ? `<div class="empty-state">
            <div class="codex-empty-art" role="img" aria-label="空白图鉴" data-testid="codex-empty-art"></div>
            <p class="muted">还没有完成的流通。去店里接待一位客人吧。</p>
          </div>`
        : list
            .slice()
            .reverse()
            .map(
              (r, i) => `
        <article class="card codex-item" data-testid="codex-item">
          <h3>#${list.length - i} ${r.item.label}</h3>
          <p class="muted" data-testid="codex-action">${formatActionLine(r.action)} · 温存 +${r.warmthGained} · ${QUALITY_LABELS[r.item.quality]}</p>
          <p class="moment-card">${r.momentCard}</p>
        </article>`,
            )
            .join("");

    const top = topFavoredGuests(this.state, 5);
    const gb = buildGuestbookEntries(top, 5);

    el.innerHTML = `
      <header class="page-header">
        <h2>瞬间图鉴</h2>
        <p class="muted" data-testid="codex-summary">${formatCodexSummary(list)}</p>
        <p class="muted tiny" data-testid="codex-favorite-vessel">${formatFavoriteVesselLine(list)}</p>
      </header>
      <div class="codex-grid">
        <div class="card" data-testid="unlocks">
          <h3>店面解锁</h3>
          ${
            earned.length === 0
              ? `<p class="muted">经营中积累口碑与流通，会留下纪念解锁。</p>`
              : earned
                  .map(
                    (u) =>
                      `<p class="unlock-line">✓ <strong>${u.title}</strong> — ${u.description}</p>`,
                  )
                  .join("")
          }
          ${
            locked.length
              ? `<p class="muted tiny">未解锁：${locked.map((u) => u.title).join("、")}</p>`
              : ""
          }
          <p class="muted tiny" data-testid="unlock-board-summary">${formatUnlockBoardSummary(this.state)}</p>
          <p class="muted tiny" data-testid="next-unlock">${formatNextUnlockLine(this.state)}</p>
          <p class="muted tiny" data-testid="unlock-encourage">${formatUnlockEncourage(this.state)}</p>
        </div>
        <div class="card" data-testid="affinity-codex">
          <h3>形态图鉴</h3>
          ${vesselAffinityLines()
            .map((l) => `<p class="muted tiny">${l.line}</p>`)
            .join("")}
        </div>
        <div class="card" data-testid="favor-board">
          <h3>客人好感</h3>
          ${
            top.length === 0
              ? `<p class="muted" data-testid="favor-empty">${formatFavorBoardSummary([])}</p>`
              : top
                  .map((g) => `<p data-testid="favor-line">${formatFavorLine(g)}</p>`)
                  .join("")
          }
          <p class="muted tiny" data-testid="guestbook-summary">${formatGuestbookBoardSummary(gb)}</p>
          <p class="muted tiny" data-testid="lantern-aside">${formatLanternAside(this.state.reputation)}</p>
        </div>
        <div class="card" data-testid="session-stats">
          <h3>本局统计</h3>
          <p data-testid="stats-summary">${formatStatsSummary(computeSessionStats(this.state))}</p>
        </div>
      </div>
      <div class="codex-list" data-testid="codex-list">${items}</div>
      <div class="btn-row sticky-actions"></div>
    `;
    el.querySelector(".sticky-actions")!.append(
      this.button("返回菜单", () => this.go("menu"), "secondary"),
      this.button("进入店内", () => this.go("shop"), "primary"),
    );
    return el;
  }

  private renderAbout(): HTMLElement {
    const el = document.createElement("section");
    el.className = "screen active";
    el.innerHTML = `
      <div class="card about-card">
        <div class="about-gallery">
          <div class="menu-hero about-cover" role="img" aria-label="一息宣传封面"></div>
          <div class="keeper-portrait" role="img" aria-label="掌灯人剪影" data-testid="keeper-art"></div>
        </div>
        <h2>关于「一息」</h2>
        <p>这是一家经营「情绪流通」的小店。客人把说不出口的心情交给你；你选择最贴切的容器，让它变成可以被带走的温柔瞬间。</p>
        <p class="muted">毕业设计演示原型 v0.3 · 规则可测 · 治愈向经营体验</p>
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
    wrap.className = "screen active shop-screen";
    wrap.dataset.phase = s.phase;
    wrap.dataset.circulations = String(s.circulationsToday);
    wrap.dataset.warmth = String(s.warmth);
    wrap.dataset.atmosphere = atmosphereForDay(s.day).dataAttr;

    const goalP = dayGoalProgress(s);
    const script = getDayScript(s.day);
    const streak = s.qualityStreak ?? 0;

    const hud = document.createElement("header");
    hud.className = "shop-hud";
    hud.innerHTML = `
      <div class="hud-title">
        <h1 class="shop-day" data-testid="day-header">${formatDayHeaderLine(s.day, script.title)}</h1>
        <p class="muted tiny" data-testid="atmosphere-line">${formatAtmosphereLine(s.day)}</p>
      </div>
      <div class="hud-chips" data-testid="hud">
        <span class="chip" data-testid="phase-label"><em>阶段</em>${phaseLabel(s.phase)}</span>
        <span class="chip chip-warm" data-testid="warmth-line"><em>温存</em><strong data-testid="warmth">${s.warmth}</strong> · ${warmthRankTitle(s.warmth)}</span>
        <span class="chip" data-testid="reputation-line"><em>口碑</em><strong>${s.reputation}</strong> · ${reputationRankTitle(s.reputation)}</span>
        <span class="chip" data-testid="circulations-chip"><em>今日</em><strong data-testid="circulations">${s.circulationsToday}</strong>/${s.config.dayGoalCirculations}</span>
        <span class="chip" data-testid="streak-line"><em>连心</em>${streak > 0 ? `×${streak}` : "—"}</span>
        <span class="chip" data-testid="avg-match-chip"><em>默契</em><strong data-testid="avg-match">${averageMatchScore(s).toFixed(1)}</strong></span>
      </div>
      <p class="muted tiny goal-line" data-testid="day-goal">${formatDayGoalLine(goalP)}</p>
      <p class="sr-only" data-testid="phase-hint">${formatPhaseHintLine(s.phase)}</p>
      <p class="sr-only" data-testid="queue-status">${formatQueueStatus(s)}</p>
    `;
    wrap.appendChild(hud);

    let orderState = s.activeOrder ? s : ensureActiveOrder(s);
    orderState = ensurePendingSecondary(orderState);
    const visible = listVisibleOrders(orderState);
    if (visible.length > 0) {
      const board = document.createElement("div");
      board.className = "order-board card compact";
      board.dataset.testid = "order-board";
      const primary = visible[0]!;
      const secondary = visible[1];
      board.innerHTML = `
        <div class="order-head">
          <h2>今日委托</h2>
          <span class="order-badge">已完成 ${orderState.ordersFulfilled ?? 0}</span>
        </div>
        <p class="order-main" data-testid="order-line">${formatOrderLine(primary)}</p>
        ${
          secondary
            ? `<p class="muted tiny" data-testid="order-secondary">候补：${formatOrderShort(secondary)}</p>`
            : ""
        }
        <p class="muted tiny" data-testid="order-reward">${formatOrderRewardLine(primary)}</p>
      `;
      wrap.appendChild(board);
    }

    if (s.message) {
      const msg = document.createElement("p");
      msg.className = "message shop-message";
      msg.dataset.testid = "message";
      msg.textContent = s.message;
      wrap.appendChild(msg);
    }

    wrap.appendChild(this.renderPhaseCard(s));

    if (s.shelf.length > 0) {
      wrap.appendChild(this.renderShelf(s));
    }

    const nav = document.createElement("nav");
    nav.className = "btn-row shop-nav";
    nav.append(
      this.button("瞬间图鉴", () => this.go("codex"), "ghost"),
      this.button("回到主菜单", () => this.go("menu"), "secondary"),
    );
    wrap.appendChild(nav);

    const kbd = document.createElement("p");
    kbd.className = "kbd-hint";
    kbd.textContent = `快捷键：Esc 菜单 · Enter 接待 · ${listVesselHotkeyHints()}`;
    wrap.appendChild(kbd);

    return wrap;
  }

  private renderShelf(s: GameState): HTMLElement {
    const card = document.createElement("div");
    card.className = "card shelf-card";
    card.dataset.testid = "shelf";
    card.innerHTML = `
      <div class="shelf-head">
        <h2>货架</h2>
        <p class="muted tiny" data-testid="shelf-line">${formatShelfLine(s)}</p>
      </div>
      <ul class="shelf-list"></ul>
    `;
    const list = card.querySelector(".shelf-list")!;
    s.shelf.forEach((item) => {
      const li = document.createElement("li");
      li.className = "shelf-row";
      const label = document.createElement("span");
      label.className = "shelf-item-label";
      label.textContent = `${item.crafted.label}（${QUALITY_LABELS[item.crafted.quality]}）· ${priceLabel(item.crafted)}`;
      const id = item.crafted.id;
      li.append(
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
      list.appendChild(li);
    });
    return card;
  }

  private renderPhaseCard(s: GameState): HTMLElement {
    const card = document.createElement("div");
    card.className = "card phase-card";
    card.dataset.testid = "phase-card";

    if (s.phase === "awaiting_emotion" || (s.phase === "result" && !s.current)) {
      const nextName = s.queue[0]?.guestName ?? null;
      const favorHint = formatNextGuestFavorHint(s, nextName);
      const qLen = s.queue.length;
      card.classList.add("phase-accept");
      card.innerHTML = `
        <div class="phase-visual warmth-corner-art" role="img" aria-label="温存一隅" data-testid="warmth-corner-art"></div>
        <div class="phase-body">
          <h2>接待处</h2>
          <p class="lead">${formatAcceptReadyHint(qLen)}</p>
          ${
            favorHint
              ? `<p class="muted" data-testid="favor-greeting">${favorHint}</p>`
              : `<p class="muted" data-testid="favor-greeting" hidden></p>`
          }
          <p class="muted tiny" data-testid="accept-hint">门铃响时，轻轻开门即可。</p>
          <div class="btn-row primary-actions"></div>
        </div>
      `;
      const row = card.querySelector(".primary-actions")!;
      const canAccept = qLen > 0;
      const acceptBtn = this.button(
        formatAcceptButtonLabel(qLen),
        () => this.setState(acceptNextEmotion(s)),
        "primary",
        !canAccept && s.phase !== "result",
      );
      acceptBtn.setAttribute("aria-label", formatAcceptAriaLabel(qLen));
      acceptBtn.dataset.testid = "accept-next";
      row.append(acceptBtn);
      if (s.phase === "result") {
        row.append(
          this.button("继续", () => this.setState(continueAfterResult(s)), "secondary"),
        );
      }
      if (s.lastResult) card.appendChild(this.renderLastResult(s));
      return card;
    }

    if (s.phase === "awaiting_vessel" && s.current) {
      const e = s.current;
      const guestFavor = favorForGuest(s, e.guestName);
      const greet = formatFavorGreeting(e.guestName, guestFavor);
      card.classList.add("phase-vessel");
      card.innerHTML = `
        <div class="guest-panel">
          <div class="guest-silhouette" role="img" aria-label="${guestPortraitAriaLabel(e.guestName)}" data-testid="guest-silhouette" data-guest-art="${guestPortraitDataAttr(e.guestName)}"></div>
          <div class="guest-meta">
            <h2 data-testid="guest-name">${e.guestName}</h2>
            ${greet ? `<p class="muted tiny" data-testid="favor-greeting">${greet}</p>` : ""}
            ${
              guestFavor > 0
                ? `<p class="muted tiny" data-testid="favor-guest-line">${formatFavorLine({ name: e.guestName, favor: guestFavor })}</p>`
                : ""
            }
          </div>
        </div>
        <blockquote class="emotion-text" data-testid="emotion-text">「${e.text}」</blockquote>
        <div class="tags" data-testid="emotion-tags">${e.tags.map((t) => `<span class="tag">${t}</span>`).join("")}</div>
        <p class="muted tiny intensity" data-testid="intensity-line">${formatIntensityLine(e.intensity)} · ${intensityCraftHint(e.intensity)}</p>
        <p class="section-label">选择容器形态</p>
        <div class="vessel-grid" data-testid="vessel-grid"></div>
        <p class="muted tiny hints" data-testid="hints"></p>
      `;
      const grid = card.querySelector(".vessel-grid")!;
      for (const v of VESSELS) {
        const b = document.createElement("button");
        b.type = "button";
        b.className = "vessel-btn";
        const helpsOrder = vesselHelpsAnyOrder(s, v);
        if (helpsOrder) {
          b.classList.add("vessel-order-preferred");
          b.dataset.orderPreferred = "true";
        }
        b.dataset.vessel = v;
        const hotkey = VESSELS.indexOf(v) + 1;
        b.innerHTML = `
          <span class="icon">${vesselIconHtml(v)}</span>
          <span class="vessel-name">${VESSEL_LABELS[v]}</span>
          <span class="vessel-key">${hotkey}</span>
        `;
        b.setAttribute(
          "aria-label",
          helpsOrder
            ? `选择${VESSEL_LABELS[v]}（今日委托偏好）`
            : `选择${VESSEL_LABELS[v]}`,
        );
        b.addEventListener("click", () => this.setState(chooseVessel(s, v)));
        grid.appendChild(b);
      }
      const hintEl = card.querySelector("[data-testid=hints]") as HTMLElement;
      if (this.settings.showHints) {
        const hints = listVesselHints(e)
          .map((h) => formatHintLine(h))
          .join(" · ");
        const rec = formatVesselRecommendLine(e, s);
        hintEl.textContent = `气息提示：${hints}。${rec}`;
      } else {
        hintEl.textContent = "";
        hintEl.hidden = true;
      }
      return card;
    }

    if (s.phase === "awaiting_circulation" && s.crafted) {
      const item = s.crafted;
      const bonus =
        firstOrderBonusHint(item, s.activeOrder, s.pendingOrders) ||
        "上架等待知音，或直接赠予需要的人。";
      card.classList.add("phase-circulate");
      card.innerHTML = `
        <div class="craft-visual gift-station-art" role="img" aria-label="转化台" data-testid="gift-station-art"></div>
        <div class="craft-body">
          <p class="section-label">转化完成</p>
          <h2 data-testid="crafted-label">${item.label}</h2>
          <div class="craft-stats">
            <span class="stat quality-${item.quality}" data-testid="quality">${formatQualityLine(item.quality)}</span>
            <span class="stat" data-testid="match-line">${formatMatchScoreLine(item.matchScore)}</span>
            <span class="stat" data-testid="price">${priceLabel(item)}</span>
          </div>
          <p class="muted tiny" data-testid="vessel-line">${formatVesselLine(item.vessel)}</p>
          <p class="muted" data-testid="order-bonus-hint">${bonus}</p>
          <div class="btn-row primary-actions circulate-actions"></div>
        </div>
      `;
      const row = card.querySelector(".circulate-actions")!;
      const displayBtn = this.button(
        "上架",
        () => this.setState(circulate(s, "display")),
        "display",
      );
      const giftBtn = this.button(
        "赠予",
        () => this.setState(circulate(s, "gift")),
        "gift",
      );
      displayBtn.dataset.testid = "display-btn";
      giftBtn.dataset.testid = "gift-btn";
      row.append(displayBtn, giftBtn);
      return card;
    }

    if (s.phase === "result") {
      card.classList.add("phase-result");
      card.innerHTML = `
        <h2>流通完成</h2>
        <p class="muted" data-testid="result-action">${s.lastResult ? formatActionLine(s.lastResult.action) : ""}</p>
      `;
      card.appendChild(this.renderLastResult(s));
      const row = document.createElement("div");
      row.className = "btn-row primary-actions";
      row.append(
        this.button("继续经营", () => this.setState(continueAfterResult(s)), "primary"),
      );
      card.appendChild(row);
      return card;
    }

    if (s.phase === "day_complete") {
      const stats = computeSessionStats(s);
      const dayEnd = buildDayEndNarrative(s);
      const elig = evaluateRevisitEligibility(s);
      card.classList.add("phase-day-end");
      card.innerHTML = `
        <div class="day-complete-art" role="img" aria-label="打烊窗景" data-testid="day-complete-art"></div>
        <h2>今日打烊</h2>
        <p data-testid="day-end-warmth">${dayEnd.warmthLine} · 今日流通 ${s.circulationsToday} 次</p>
        <p class="muted" data-testid="day-end-circulation">${dayEnd.circulationLine}</p>
        <p class="muted" data-testid="day-end-reputation">${dayEnd.reputationLine}</p>
        <p class="muted" data-testid="day-end-favor">${dayEnd.favorLine}</p>
        <p data-testid="day-end-closing">${dayEnd.closingLine}</p>
        <p class="muted tiny" data-testid="day-end-atmosphere">${formatAtmosphereClosing(s.day)}</p>
        <p class="muted tiny" data-testid="day-end-stats">${formatStatsSummary(stats)}</p>
        <p class="muted tiny" data-testid="day-end-orders">${formatOrderDayEndLine(s)}</p>
        <p class="muted tiny" data-testid="revisit-hint">${formatRevisitHint(s)}</p>
        ${
          elig.topName
            ? `<p class="muted tiny" data-testid="revisit-welcome">${formatRevisitWelcome(elig.topName)}</p>`
            : ""
        }
      `;
      if (s.lastResult) card.appendChild(this.renderLastResult(s));
      const row = document.createElement("div");
      row.className = "btn-row primary-actions";
      row.append(
        this.button(
          "进入下一日",
          () => {
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
          },
          "primary",
        ),
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
    box.className = "result-box";
    box.innerHTML = `
      <div class="moment-card" data-testid="moment-card">
        <p data-testid="moment-header"><strong>${formatMomentCardHeader(r)}</strong></p>
        <p data-testid="action-result-line">${formatCirculationResultLine(r.action, r.warmthGained)}</p>
        <p class="moment-body">${r.momentCard}</p>
        <p class="muted tiny" data-testid="moment-footer">${formatMomentCardFooter(r)}</p>
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
