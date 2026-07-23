import { describe, it, expect } from "vitest";
import {
  warmthRankTitle,
  formatWarmthLine,
  nextWarmthThreshold,
  formatWarmthProgress,
  formatWarmthEncourage,
} from "../src/core";

describe("warmth ranks", () => {
  it("档位随温存上升", () => {
    expect(warmthRankTitle(0)).toBe("尚待点燃");
    expect(warmthRankTitle(1)).toBe("一点微光");
    expect(warmthRankTitle(5)).toBe("初有余温");
    expect(warmthRankTitle(12)).toBe("掌心有暖");
    expect(warmthRankTitle(24)).toBe("炉边常亮");
    expect(warmthRankTitle(40)).toBe("暖意成河");
  });

  it("下一档与进度、鼓励文案", () => {
    expect(nextWarmthThreshold(0)).toBe(1);
    expect(nextWarmthThreshold(4)).toBe(5);
    expect(nextWarmthThreshold(40)).toBeNull();
    expect(formatWarmthLine(12)).toContain("掌心有暖");
    expect(formatWarmthProgress(11)).toContain("还差");
    expect(formatWarmthProgress(50)).toContain("最高");
    expect(formatWarmthEncourage(0)).toContain("点燃");
    expect(formatWarmthEncourage(24)).toContain("炉火");
  });
});
