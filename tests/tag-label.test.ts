import { describe, it, expect } from "vitest";
import {
  tagNote,
  formatTagLine,
  formatTagsLine,
  listAllTagLines,
  EMOTION_TAG_LIST,
} from "../src/core";

describe("tag labels", () => {
  it("标签注与列表", () => {
    expect(tagNote("温柔")).toContain("光");
    expect(formatTagLine("勇气")).toContain("勇气");
    expect(formatTagsLine(["想念", "安心"])).toContain("想念");
    expect(formatTagsLine([])).toBe("无标签");
    expect(listAllTagLines().length).toBe(EMOTION_TAG_LIST.length);
  });
});
