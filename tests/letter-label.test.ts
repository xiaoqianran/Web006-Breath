import { describe, it, expect } from "vitest";
import {
  formatReplyBoxLine,
  formatStampTrayLine,
  formatLetterAside,
  formatLetterEncourage,
  formatLetterPair,
} from "../src/core";

describe("letter-label", () => {
  it("回信匣与邮票文案", () => {
    expect(formatReplyBoxLine(0)).toMatch(/空|回信/);
    expect(formatReplyBoxLine(5)).toContain("5");
    expect(formatStampTrayLine(1).length).toBeGreaterThan(4);
    expect(formatStampTrayLine(2)).toMatch(/邮票|贴|名/);
    expect(formatLetterAside(0)).toMatch(/墨|温存/);
    expect(formatLetterAside(20)).toMatch(/回信|邮戳|流通/);
    expect(formatLetterEncourage(0)).toMatch(/匣|整理/);
    expect(formatLetterPair(1, 1)).toMatch(/匣|信|邮票/);
  });
});
