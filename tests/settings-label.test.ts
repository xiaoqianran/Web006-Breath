import { describe, it, expect } from "vitest";
import {
  DEFAULT_SETTINGS,
  formatHintsToggleLine,
  formatSfxToggleLine,
  formatSettingsSummary,
  formatSettingsEncourage,
} from "../src/core";

describe("settings-label", () => {
  it("音量与开关文案", () => {
    expect(formatHintsToggleLine(true)).toContain("开");
    expect(formatHintsToggleLine(false)).toContain("关");
    expect(formatSfxToggleLine(true, false)).toContain("店铃");
    expect(formatSfxToggleLine(true, true)).toContain("减少动效");
    expect(formatSettingsSummary(DEFAULT_SETTINGS)).toContain("主音量");
    expect(formatSettingsEncourage(DEFAULT_SETTINGS)).toContain("设置");
  });
});
