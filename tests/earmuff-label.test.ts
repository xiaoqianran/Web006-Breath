import { describe, expect, it } from "vitest";
import {
  formatSoftEarmuffLine,
  formatEarmuffPegLine,
  formatEarmuffAside,
  formatEarmuffEncourage,
  formatEarmuffPair,
} from "../src/core/earmuff-label";

describe("earmuff-label", () => {
  it("formats soft earmuff, peg, aside, encourage and pair", () => {
    expect(formatSoftEarmuffLine(1).length).toBeGreaterThan(4);
    expect(formatSoftEarmuffLine(2)).toMatch(/罩|软|捂|副|勒|头|耳/);
    expect(formatEarmuffPegLine(0)).toMatch(/钉|空|温存|挂|副|耳|罩/);
    expect(formatEarmuffPegLine(15)).toMatch(/耳|罩|钉|店|温|暖|挂|门/);
    expect(formatEarmuffAside(0)).toMatch(/罩|并|流通|暖|戴|副/);
    expect(formatEarmuffAside(5)).toContain("5");
    expect(formatEarmuffEncourage(0)).toMatch(/耳|罩|钉|捂|边/);
    expect(formatEarmuffPair(1, 10)).toMatch(/耳|罩|钉|暖|绒/);
  });
});
