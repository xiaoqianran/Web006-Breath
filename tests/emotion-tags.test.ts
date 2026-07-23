import { describe, it, expect } from "vitest";
import { EMOTION_TAG_LIST, isEmotionTag, assertEmotionTags } from "../src/core";

describe("emotion tags catalog", () => {
  it("全集可识别", () => {
    expect(EMOTION_TAG_LIST.length).toBe(10);
    for (const t of EMOTION_TAG_LIST) {
      expect(isEmotionTag(t)).toBe(true);
    }
    expect(isEmotionTag("愤怒")).toBe(false);
    expect(assertEmotionTags(["温柔", "安心"])).toBe(true);
    expect(assertEmotionTags([])).toBe(false);
    expect(assertEmotionTags(["温柔", "未知"])).toBe(false);
  });
});
