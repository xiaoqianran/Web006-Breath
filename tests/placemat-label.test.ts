import { describe, it, expect } from "vitest";
import {
  formatPlaceMatLine,
  formatChopstickRestLine,
  formatPlacematAside,
  formatPlacematEncourage,
  formatPlacematPair,
} from "../src/core";

describe("placemat-label", () => {
  it("餐垫与筷枕文案", () => {
    expect(formatPlaceMatLine(1).length).toBeGreaterThan(4);
    expect(formatPlaceMatLine(2)).toMatch(/垫|方|桌|框|人/);
    expect(formatChopstickRestLine(0)).toMatch(/枕|空|温存|双|筷/);
    expect(formatChopstickRestLine(20)).toMatch(/枕|温|小|托|拘|筷|寸/);
    expect(formatPlacematAside(0)).toMatch(/垫|卷|流通|桌|铺/);
    expect(formatPlacematAside(5)).toContain("5");
    expect(formatPlacematEncourage(0)).toMatch(/餐垫|筷枕|桌|铺/);
    expect(formatPlacematPair(1, 10)).toMatch(/垫|枕|餐/);
  });
});
