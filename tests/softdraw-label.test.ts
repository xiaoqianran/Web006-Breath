import { describe, expect, it } from "vitest";
import {
  formatDrawPlateLine,
  formatDrawTongsLine,
  formatSoftdrawAside,
  formatSoftdrawEncourage,
  formatSoftdrawPair,
} from "../src/core/softdraw-label";

describe("softdraw-label", () => {
  it("五函数按阈值分支且非空", () => {
    expect(formatDrawPlateLine(1).length).toBeGreaterThan(4);
    expect(formatDrawPlateLine(2)).toMatch(/孔|匀|抽|硬|拽/);
    expect(formatDrawTongsLine(0)).toMatch(/抽|丝|钳|合|温存|夹|截/);
    expect(formatDrawTongsLine(15)).toMatch(/钳|丝|店|粗|抽|细/);
    expect(formatSoftdrawAside(0)).toMatch(/板|净|流通|抽|痕/);
    expect(formatSoftdrawAside(12)).toMatch(/12|抽|许|可|温柔/);
    expect(formatSoftdrawAside(30)).toMatch(/30|逾|轻抽|丝/);
    expect(formatSoftdrawEncourage(0)).toMatch(/抽丝|板|钳|粗|丝|抽/);
    expect(formatSoftdrawEncourage(2)).toMatch(/板|夹|抽|流通|细/);
    expect(formatSoftdrawEncourage(5)).toMatch(/钳|放|抽|松|腕/);
    const pair = formatSoftdrawPair(3, 20);
    expect(pair).toContain(formatDrawPlateLine(3));
    expect(pair).toContain(formatDrawTongsLine(20));
  });
});
