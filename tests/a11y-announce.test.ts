import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import {
  announcePhaseChange,
  announceUnlock,
  announceViewChange,
  announceDayComplete,
  announceDayCompleteRich,
  announceCirculation,
  announceOrderFulfilled,
  announceFavorTop,
  announcePhaseWithHint,
  favorRankTitle,
  joinAnnouncements,
  helpDialogA11y,
  viewLabel,
  phaseLabel,
} from "../src/core";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");

describe("a11y announce pure helpers", () => {
  it("阶段与界面文案可读", () => {
    expect(announcePhaseChange("awaiting_vessel")).toContain(phaseLabel("awaiting_vessel"));
    expect(announceViewChange("shop")).toBe("界面：店内经营");
    expect(viewLabel("codex")).toBe("瞬间图鉴");
  });

  it("解锁与流通与打烊与委托", () => {
    expect(announceUnlock([])).toBe("");
    expect(announceUnlock(["赠予之心"])).toBe("解锁：赠予之心");
    expect(announceCirculation("珍稀")).toContain("珍稀");
    expect(announceDayComplete(3, 12)).toMatch(/第 3 日/);
    expect(announceDayComplete(3, 12)).toContain("掌心有暖");
    expect(announceDayCompleteRich(3, 12, { reputation: 2, circulations: 3 })).toMatch(
      /打烊|放下|暖/,
    );
    expect(announceOrderFulfilled("林晚", 3)).toContain("林晚");
    expect(announceOrderFulfilled("林晚", 3)).toContain("3");
    expect(announceFavorTop("阿初", 8, favorRankTitle(8))).toContain("熟客");
    expect(announcePhaseWithHint("awaiting_vessel")).toContain("容器");
  });

  it("joinAnnouncements 过滤空串", () => {
    expect(joinAnnouncements("", "阶段：等候接待", null, "界面：主菜单")).toBe(
      "阶段：等候接待。界面：主菜单",
    );
  });

  it("帮助对话框 a11y 元数据", () => {
    const h = helpDialogA11y();
    expect(h.title).toBeTruthy();
    expect(h.closeLabel).toContain("关闭");
    expect(h.descriptionId).toBe("help-dialog-desc");
  });
});

describe("a11y wiring in UI", () => {
  it("app 含 live-region、焦点陷阱与 help-close", () => {
    const app = readFileSync(resolve(root, "src/ui/app.ts"), "utf8");
    expect(app).toContain('testid = "live-region"');
    expect(app).toContain("renderLiveRegion");
    expect(app).toContain("help-close");
    expect(app).toContain("aria-modal");
    expect(app).toContain("focusBeforeHelp");
    expect(app).toContain("queueAnnounce");
    expect(app).toContain("aria-live");
  });

  it("样式含 sr-only", () => {
    const css = readFileSync(resolve(root, "src/ui/styles.css"), "utf8");
    expect(css).toContain(".sr-only");
  });

  it("index 含 skip-link 与 lang", () => {
    const html = readFileSync(resolve(root, "index.html"), "utf8");
    expect(html).toContain('lang="zh-CN"');
    expect(html).toContain("skip-link");
    expect(html).toContain('href="#app"');
  });
});
