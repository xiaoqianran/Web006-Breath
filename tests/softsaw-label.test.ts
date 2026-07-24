import { describe, expect, it } from "vitest";
import {
  formatJewelerSawLine,
  formatSawBladeLine,
  formatSoftsawAside,
  formatSoftsawEncourage,
  formatSoftsawPair,
} from "../src/core/softsaw-label";

describe("softsaw-label", () => {
  it("五函数按阈值分支且非空", () => {
    expect(formatJewelerSawLine(1).length).toBeGreaterThan(4);
    expect(formatJewelerSawLine(2)).toMatch(/锯|轻|缝|硬|推/);
    expect(formatSawBladeLine(0)).toMatch(/锯|条|新|温存|装|根/);
    expect(formatSawBladeLine(15)).toMatch(/条|金|店|硬|边|锯|缝/);
    expect(formatSoftsawAside(0)).toMatch(/锯|空|流通|缝|线/);
    expect(formatSoftsawAside(12)).toMatch(/12|锯|许|可|温柔/);
    expect(formatSoftsawAside(30)).toMatch(/30|逾|轻锯|条/);
    expect(formatSoftsawEncourage(0)).toMatch(/金工|锯|条|硬|边|锯/);
    expect(formatSoftsawEncourage(2)).toMatch(/锯|条|推|流通|缝/);
    expect(formatSoftsawEncourage(5)).toMatch(/条|收|锯|松|腕/);
    const pair = formatSoftsawPair(3, 20);
    expect(pair).toContain(formatJewelerSawLine(3));
    expect(pair).toContain(formatSawBladeLine(20));
  });
});
