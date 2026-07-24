import { describe, it, expect } from "vitest";
import {
  formatSoftShearsLine,
  formatSnipDishLine,
  formatShearsAside,
  formatShearsEncourage,
  formatShearsPair,
} from "../src/core";

describe("shears-label", () => {
  it("软剪与剪线碟文案", () => {
    expect(formatSoftShearsLine(1).length).toBeGreaterThan(4);
    expect(formatSoftShearsLine(2)).toMatch(/剪|旧|果断|柄/);
    expect(formatSnipDishLine(0)).toMatch(/碟|空|线/);
    expect(formatSnipDishLine(5)).toContain("5");
    expect(formatShearsAside(0)).toMatch(/凉|温存|剪/);
    expect(formatShearsAside(20)).toMatch(/剪|温|断|柔/);
    expect(formatShearsEncourage(0)).toMatch(/剪|干净|第一/);
    expect(formatShearsPair(1, 2)).toMatch(/剪|碟|线/);
  });
});
