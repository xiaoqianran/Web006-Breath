import { describe, it, expect } from "vitest";
import {
  priceLabel,
  warmthPrice,
  warmthPriceRankTitle,
  formatWarmthPriceLine,
  formatPriceNarrative,
  qualityMultiplier,
  orderBonusHint,
  firstOrderBonusHint,
  rollDailyOrder,
  type CraftedItem,
} from "../src/core";

const item = (
  quality: CraftedItem["quality"],
  circulationValue: number,
  vessel: CraftedItem["vessel"] = "tea",
): CraftedItem => ({
  id: "p",
  emotionId: "e",
  vessel,
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
    expect(warmthPriceRankTitle(9)).toBe("厚礼一念");
    expect(formatWarmthPriceLine(item("fine", 5))).toContain("足可心意");
    expect(formatPriceNarrative(item("simple", 2))).toContain("素朴");
  });

  it("品质倍率有序", () => {
    expect(qualityMultiplier("rare")).toBeGreaterThan(qualityMultiplier("fine"));
    expect(qualityMultiplier("fine")).toBeGreaterThan(qualityMultiplier("simple"));
  });

  it("委托奖励提示仅在匹配时出现", () => {
    const order = rollDailyOrder(1, 0);
    const match = item(order.minQuality, 4, order.preferredVessel);
    const miss = item("rare", 4, order.preferredVessel === "tea" ? "flower" : "tea");
    expect(orderBonusHint(match, order)).toContain(order.guestName);
    expect(orderBonusHint(match, order)).toContain(String(order.bonusWarmth));
    expect(orderBonusHint(miss, order)).toBe("");
    expect(firstOrderBonusHint(match, null, [order])).toContain("可履约");
    expect(firstOrderBonusHint(miss, order, [])).toBe("");
  });
});
