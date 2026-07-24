import { describe, expect, it } from "vitest";
import {
  formatFluxPasteLine,
  formatPickleJarLine,
  formatSoftfluxAside,
  formatSoftfluxEncourage,
  formatSoftfluxPair,
} from "../src/core/softflux-label";

describe("softflux-label", () => {
  it("五函数按阈值分支且非空", () => {
    expect(formatFluxPasteLine(1).length).toBeGreaterThan(4);
    expect(formatFluxPasteLine(2)).toMatch(/膏|细|刷|抹|硬/);
    expect(formatPickleJarLine(0)).toMatch(/酸|洗|罐|盖|温存|浸|件/);
    expect(formatPickleJarLine(15)).toMatch(/件|液|店|氧|洗|净/);
    expect(formatSoftfluxAside(0)).toMatch(/膏|整|流通|刷|净/);
    expect(formatSoftfluxAside(12)).toMatch(/12|刷|许|可|温柔/);
    expect(formatSoftfluxAside(30)).toMatch(/30|逾|轻刷|件/);
    expect(formatSoftfluxEncourage(0)).toMatch(/助焊|膏|酸洗|罐|接|缝|净/);
    expect(formatSoftfluxEncourage(2)).toMatch(/膏|刷|浸|流通|净/);
    expect(formatSoftfluxEncourage(5)).toMatch(/罐|盖|洗|松|腕/);
    const pair = formatSoftfluxPair(3, 20);
    expect(pair).toContain(formatFluxPasteLine(3));
    expect(pair).toContain(formatPickleJarLine(20));
  });
});
