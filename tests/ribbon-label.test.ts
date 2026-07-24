import { describe, it, expect } from "vitest";
import {
  formatRibbonSpoolLine,
  formatSnipThreadLine,
  formatRibbonAside,
  formatRibbonEncourage,
  formatRibbonPair,
} from "../src/core";

describe("ribbon-label", () => {
  it("丝带卷与剪线头文案", () => {
    expect(formatRibbonSpoolLine(1).length).toBeGreaterThan(4);
    expect(formatRibbonSpoolLine(2)).toMatch(/丝带|彩虹|抽/);
    expect(formatSnipThreadLine(0)).toMatch(/剪线|干净|包装/);
    expect(formatSnipThreadLine(5)).toContain("5");
    expect(formatRibbonAside(true)).toContain("赠");
    expect(formatRibbonAside(false)).toContain("上架");
    expect(formatRibbonEncourage(0)).toMatch(/丝带|结/);
    expect(formatRibbonPair(1, 2)).toMatch(/丝带|线|剪/);
  });
});
