import { describe, expect, it } from "vitest";
import {
  formatSplitRingLine,
  formatSplitOpenerLine,
  formatSoftsplitAside,
  formatSoftsplitEncourage,
  formatSoftsplitPair,
} from "../src/core/softsplit-label";

describe("softsplit-label", () => {
  it("五函数按阈值分支且非空", () => {
    expect(formatSplitRingLine(1).length).toBeGreaterThan(4);
    expect(formatSplitRingLine(2)).toMatch(/环|韧|开|点|硬|掰/);
    expect(formatSplitOpenerLine(0)).toMatch(/撬环|器|合|温存|撬/);
    expect(formatSplitOpenerLine(15)).toMatch(/器|环|店|扣|开|路/);
    expect(formatSoftsplitAside(0)).toMatch(/环|齐|流通|撬|口/);
    expect(formatSoftsplitAside(12)).toMatch(/12|开|许|可|温柔/);
    expect(formatSoftsplitAside(30)).toMatch(/30|逾|轻开|缝/);
    expect(formatSoftsplitEncourage(0)).toMatch(/开口|环|撬环|器|开/);
    expect(formatSoftsplitEncourage(2)).toMatch(/环|撬|开|流通|通/);
    expect(formatSoftsplitEncourage(5)).toMatch(/器|合|开|松|指/);
    const pair = formatSoftsplitPair(3, 20);
    expect(pair).toContain(formatSplitRingLine(3));
    expect(pair).toContain(formatSplitOpenerLine(20));
  });
});
