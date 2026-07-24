import { describe, it, expect } from "vitest";
import {
  formatTailorHamLine,
  formatSleeveBoardLine,
  formatHamAside,
  formatHamEncourage,
  formatHamPair,
} from "../src/core";

describe("ham-label", () => {
  it("烫馒头与袖烫板文案", () => {
    expect(formatTailorHamLine(1).length).toBeGreaterThan(4);
    expect(formatTailorHamLine(2)).toMatch(/馒|旧|袖|布/);
    expect(formatSleeveBoardLine(0)).toMatch(/袖|凉|温存/);
    expect(formatSleeveBoardLine(20)).toMatch(/板|温|熨|难|慢/);
    expect(formatHamAside(0)).toMatch(/馒|圆|角/);
    expect(formatHamEncourage(0)).toMatch(/静|熨|袖/);
    expect(formatHamEncourage(2)).toContain("2");
    expect(formatHamPair(1, 10)).toMatch(/烫|馒|袖|板/);
  });
});
