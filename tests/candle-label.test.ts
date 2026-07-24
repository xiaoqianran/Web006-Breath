import { describe, it, expect } from "vitest";
import {
  candleFlameTitle,
  formatCandleLine,
  formatCandleAside,
  formatWishTagLine,
  formatWishHangAside,
  formatCandleWishPair,
} from "../src/core";

describe("candle-label", () => {
  it("烛火档位与祈愿签文案", () => {
    expect(candleFlameTitle(0)).toBe("待燃");
    expect(candleFlameTitle(12)).toBe("掌心烛");
    expect(candleFlameTitle(40)).toBe("长明烛");
    expect(formatCandleLine(5)).toContain("初燃");
    expect(formatCandleAside(0)).toContain("点着");
    expect(formatWishTagLine(0)).toContain("没有");
    expect(formatWishTagLine(3)).toContain("3");
    expect(formatWishHangAside(true)).toContain("赠予");
    expect(formatWishHangAside(false)).toContain("上架");
    expect(formatCandleWishPair(8, 2)).toMatch(/烛火|祈愿/);
  });
});
