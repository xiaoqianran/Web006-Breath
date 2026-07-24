import { describe, expect, it } from "vitest";
import {
  formatAnnealPanLine,
  formatAnnealTongsLine,
  formatSoftannealAside,
  formatSoftannealEncourage,
  formatSoftannealPair,
} from "../src/core/softanneal-label";

describe("softanneal-label", () => {
  it("五函数按阈值分支且非空", () => {
    expect(formatAnnealPanLine(1).length).toBeGreaterThan(4);
    expect(formatAnnealPanLine(2)).toMatch(/盘|稳|热|软|硬|烧/);
    expect(formatAnnealTongsLine(0)).toMatch(/退|火|钳|合|温存|夹|段/);
    expect(formatAnnealTongsLine(15)).toMatch(/钳|丝|店|硬|热|软/);
    expect(formatSoftannealAside(0)).toMatch(/盘|空|流通|热|软/);
    expect(formatSoftannealAside(12)).toMatch(/12|热|许|可|温柔/);
    expect(formatSoftannealAside(30)).toMatch(/30|逾|轻热|丝/);
    expect(formatSoftannealEncourage(0)).toMatch(/退火|盘|钳|硬|丝|热/);
    expect(formatSoftannealEncourage(2)).toMatch(/盘|夹|热|流通|软/);
    expect(formatSoftannealEncourage(5)).toMatch(/钳|放|热|松|腕/);
    const pair = formatSoftannealPair(3, 20);
    expect(pair).toContain(formatAnnealPanLine(3));
    expect(pair).toContain(formatAnnealTongsLine(20));
  });
});
