import { describe, expect, it } from "vitest";
import {
  formatGraverSetLine,
  formatEngraverBlockLine,
  formatSoftgraverAside,
  formatSoftgraverEncourage,
  formatSoftgraverPair,
} from "../src/core/softgraver-label";

describe("softgraver-label", () => {
  it("五函数按阈值分支且非空", () => {
    expect(formatGraverSetLine(1).length).toBeGreaterThan(4);
    expect(formatGraverSetLine(2)).toMatch(/刀|稳|刻|点|硬|划/);
    expect(formatEngraverBlockLine(0)).toMatch(/刻台|空|温存|垫|笔/);
    expect(formatEngraverBlockLine(15)).toMatch(/台|刀|店|说|托|稳/);
    expect(formatSoftgraverAside(0)).toMatch(/刃|齐|流通|刻|痕/);
    expect(formatSoftgraverAside(12)).toMatch(/12|刻|许|可|温柔/);
    expect(formatSoftgraverAside(30)).toMatch(/30|逾|轻刻|稳/);
    expect(formatSoftgraverEncourage(0)).toMatch(/刻刀|刻台|刻|笔/);
    expect(formatSoftgraverEncourage(2)).toMatch(/刀|台|刻|流通|留/);
    expect(formatSoftgraverEncourage(5)).toMatch(/刀|收|刻|松|指/);
    const pair = formatSoftgraverPair(3, 20);
    expect(pair).toContain(formatGraverSetLine(3));
    expect(pair).toContain(formatEngraverBlockLine(20));
  });
});
