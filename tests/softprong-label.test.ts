import { describe, expect, it } from "vitest";
import {
  formatProngOpenerLine,
  formatStoneSeatLine,
  formatSoftprongAside,
  formatSoftprongEncourage,
  formatSoftprongPair,
} from "../src/core/softprong-label";

describe("softprong-label", () => {
  it("五函数按阈值分支且非空", () => {
    expect(formatProngOpenerLine(1).length).toBeGreaterThan(4);
    expect(formatProngOpenerLine(2)).toMatch(/撬|稳|张|点|硬|扳/);
    expect(formatStoneSeatLine(0)).toMatch(/石座|空|温存|坐/);
    expect(formatStoneSeatLine(15)).toMatch(/座|爪|店|闪|托|安/);
    expect(formatSoftprongAside(0)).toMatch(/爪|齐|流通|张|托/);
    expect(formatSoftprongAside(12)).toMatch(/12|托|许|可|温柔/);
    expect(formatSoftprongAside(30)).toMatch(/30|逾|轻托|爪/);
    expect(formatSoftprongEncourage(0)).toMatch(/爪撬|石座|托/);
    expect(formatSoftprongEncourage(2)).toMatch(/爪|座|托|流通|留/);
    expect(formatSoftprongEncourage(5)).toMatch(/撬|放|托|松|指/);
    const pair = formatSoftprongPair(3, 20);
    expect(pair).toContain(formatProngOpenerLine(3));
    expect(pair).toContain(formatStoneSeatLine(20));
  });
});
