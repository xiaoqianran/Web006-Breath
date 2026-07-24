import { describe, it, expect } from "vitest";
import {
  formatBiscuitTinLine,
  formatSugarSpoonLine,
  formatBiscuitAside,
  formatBiscuitEncourage,
  formatBiscuitPair,
} from "../src/core";

describe("biscuit-label", () => {
  it("饼干匣与糖勺文案", () => {
    expect(formatBiscuitTinLine(1).length).toBeGreaterThan(4);
    expect(formatBiscuitTinLine(2)).toMatch(/匣|块|沉默/);
    expect(formatSugarSpoonLine(0)).toMatch(/糖勺|凉|茶/);
    expect(formatSugarSpoonLine(20)).toMatch(/糖|温|甜/);
    expect(formatBiscuitAside(true)).toContain("赠");
    expect(formatBiscuitAside(false)).toContain("上架");
    expect(formatBiscuitEncourage(0)).toMatch(/匣|甜/);
    expect(formatBiscuitPair(1, 10)).toMatch(/饼干|匣|糖/);
  });
});
