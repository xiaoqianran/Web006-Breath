import { describe, it, expect } from "vitest";
import {
  matchScoreRankTitle,
  formatMatchScoreLine,
  formatQualityLine,
  formatCraftSummary,
} from "../src/core";

describe("match labels", () => {
  it("匹配分档位", () => {
    expect(matchScoreRankTitle(0)).toBe("尚在试探");
    expect(matchScoreRankTitle(1)).toBe("略有共鸣");
    expect(matchScoreRankTitle(2)).toBe("大致对味");
    expect(matchScoreRankTitle(4)).toBe("贴合得很");
    expect(matchScoreRankTitle(5)).toBe("心有灵犀");
    expect(formatMatchScoreLine(3)).toContain("大致对味");
  });

  it("品质与综合文案", () => {
    expect(formatQualityLine("rare")).toContain("珍藏");
    expect(formatQualityLine("fine")).toContain("细心");
    expect(formatQualityLine("simple")).toContain("朴素");
    const s = formatCraftSummary(4, "rare");
    expect(s).toContain("贴合得很");
    expect(s).toContain("珍藏");
  });
});
