import { describe, expect, it } from "vitest";
import {
  formatFrenchKnitterLine,
  formatKnitterYarnLine,
  formatSoftknitterAside,
  formatSoftknitterEncourage,
  formatSoftknitterPair,
} from "../src/core/softknitter-label";

describe("softknitter-label", () => {
  it("五函数按阈值分支且非空", () => {
    expect(formatFrenchKnitterLine(1).length).toBeGreaterThan(4);
    expect(formatFrenchKnitterLine(2)).toMatch(/筒|轻|套|圈|赶|工/);
    expect(formatKnitterYarnLine(0)).toMatch(/筒|线|整|温存|穿|针/);
    expect(formatKnitterYarnLine(15)).toMatch(/线|筒|店|空|套|软/);
    expect(formatSoftknitterAside(0)).toMatch(/筒|空|流通|套|纹/);
    expect(formatSoftknitterAside(12)).toMatch(/12|套|许|可|温柔/);
    expect(formatSoftknitterAside(30)).toMatch(/30|逾|轻套|线/);
    expect(formatSoftknitterEncourage(0)).toMatch(/编织|筒|线|空|套/);
    expect(formatSoftknitterEncourage(2)).toMatch(/筒|线|套|流通|成/);
    expect(formatSoftknitterEncourage(5)).toMatch(/线|绕|套|松|腕/);
    const pair = formatSoftknitterPair(3, 20);
    expect(pair).toContain(formatFrenchKnitterLine(3));
    expect(pair).toContain(formatKnitterYarnLine(20));
  });
});
