import { describe, it, expect } from "vitest";
import {
  formatBookPressLine,
  formatWeightBarLine,
  formatPressAside,
  formatPressEncourage,
  formatPressPair,
} from "../src/core";

describe("press-label", () => {
  it("书压与压条文案", () => {
    expect(formatBookPressLine(1).length).toBeGreaterThan(4);
    expect(formatBookPressLine(2)).toMatch(/压|痕|册|页/);
    expect(formatWeightBarLine(0)).toMatch(/压条|凉|温存|页/);
    expect(formatWeightBarLine(20)).toMatch(/压|温|重|贴|呼/);
    expect(formatPressAside(0)).toMatch(/压|空|卡/);
    expect(formatPressAside(5)).toContain("5");
    expect(formatPressEncourage(0)).toMatch(/压|贴|清/);
    expect(formatPressPair(1, 10)).toMatch(/书压|压|条/);
  });
});
