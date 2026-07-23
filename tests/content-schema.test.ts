import { describe, it, expect } from "vitest";
import { SAMPLE_EMOTIONS } from "../src/data/emotions";
import {
  isValidEmotionCatalog,
  validateEmotion,
  validateEmotionList,
} from "../src/data/content-schema";

describe("content schema", () => {
  it("官方样本目录全部合法", () => {
    const issues = validateEmotionList(SAMPLE_EMOTIONS);
    expect(issues).toEqual([]);
    expect(isValidEmotionCatalog(SAMPLE_EMOTIONS)).toBe(true);
  });

  it("拒绝非法条目", () => {
    expect(validateEmotion({}).length).toBeGreaterThan(0);
    expect(
      validateEmotionList([
        {
          id: "x",
          guestName: "a",
          text: "短",
          tags: ["无效标签"],
          intensity: 9,
        },
      ]).length,
    ).toBeGreaterThan(0);
  });

  it("检测重复 id", () => {
    const a = SAMPLE_EMOTIONS[0]!;
    const issues = validateEmotionList([a, { ...a }]);
    expect(issues.some((i) => i.message.includes("重复"))).toBe(true);
  });
});
