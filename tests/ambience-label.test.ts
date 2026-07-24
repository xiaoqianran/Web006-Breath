import { describe, it, expect } from "vitest";
import {
  formatWindChimeLine,
  formatShopCatLine,
  formatAmbiencePair,
  formatAmbienceEncourage,
} from "../src/core";

describe("ambience-label", () => {
  it("风铃与店猫文案随日与流通变化", () => {
    expect(formatWindChimeLine(1).length).toBeGreaterThan(4);
    expect(formatWindChimeLine(2)).toMatch(/雨|软/);
    expect(formatShopCatLine(0)).toContain("睡");
    expect(formatShopCatLine(5)).toMatch(/拍子|姿势/);
    expect(formatAmbiencePair(1, 0)).toContain("风铃");
    expect(formatAmbienceEncourage(2)).toMatch(/慢|停/);
  });
});
