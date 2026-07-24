import { describe, expect, it } from "vitest";
import {
  formatPaperLanternLine,
  formatLanternShadeLine,
  formatPaperLanternAside,
  formatPaperLanternEncourage,
  formatPaperLanternPair,
} from "../src/core/lantern-label";

describe("lantern-label", () => {
  it("formats paper lantern, shade, aside, encourage and pair", () => {
    expect(formatPaperLanternLine(1).length).toBeGreaterThan(4);
    expect(formatPaperLanternLine(2)).toMatch(/光|柔|铺|路|刺|眼|暖/);
    expect(formatLanternShadeLine(0)).toMatch(/罩|暗|温存|光|透/);
    expect(formatLanternShadeLine(15)).toMatch(/光|罩|纸|店|温|路|三|百|漫/);
    expect(formatPaperLanternAside(0)).toMatch(/灯|新|流通|路|照|亮/);
    expect(formatPaperLanternAside(5)).toContain("5");
    expect(formatPaperLanternEncourage(0)).toMatch(/纸|灯|罩|路|照/);
    expect(formatPaperLanternPair(1, 10)).toMatch(/灯|罩|纸|光/);
  });
});
