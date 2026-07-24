import { describe, expect, it } from "vitest";
import {
  formatUltrasonicLine,
  formatMeshBasketLine,
  formatSoftultraAside,
  formatSoftultraEncourage,
  formatSoftultraPair,
} from "../src/core/softultra-label";

describe("softultra-label", () => {
  it("五函数按阈值分支且非空", () => {
    expect(formatUltrasonicLine(1).length).toBeGreaterThan(4);
    expect(formatUltrasonicLine(2)).toMatch(/波|轻|洗|点|硬|冲/);
    expect(formatMeshBasketLine(0)).toMatch(/网篮|空|温存|托/);
    expect(formatMeshBasketLine(15)).toMatch(/篮|器|店|积|托|净/);
    expect(formatSoftultraAside(0)).toMatch(/水|静|流通|洗|纹/);
    expect(formatSoftultraAside(12)).toMatch(/12|洗|许|可|温柔/);
    expect(formatSoftultraAside(30)).toMatch(/30|逾|轻洗|净/);
    expect(formatSoftultraEncourage(0)).toMatch(/清洗|网篮|洗/);
    expect(formatSoftultraEncourage(2)).toMatch(/篮|波|洗|流通|松/);
    expect(formatSoftultraEncourage(5)).toMatch(/水|停|洗|松|肩/);
    const pair = formatSoftultraPair(3, 20);
    expect(pair).toContain(formatUltrasonicLine(3));
    expect(pair).toContain(formatMeshBasketLine(20));
  });
});
