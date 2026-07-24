import { describe, expect, it } from "vitest";
import {
  formatSoftBarretteLine,
  formatBarretteSpringLine,
  formatSoftbarretteAside,
  formatSoftbarretteEncourage,
  formatSoftbarrettePair,
} from "../src/core/softbarrette-label";

describe("softbarrette-label", () => {
  it("五函数按阈值分支且非空", () => {
    expect(formatSoftBarretteLine(1).length).toBeGreaterThan(4);
    expect(formatSoftBarretteLine(2)).toMatch(/夹|轻|拢|点|硬|卡/);
    expect(formatBarretteSpringLine(0)).toMatch(/弹簧|扣|松|温存|扣/);
    expect(formatBarretteSpringLine(15)).toMatch(/簧|夹|店|散|拢|安/);
    expect(formatSoftbarretteAside(0)).toMatch(/夹|齐|流通|拢|光/);
    expect(formatSoftbarretteAside(12)).toMatch(/12|夹|许|可|温柔/);
    expect(formatSoftbarretteAside(30)).toMatch(/30|逾|轻夹|弧/);
    expect(formatSoftbarretteEncourage(0)).toMatch(/发夹|弹簧|拢/);
    expect(formatSoftbarretteEncourage(2)).toMatch(/簧|发|扣|流通|拢/);
    expect(formatSoftbarretteEncourage(5)).toMatch(/夹|摘|肩/);
    const pair = formatSoftbarrettePair(3, 20);
    expect(pair).toContain(formatSoftBarretteLine(3));
    expect(pair).toContain(formatBarretteSpringLine(20));
  });
});
