import { describe, expect, it } from "vitest";
import {
  formatDappingBlockLine,
  formatDappingPunchLine,
  formatSoftdappingAside,
  formatSoftdappingEncourage,
  formatSoftdappingPair,
} from "../src/core/softdapping-label";

describe("softdapping-label", () => {
  it("五函数按阈值分支且非空", () => {
    expect(formatDappingBlockLine(1).length).toBeGreaterThan(4);
    expect(formatDappingBlockLine(2)).toMatch(/垫|稳|冲|弧|硬|砸/);
    expect(formatDappingPunchLine(0)).toMatch(/冲|头|齐|温存|选|号/);
    expect(formatDappingPunchLine(15)).toMatch(/头|窝|店|平|面|冲|弧/);
    expect(formatSoftdappingAside(0)).toMatch(/垫|空|流通|冲|弧|形/);
    expect(formatSoftdappingAside(12)).toMatch(/12|冲|许|可|温柔/);
    expect(formatSoftdappingAside(30)).toMatch(/30|逾|轻冲|弧/);
    expect(formatSoftdappingEncourage(0)).toMatch(/拱形|垫|冲头|平|面|冲/);
    expect(formatSoftdappingEncourage(2)).toMatch(/垫|头|冲|流通|成/);
    expect(formatSoftdappingEncourage(5)).toMatch(/头|收|冲|松|腕/);
    const pair = formatSoftdappingPair(3, 20);
    expect(pair).toContain(formatDappingBlockLine(3));
    expect(pair).toContain(formatDappingPunchLine(20));
  });
});
