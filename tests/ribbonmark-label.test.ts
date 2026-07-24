import { describe, it, expect } from "vitest";
import {
  formatBookmarkRibbonLine,
  formatPageDogearLine,
  formatRibbonmarkAside,
  formatRibbonmarkEncourage,
  formatRibbonmarkPair,
} from "../src/core";

describe("ribbonmark-label", () => {
  it("书签丝带与页角折文案", () => {
    expect(formatBookmarkRibbonLine(1).length).toBeGreaterThan(4);
    expect(formatBookmarkRibbonLine(2)).toMatch(/丝带|杏|夹|页/);
    expect(formatPageDogearLine(0)).toMatch(/页角|平|温存|折/);
    expect(formatPageDogearLine(20)).toMatch(/页|角|翘|回|折|温|展|平|浅/);
    expect(formatRibbonmarkAside(0)).toMatch(/丝带|夹|册/);
    expect(formatRibbonmarkAside(5)).toContain("5");
    expect(formatRibbonmarkEncourage(0)).toMatch(/书签|一半|丝带/);
    expect(formatRibbonmarkPair(1, 10)).toMatch(/书签|丝|页|折/);
  });
});
