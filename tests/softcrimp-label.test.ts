import { describe, expect, it } from "vitest";
import {
  formatCrimpTubeLine,
  formatCrimpPliersLine,
  formatSoftcrimpAside,
  formatSoftcrimpEncourage,
  formatSoftcrimpPair,
} from "../src/core/softcrimp-label";

describe("softcrimp-label", () => {
  it("五函数按阈值分支且非空", () => {
    expect(formatCrimpTubeLine(1).length).toBeGreaterThan(4);
    expect(formatCrimpTubeLine(2)).toMatch(/管|轻|收|点|硬|夹/);
    expect(formatCrimpPliersLine(0)).toMatch(/压扣|钳|合|温存|压/);
    expect(formatCrimpPliersLine(15)).toMatch(/钳|管|店|线|收|稳/);
    expect(formatSoftcrimpAside(0)).toMatch(/管|齐|流通|压|收/);
    expect(formatSoftcrimpAside(12)).toMatch(/12|收|许|可|温柔/);
    expect(formatSoftcrimpAside(30)).toMatch(/30|逾|轻收|口/);
    expect(formatSoftcrimpEncourage(0)).toMatch(/压扣|管|钳|收/);
    expect(formatSoftcrimpEncourage(2)).toMatch(/管|钳|压|流通|收/);
    expect(formatSoftcrimpEncourage(5)).toMatch(/钳|放|收|松|指/);
    const pair = formatSoftcrimpPair(3, 20);
    expect(pair).toContain(formatCrimpTubeLine(3));
    expect(pair).toContain(formatCrimpPliersLine(20));
  });
});
