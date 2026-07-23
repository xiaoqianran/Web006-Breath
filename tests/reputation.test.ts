import { describe, it, expect } from "vitest";
import {
  reputationRankTitle,
  formatReputationLine,
  nextReputationThreshold,
  formatReputationProgress,
} from "../src/core";

describe("reputation ranks", () => {
  it("档位随口碑上升", () => {
    expect(reputationRankTitle(0)).toBe("静静开张");
    expect(reputationRankTitle(2)).toBe("初有人知");
    expect(reputationRankTitle(6)).toBe("被记得的店");
    expect(reputationRankTitle(12)).toBe("口碑小铺");
    expect(reputationRankTitle(20)).toBe("街角灯塔");
  });

  it("下一档与进度文案", () => {
    expect(nextReputationThreshold(0)).toBe(2);
    expect(nextReputationThreshold(20)).toBeNull();
    expect(formatReputationLine(6)).toContain("被记得的店");
    expect(formatReputationProgress(5)).toContain("还差");
    expect(formatReputationProgress(25)).toContain("最高");
  });
});
