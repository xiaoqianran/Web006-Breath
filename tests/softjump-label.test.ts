import { describe, expect, it } from "vitest";
import {
  formatJumpRingPileLine,
  formatJumpPliersLine,
  formatSoftjumpAside,
  formatSoftjumpEncourage,
  formatSoftjumpPair,
} from "../src/core/softjump-label";

describe("softjump-label", () => {
  it("五函数按阈值分支且非空", () => {
    expect(formatJumpRingPileLine(1).length).toBeGreaterThan(4);
    expect(formatJumpRingPileLine(2)).toMatch(/环|轻|开|点|硬|掰/);
    expect(formatJumpPliersLine(0)).toMatch(/开环|钳|合|温存|张/);
    expect(formatJumpPliersLine(15)).toMatch(/钳|环|店|连|开|路/);
    expect(formatSoftjumpAside(0)).toMatch(/环|齐|流通|开|口/);
    expect(formatSoftjumpAside(12)).toMatch(/12|开|许|可|温柔/);
    expect(formatSoftjumpAside(30)).toMatch(/30|逾|轻开|缝/);
    expect(formatSoftjumpEncourage(0)).toMatch(/跳环|开环|钳|开/);
    expect(formatSoftjumpEncourage(2)).toMatch(/环|张|开|流通|通/);
    expect(formatSoftjumpEncourage(5)).toMatch(/钳|合|开|松|指/);
    const pair = formatSoftjumpPair(3, 20);
    expect(pair).toContain(formatJumpRingPileLine(3));
    expect(pair).toContain(formatJumpPliersLine(20));
  });
});
