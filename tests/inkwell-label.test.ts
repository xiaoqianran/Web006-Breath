import { describe, it, expect } from "vitest";
import {
  formatSmallInkBottleLine,
  formatSoftBlotSheetLine,
  formatSlowinkAside,
  formatSlowinkEncourage,
  formatSlowinkPair,
} from "../src/core";

describe("inkwell-label", () => {
  it("小墨水瓶与吸墨纸文案", () => {
    expect(formatSmallInkBottleLine(1).length).toBeGreaterThan(4);
    expect(formatSmallInkBottleLine(2)).toMatch(/墨|写|温|浅|责/);
    expect(formatSoftBlotSheetLine(0)).toMatch(/纸|干|温存|滴|吸/);
    expect(formatSoftBlotSheetLine(20)).toMatch(/纸|温|吸|墨|字|心/);
    expect(formatSlowinkAside(0)).toMatch(/墨|盖|流通|字/);
    expect(formatSlowinkAside(5)).toContain("5");
    expect(formatSlowinkEncourage(0)).toMatch(/墨瓶|吸墨|慢|写/);
    expect(formatSlowinkPair(1, 10)).toMatch(/墨|纸|瓶/);
  });
});
