import { describe, it, expect } from "vitest";
import {
  formatSachetLine,
  formatDriedBouquetLine,
  formatSachetGiftAside,
  formatFragranceEncourage,
  formatSachetPair,
} from "../src/core";

describe("sachet-label", () => {
  it("香囊与干花文案", () => {
    expect(formatSachetLine(1).length).toBeGreaterThan(4);
    expect(formatSachetLine(2)).toMatch(/香囊|信|香/);
    expect(formatDriedBouquetLine(0)).toMatch(/丝带|干花|扎/);
    expect(formatDriedBouquetLine(20)).toMatch(/花|香|春|窗/);
    expect(formatSachetGiftAside(true)).toContain("赠");
    expect(formatSachetGiftAside(false)).toContain("上架");
    expect(formatFragranceEncourage(0)).toMatch(/香囊|闻/);
    expect(formatSachetPair(1, 10)).toContain("香囊");
  });
});
