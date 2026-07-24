import { describe, expect, it } from "vitest";
import {
  formatMiniAnvilLine,
  formatNylonHammerLine,
  formatSoftanvilAside,
  formatSoftanvilEncourage,
  formatSoftanvilPair,
} from "../src/core/softanvil-label";

describe("softanvil-label", () => {
  it("五函数按阈值分支且非空", () => {
    expect(formatMiniAnvilLine(1).length).toBeGreaterThan(4);
    expect(formatMiniAnvilLine(2)).toMatch(/砧|稳|敲|下|硬|砸/);
    expect(formatNylonHammerLine(0)).toMatch(/尼|龙|锤|放|温存|敲|下/);
    expect(formatNylonHammerLine(15)).toMatch(/锤|砧|店|硬|边|敲|软/);
    expect(formatSoftanvilAside(0)).toMatch(/砧|净|流通|敲|声/);
    expect(formatSoftanvilAside(12)).toMatch(/12|敲|许|可|温柔/);
    expect(formatSoftanvilAside(30)).toMatch(/30|逾|轻敲|痕/);
    expect(formatSoftanvilEncourage(0)).toMatch(/铁砧|尼龙|锤|硬|边|敲/);
    expect(formatSoftanvilEncourage(2)).toMatch(/锤|敲|定|流通|成/);
    expect(formatSoftanvilEncourage(5)).toMatch(/锤|放|敲|松|腕/);
    const pair = formatSoftanvilPair(3, 20);
    expect(pair).toContain(formatMiniAnvilLine(3));
    expect(pair).toContain(formatNylonHammerLine(20));
  });
});
