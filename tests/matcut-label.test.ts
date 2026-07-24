import { describe, it, expect } from "vitest";
import {
  formatCuttingMatLine,
  formatStraightRulerLine,
  formatMatcutAside,
  formatMatcutEncourage,
  formatMatcutPair,
} from "../src/core";

describe("matcut-label", () => {
  it("裁切垫与直尺文案", () => {
    expect(formatCuttingMatLine(1).length).toBeGreaterThan(4);
    expect(formatCuttingMatLine(2)).toMatch(/垫|痕|裁|环衬/);
    expect(formatStraightRulerLine(0)).toMatch(/尺|凉|温存|边/);
    expect(formatStraightRulerLine(20)).toMatch(/尺|温|直|边|齐/);
    expect(formatMatcutAside(0)).toMatch(/垫|空|刀|痕/);
    expect(formatMatcutAside(5)).toContain("5");
    expect(formatMatcutEncourage(0)).toMatch(/尺|直|线/);
    expect(formatMatcutPair(1, 10)).toMatch(/裁|垫|尺/);
  });
});
