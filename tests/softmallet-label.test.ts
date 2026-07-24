import { describe, expect, it } from "vitest";
import {
  formatRawhideMalletLine,
  formatSoftNylonHammerLine,
  formatSoftmalletAside,
  formatSoftmalletEncourage,
  formatSoftmalletPair,
} from "../src/core/softmallet-label";

describe("softmallet-label", () => {
  it("五函数按阈值分支且非空", () => {
    expect(formatRawhideMalletLine(1).length).toBeGreaterThan(4);
    expect(formatRawhideMalletLine(2)).toMatch(/锤|软|敲|点|硬|砸/);
    expect(formatSoftNylonHammerLine(0)).toMatch(/尼龙|锤|停|温存|敲/);
    expect(formatSoftNylonHammerLine(15)).toMatch(/锤|手|店|硬|敲|软/);
    expect(formatSoftmalletAside(0)).toMatch(/面|新|流通|敲|软/);
    expect(formatSoftmalletAside(12)).toMatch(/12|敲|许|可|温柔/);
    expect(formatSoftmalletAside(30)).toMatch(/30|逾|轻敲|形/);
    expect(formatSoftmalletEncourage(0)).toMatch(/生皮|尼龙|锤|敲/);
    expect(formatSoftmalletEncourage(2)).toMatch(/柄|点|敲|流通|形/);
    expect(formatSoftmalletEncourage(5)).toMatch(/锤|放|敲|松|腕/);
    const pair = formatSoftmalletPair(3, 20);
    expect(pair).toContain(formatRawhideMalletLine(3));
    expect(pair).toContain(formatSoftNylonHammerLine(20));
  });
});
