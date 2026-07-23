import { describe, it, expect } from "vitest";
import {
  DEFAULT_SETTINGS,
  loadSettings,
  saveSettings,
  updateSettings,
  parseSettings,
  createMemoryStore,
  normalizeVolume,
  formatVolumePercent,
} from "../src/core";

describe("player settings", () => {
  it("默认设置合理", () => {
    expect(DEFAULT_SETTINGS.showHints).toBe(true);
    expect(DEFAULT_SETTINGS.tutorialSeen).toBe(false);
    expect(DEFAULT_SETTINGS.volumeMaster).toBeGreaterThan(0);
    expect(DEFAULT_SETTINGS.volumeSfx).toBeGreaterThan(0);
    expect(DEFAULT_SETTINGS.volumeBgm).toBeGreaterThan(0);
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
    expect(s.sfxEnabled).toBe(true);
    expect(s.volumeMaster).toBe(DEFAULT_SETTINGS.volumeMaster);
  });

  it("旧存档缺少 sfxEnabled 与音量时默认合理", () => {
    const s = parseSettings(JSON.stringify({ showHints: false, reduceMotion: true, tutorialSeen: true }));
    expect(s.sfxEnabled).toBe(true);
    expect(s.showHints).toBe(false);
    expect(s.volumeBgm).toBe(DEFAULT_SETTINGS.volumeBgm);
  });

  it("音量钳制与百分比", () => {
    expect(normalizeVolume(2, 0.5)).toBe(1);
    expect(normalizeVolume(-1, 0.5)).toBe(0);
    expect(normalizeVolume("x", 0.42)).toBe(0.42);
    expect(formatVolumePercent(0.455)).toBe("46%");
    const store = createMemoryStore();
    const next = updateSettings(store, { volumeSfx: 1.5, volumeMaster: -0.2 });
    expect(next.volumeSfx).toBe(1);
    expect(next.volumeMaster).toBe(0);
  });
});

