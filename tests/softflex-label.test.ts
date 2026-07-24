import { describe, expect, it } from "vitest";
import {
  formatFlexShaftLine,
  formatFootPedalLine,
  formatSoftflexAside,
  formatSoftflexEncourage,
  formatSoftflexPair,
} from "../src/core/softflex-label";

describe("softflex-label", () => {
  it("五函数按阈值分支且非空", () => {
    expect(formatFlexShaftLine(1).length).toBeGreaterThan(4);
    expect(formatFlexShaftLine(2)).toMatch(/轴|软|转|点|硬|扯/);
    expect(formatFootPedalLine(0)).toMatch(/脚|踏|停|温存|踩/);
    expect(formatFootPedalLine(15)).toMatch(/踏|轴|店|力|气|调|软/);
    expect(formatSoftflexAside(0)).toMatch(/轴|松|流通|传|力/);
    expect(formatSoftflexAside(12)).toMatch(/12|传|许|可|温柔/);
    expect(formatSoftflexAside(30)).toMatch(/30|逾|轻传|弧/);
    expect(formatSoftflexEncourage(0)).toMatch(/软轴|脚踏|转|圈/);
    expect(formatSoftflexEncourage(2)).toMatch(/轴|踏|转|流通|传/);
    expect(formatSoftflexEncourage(5)).toMatch(/踏|松|转|脚/);
    const pair = formatSoftflexPair(3, 20);
    expect(pair).toContain(formatFlexShaftLine(3));
    expect(pair).toContain(formatFootPedalLine(20));
  });
});
