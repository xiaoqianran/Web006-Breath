import { describe, expect, it } from "vitest";
import {
  formatClothWeightLine,
  formatPaperPatternLine,
  formatPatweightAside,
  formatPatweightEncourage,
  formatPatweightPair,
} from "../src/core/patweight-label";

describe("patweight-label", () => {
  it("formats cloth weight, paper pattern, aside, encourage and pair", () => {
    expect(formatClothWeightLine(1).length).toBeGreaterThan(4);
    expect(formatClothWeightLine(2)).toMatch(/镇|轻|压|角|皱|布/);
    expect(formatPaperPatternLine(0)).toMatch(/样|叠|温存|铺|张|纸|裁/);
    expect(formatPaperPatternLine(15)).toMatch(/样|布|店|温|合|刀|铺/);
    expect(formatPatweightAside(0)).toMatch(/镇|闲|流通|角|压|布/);
    expect(formatPatweightAside(5)).toContain("5");
    expect(formatPatweightEncourage(0)).toMatch(/布|镇|样|安|住/);
    expect(formatPatweightPair(1, 10)).toMatch(/布|镇|样|纸/);
  });
});
