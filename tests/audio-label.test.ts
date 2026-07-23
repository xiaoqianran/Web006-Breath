import { describe, it, expect } from "vitest";
import {
  audioNarrative,
  formatAudioLine,
  listAudioNarratives,
  formatAudioBoardSummary,
  formatAudioEncourage,
  AUDIO_MANIFEST,
  getAudioAsset,
} from "../src/core";

describe("audio-label", () => {
  it("清单条目皆有叙事", () => {
    expect(AUDIO_MANIFEST.length).toBeGreaterThanOrEqual(8);
    for (const e of AUDIO_MANIFEST) {
      expect(audioNarrative(e.id).length).toBeGreaterThan(4);
      expect(formatAudioLine(e)).toContain(e.id);
    }
    expect(listAudioNarratives("bgm").length).toBe(2);
    expect(formatAudioBoardSummary()).toMatch(/音效|背景/);
    expect(formatAudioEncourage(true)).toContain("设置");
    expect(formatAudioEncourage(false)).toContain("关");
    expect(getAudioAsset("bgm_shop")).not.toBeNull();
  });
});
