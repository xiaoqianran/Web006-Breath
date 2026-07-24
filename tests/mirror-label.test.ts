import { describe, it, expect } from "vitest";
import {
  formatGuestMirrorLine,
  formatSoftClothLine,
  formatMirrorAside,
  formatMirrorEncourage,
  formatMirrorPair,
} from "../src/core";

describe("mirror-label", () => {
  it("试衣镜与软擦布文案", () => {
    expect(formatGuestMirrorLine(1).length).toBeGreaterThan(4);
    expect(formatGuestMirrorLine(2)).toMatch(/镜|雾|擦|自己/);
    expect(formatSoftClothLine(0)).toMatch(/擦布|温存|雾/);
    expect(formatSoftClothLine(20)).toMatch(/擦|温|完美|清/);
    expect(formatMirrorAside(0)).toMatch(/空|镜|领/);
    expect(formatMirrorAside(2)).toContain("2");
    expect(formatMirrorEncourage(0)).toMatch(/镜|擦/);
    expect(formatMirrorPair(1, 10)).toMatch(/镜|擦|光|雾|温/);
  });
});
