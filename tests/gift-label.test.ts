import { describe, it, expect } from "vitest";
import {
  formatGiftWrapLine,
  formatDisplayWrapLine,
  formatCirculationChoiceHint,
  formatGiftBoxAside,
} from "../src/core";

describe("gift-label", () => {
  it("赠予与上架包装文案", () => {
    expect(formatGiftWrapLine("flower", "rare")).toContain("珍稀");
    expect(formatGiftWrapLine("tea", "simple")).toContain("素简");
    expect(formatDisplayWrapLine("art", "fine")).toContain("货架");
    expect(formatCirculationChoiceHint("gift")).toContain("赠予");
    expect(formatCirculationChoiceHint("display")).toContain("上架");
    expect(formatGiftBoxAside("gift")).toContain("礼物");
  });
});
