import { describe, expect, it } from "vitest";
import {
  formatCrucibleTongsLine,
  formatSoftCrucibleLine,
  formatSofttongsAside,
  formatSofttongsEncourage,
  formatSofttongsPair,
} from "../src/core/softtongs-label";

describe("softtongs-label", () => {
  it("五函数按阈值分支且非空", () => {
    expect(formatCrucibleTongsLine(1).length).toBeGreaterThan(4);
    expect(formatCrucibleTongsLine(2)).toMatch(/钳|稳|夹|罐|硬|抖/);
    expect(formatSoftCrucibleLine(0)).toMatch(/坩|埚|空|温存|盛|勺/);
    expect(formatSoftCrucibleLine(15)).toMatch(/罐|钳|店|热|稳/);
    expect(formatSofttongsAside(0)).toMatch(/钳|空|流通|夹|稳/);
    expect(formatSofttongsAside(12)).toMatch(/12|夹|许|可|温柔/);
    expect(formatSofttongsAside(30)).toMatch(/30|逾|轻夹|罐/);
    expect(formatSofttongsEncourage(0)).toMatch(/坩埚|钳|热|物|稳/);
    expect(formatSofttongsEncourage(2)).toMatch(/钳|夹|移|流通|托/);
    expect(formatSofttongsEncourage(5)).toMatch(/钳|放|夹|松|腕/);
    const pair = formatSofttongsPair(3, 20);
    expect(pair).toContain(formatCrucibleTongsLine(3));
    expect(pair).toContain(formatSoftCrucibleLine(20));
  });
});
