import { describe, it, expect } from "vitest";
import {
  intensityRankTitle,
  formatIntensityLine,
  intensityCraftHint,
} from "../src/core";

describe("intensity labels", () => {
  it("强度档位称号", () => {
    expect(intensityRankTitle(1)).toBe("如羽毛");
    expect(intensityRankTitle(2)).toBe("轻轻一触");
    expect(intensityRankTitle(3)).toBe("中等起伏");
    expect(intensityRankTitle(4)).toBe("很重");
    expect(intensityRankTitle(5)).toBe("几乎满溢");
  });

  it("文案含强度数字与建议", () => {
    expect(formatIntensityLine(4)).toContain("4/5");
    expect(formatIntensityLine(4)).toContain("很重");
    expect(intensityCraftHint(5)).toContain("稳妥");
    expect(intensityCraftHint(1)).toContain("素简");
    expect(intensityCraftHint(3)).toContain("随心");
  });
});
