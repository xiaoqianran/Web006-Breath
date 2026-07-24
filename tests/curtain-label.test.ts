import { describe, it, expect } from "vitest";
import {
  formatCurtainLine,
  formatCurtainOpenAside,
  formatRainStickAside,
  formatCurtainEncourage,
} from "../src/core";

describe("curtain-label", () => {
  it("门帘与雨幕文案", () => {
    expect(formatCurtainLine(1).length).toBeGreaterThan(4);
    expect(formatCurtainLine(2)).toMatch(/雨|凉|干净/);
    expect(formatCurtainOpenAside(0)).toContain("安静");
    expect(formatCurtainOpenAside(3)).toContain("3");
    expect(formatRainStickAside(2)).toMatch(/雨/);
    expect(formatCurtainEncourage(2)).toMatch(/缝|慢/);
  });
});
