import { describe, it, expect } from "vitest";
import {
  formatInkWellLine,
  formatBlotterLine,
  formatInkAside,
  formatInkEncourage,
  formatInkPair,
} from "../src/core";

describe("ink-label", () => {
  it("墨台与吸墨纸文案", () => {
    expect(formatInkWellLine(1).length).toBeGreaterThan(4);
    expect(formatInkWellLine(2)).toMatch(/墨|浅|短句/);
    expect(formatBlotterLine(0)).toMatch(/干净|吸墨/);
    expect(formatBlotterLine(5)).toContain("5");
    expect(formatInkAside(0)).toMatch(/凉|温存/);
    expect(formatInkAside(20)).toMatch(/墨|温存|句/);
    expect(formatInkEncourage(0)).toMatch(/蘸|标签/);
    expect(formatInkPair(1, 2)).toMatch(/墨|吸墨/);
  });
});
