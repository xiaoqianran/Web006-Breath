import { describe, it, expect } from "vitest";
import {
  DEFAULT_SETTINGS,
  loadSettings,
  saveSettings,
  updateSettings,
  parseSettings,
  createMemoryStore,
} from "../src/core";

describe("player settings", () => {
  it("默认设置合理", () => {
    expect(DEFAULT_SETTINGS.showHints).toBe(true);
    expect(DEFAULT_SETTINGS.tutorialSeen).toBe(false);
  });

  it("存取与局部更新", () => {
    const store = createMemoryStore();
    expect(loadSettings(store).showHints).toBe(true);
    saveSettings(store, { ...DEFAULT_SETTINGS, showHints: false, reduceMotion: true });
    const loaded = loadSettings(store);
    expect(loaded.showHints).toBe(false);
    expect(loaded.reduceMotion).toBe(true);
    const next = updateSettings(store, { tutorialSeen: true });
    expect(next.tutorialSeen).toBe(true);
    expect(next.showHints).toBe(false);
  });

  it("损坏 JSON 回退默认", () => {
    const store = createMemoryStore({ "yixi.settings.v1": "{not-json" });
    expect(loadSettings(store)).toEqual(DEFAULT_SETTINGS);
  });

  it("parseSettings 补全缺省字段", () => {
    const s = parseSettings("{}");
    expect(s.showHints).toBe(true);
    expect(s.reduceMotion).toBe(false);
  });
});
