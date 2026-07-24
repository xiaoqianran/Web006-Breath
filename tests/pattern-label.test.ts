import { describe, it, expect } from "vitest";
import {
  formatPatternPaperLine,
  formatChalkWheelLine,
  formatPatternAside,
  formatPatternEncourage,
  formatPatternPair,
} from "../src/core";

describe("pattern-label", () => {
  it("裁样纸与划粉文案", () => {
    expect(formatPatternPaperLine(1).length).toBeGreaterThan(4);
    expect(formatPatternPaperLine(2)).toMatch(/纸|折|样|改/);
    expect(formatChalkWheelLine(0)).toMatch(/划粉|干|温存|虚线/);
    expect(formatChalkWheelLine(20)).toMatch(/粉|温|改|线|淡/);
    expect(formatPatternAside(0)).toMatch(/纸|样|改/);
    expect(formatPatternEncourage(0)).toMatch(/静|样|线/);
    expect(formatPatternEncourage(2)).toContain("2");
    expect(formatPatternPair(1, 10)).toMatch(/样|纸|粉|划/);
  });
});
