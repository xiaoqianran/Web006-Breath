import { describe, expect, it } from "vitest";
import {
  formatSoftEyeMaskLine,
  formatMaskPouchLine,
  formatEyemaskAside,
  formatEyemaskEncourage,
  formatEyemaskPair,
} from "../src/core/eyemask-label";

describe("eyemask-label", () => {
  it("formats soft eye mask, pouch, aside, encourage and pair", () => {
    expect(formatSoftEyeMaskLine(1).length).toBeGreaterThan(4);
    expect(formatSoftEyeMaskLine(2)).toMatch(/罩|轻|遮|双|压|眉|眼/);
    expect(formatMaskPouchLine(0)).toMatch(/袋|空|温存|装|只|收/);
    expect(formatMaskPouchLine(15)).toMatch(/眼|罩|袋|店|温|暖|歇|滑/);
    expect(formatEyemaskAside(0)).toMatch(/罩|叠|流通|暗|戴|只/);
    expect(formatEyemaskAside(5)).toContain("5");
    expect(formatEyemaskEncourage(0)).toMatch(/眼|罩|袋|眼皮|捂/);
    expect(formatEyemaskPair(1, 10)).toMatch(/眼|罩|袋|丝|暖/);
  });
});
