import { describe, expect, it } from "vitest";
import {
  formatLoupeLine,
  formatRingClampLine,
  formatSoftloupeAside,
  formatSoftloupeEncourage,
  formatSoftloupePair,
} from "../src/core/softloupe-label";

describe("softloupe-label", () => {
  it("五函数按阈值分支且非空", () => {
    expect(formatLoupeLine(1).length).toBeGreaterThan(4);
    expect(formatLoupeLine(2)).toMatch(/镜|近|看|点|硬|找/);
    expect(formatRingClampLine(0)).toMatch(/戒夹|松|温存|夹/);
    expect(formatRingClampLine(15)).toMatch(/夹|镜|店|微|托|清/);
    expect(formatSoftloupeAside(0)).toMatch(/镜|净|流通|看|细/);
    expect(formatSoftloupeAside(12)).toMatch(/12|看|许|可|温柔/);
    expect(formatSoftloupeAside(30)).toMatch(/30|逾|轻看|光/);
    expect(formatSoftloupeEncourage(0)).toMatch(/放大镜|戒夹|看|清/);
    expect(formatSoftloupeEncourage(2)).toMatch(/夹|近|看|流通|见/);
    expect(formatSoftloupeEncourage(5)).toMatch(/镜|放|看|松|眉/);
    const pair = formatSoftloupePair(3, 20);
    expect(pair).toContain(formatLoupeLine(3));
    expect(pair).toContain(formatRingClampLine(20));
  });
});
