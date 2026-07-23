import { describe, it, expect } from "vitest";
import { priceLabel, warmthPrice, qualityMultiplier, type CraftedItem } from "../src/core";

const item = (quality: CraftedItem["quality"], circulationValue: number): CraftedItem => ({
  id: "p",
  emotionId: "e",
  vessel: "tea",
  quality,
  matchScore: 2,
  circulationValue,
  label: "测试茶",
});

describe("pricing", () => {
  it("温存估价等于 circulationValue", () => {
    expect(warmthPrice(item("fine", 5))).toBe(5);
  });

  it("标签包含品质语气与估价", () => {
    expect(priceLabel(item("rare", 9))).toContain("珍重");
    expect(priceLabel(item("rare", 9))).toContain("9");
    expect(priceLabel(item("simple", 2))).toContain("素朴");
  });

  it("品质倍率有序", () => {
    expect(qualityMultiplier("rare")).toBeGreaterThan(qualityMultiplier("fine"));
    expect(qualityMultiplier("fine")).toBeGreaterThan(qualityMultiplier("simple"));
  });
});
