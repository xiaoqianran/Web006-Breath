import { describe, expect, it } from "vitest";
import {
  formatNiddyNoddyLine,
  formatYarnSkeinLine,
  formatSoftniddyAside,
  formatSoftniddyEncourage,
  formatSoftniddyPair,
} from "../src/core/softniddy-label";

describe("softniddy-label", () => {
  it("五函数按阈值分支且非空", () => {
    expect(formatNiddyNoddyLine(1).length).toBeGreaterThan(4);
    expect(formatNiddyNoddyLine(2)).toMatch(/架|匀|绕|绞|赶|工/);
    expect(formatYarnSkeinLine(0)).toMatch(/绞|线|松|温存|系|结/);
    expect(formatYarnSkeinLine(15)).toMatch(/线|绞|店|散|绕|束/);
    expect(formatSoftniddyAside(0)).toMatch(/架|空|流通|绕|绞|形/);
    expect(formatSoftniddyAside(12)).toMatch(/12|绕|许|可|温柔/);
    expect(formatSoftniddyAside(30)).toMatch(/30|逾|轻绕|结/);
    expect(formatSoftniddyEncourage(0)).toMatch(/绕绞|绞线|散|线|绕/);
    expect(formatSoftniddyEncourage(2)).toMatch(/架|绕|绞|流通|成/);
    expect(formatSoftniddyEncourage(5)).toMatch(/架|放|绕|松|肩/);
    const pair = formatSoftniddyPair(3, 20);
    expect(pair).toContain(formatNiddyNoddyLine(3));
    expect(pair).toContain(formatYarnSkeinLine(20));
  });
});
