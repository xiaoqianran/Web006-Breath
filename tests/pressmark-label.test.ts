import { describe, expect, it } from "vitest";
import {
  formatPressedMarkLine,
  formatSilkTailLine,
  formatPressmarkAside,
  formatPressmarkEncourage,
  formatPressmarkPair,
} from "../src/core/pressmark-label";

describe("pressmark-label", () => {
  it("formats pressed mark, silk tail, aside, encourage and pair", () => {
    expect(formatPressedMarkLine(1).length).toBeGreaterThan(4);
    expect(formatPressedMarkLine(2)).toMatch(/签|薄|夹|页|压|字/);
    expect(formatSilkTailLine(0)).toMatch(/丝|垂|温存|别|页|尾/);
    expect(formatSilkTailLine(15)).toMatch(/丝|书|店|温|明|读|垂/);
    expect(formatPressmarkAside(0)).toMatch(/签|新|流通|页|停|记/);
    expect(formatPressmarkAside(5)).toContain("5");
    expect(formatPressmarkEncourage(0)).toMatch(/压|花|签|丝|页|记/);
    expect(formatPressmarkPair(1, 10)).toMatch(/签|丝|花|页/);
  });
});
