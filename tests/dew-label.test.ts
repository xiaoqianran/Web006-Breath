import { describe, it, expect } from "vitest";
import {
  formatMorningDewLine,
  formatWetSillLine,
  formatDewAside,
  formatDewEncourage,
  formatDewPair,
} from "../src/core";

describe("dew-label", () => {
  it("晨露与湿窗台文案", () => {
    expect(formatMorningDewLine(1).length).toBeGreaterThan(4);
    expect(formatMorningDewLine(2)).toMatch(/晨露|店招|亮/);
    expect(formatWetSillLine(0)).toMatch(/凉|湿|温存/);
    expect(formatWetSillLine(20)).toMatch(/窗|干|水印|温柔/);
    expect(formatDewAside(0)).toMatch(/露|门/);
    expect(formatDewAside(2)).toContain("2");
    expect(formatDewEncourage(0)).toMatch(/门铃|露/);
    expect(formatDewPair(1, 10)).toMatch(/晨露|窗/);
  });
});
