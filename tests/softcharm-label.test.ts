import { describe, expect, it } from "vitest";
import {
  formatCharmSetLine,
  formatCharmTrayLine,
  formatSoftcharmAside,
  formatSoftcharmEncourage,
  formatSoftcharmPair,
} from "../src/core/softcharm-label";

describe("softcharm-label", () => {
  it("五函数按阈值分支且非空", () => {
    expect(formatCharmSetLine(1).length).toBeGreaterThan(4);
    expect(formatCharmSetLine(2)).toMatch(/饰|轻|挂|点|硬|堆/);
    expect(formatCharmTrayLine(0)).toMatch(/饰盘|空|温存|放/);
    expect(formatCharmTrayLine(15)).toMatch(/盘|饰|店|散|收|整/);
    expect(formatSoftcharmAside(0)).toMatch(/饰|齐|流通|挂|光/);
    expect(formatSoftcharmAside(12)).toMatch(/12|挂|许|可|温柔/);
    expect(formatSoftcharmAside(30)).toMatch(/30|逾|轻挂|饰/);
    expect(formatSoftcharmEncourage(0)).toMatch(/吊饰|饰盘|挂/);
    expect(formatSoftcharmEncourage(2)).toMatch(/饰|盘|挂|流通|喜/);
    expect(formatSoftcharmEncourage(5)).toMatch(/盘|收|挂|松|肩/);
    const pair = formatSoftcharmPair(3, 20);
    expect(pair).toContain(formatCharmSetLine(3));
    expect(pair).toContain(formatCharmTrayLine(20));
  });
});
