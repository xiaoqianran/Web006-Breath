import { describe, it, expect } from "vitest";
import {
  formatNapkinRingLine,
  formatGuestNapkinLine,
  formatNapkinAside,
  formatNapkinEncourage,
  formatNapkinPair,
} from "../src/core";

describe("napkin-label", () => {
  it("餐巾环与客人餐巾文案", () => {
    expect(formatNapkinRingLine(1).length).toBeGreaterThan(4);
    expect(formatNapkinRingLine(2)).toMatch(/环|轻|布|坐|拢/);
    expect(formatGuestNapkinLine(0)).toMatch(/巾|叠|温存|展|方/);
    expect(formatGuestNapkinLine(20)).toMatch(/巾|温|方|铺|拘|膝|怀/);
    expect(formatNapkinAside(0)).toMatch(/环|空|流通|布|展/);
    expect(formatNapkinAside(5)).toContain("5");
    expect(formatNapkinEncourage(0)).toMatch(/餐巾|环|布|妥/);
    expect(formatNapkinPair(1, 10)).toMatch(/环|巾|餐/);
  });
});
