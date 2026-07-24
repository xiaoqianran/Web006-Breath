import { describe, it, expect } from "vitest";
import {
  formatButtonBoxLine,
  formatSoftTapeLine,
  formatButtonAside,
  formatButtonEncourage,
  formatButtonPair,
} from "../src/core";

describe("button-label", () => {
  it("钮扣匣与软尺文案", () => {
    expect(formatButtonBoxLine(1).length).toBeGreaterThan(4);
    expect(formatButtonBoxLine(2)).toMatch(/匣|扣|颗|走/);
    expect(formatSoftTapeLine(0)).toMatch(/软尺|卷|温存/);
    expect(formatSoftTapeLine(20)).toMatch(/尺|温|尺|寸|松|合/);
    expect(formatButtonAside(true)).toContain("赠");
    expect(formatButtonAside(false)).toContain("上架");
    expect(formatButtonEncourage(0)).toMatch(/钮扣|匣|选/);
    expect(formatButtonPair(1, 10)).toMatch(/钮扣|匣|尺/);
  });
});
