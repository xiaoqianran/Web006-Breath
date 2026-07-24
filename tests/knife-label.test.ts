import { describe, it, expect } from "vitest";
import {
  formatCraftKnifeLine,
  formatSafetyRulerLine,
  formatKnifeAside,
  formatKnifeEncourage,
  formatKnifePair,
} from "../src/core";

describe("knife-label", () => {
  it("裁纸刀与安全尺文案", () => {
    expect(formatCraftKnifeLine(1).length).toBeGreaterThan(4);
    expect(formatCraftKnifeLine(2)).toMatch(/刀|柄|温|边|直/);
    expect(formatSafetyRulerLine(0)).toMatch(/尺|凉|温存|边/);
    expect(formatSafetyRulerLine(20)).toMatch(/尺|温|稳|裁|手/);
    expect(formatKnifeAside(0)).toMatch(/刃|裁|纸/);
    expect(formatKnifeEncourage(0)).toMatch(/静|裁|尺/);
    expect(formatKnifeEncourage(2)).toContain("2");
    expect(formatKnifePair(1, 10)).toMatch(/刀|尺|裁/);
  });
});
