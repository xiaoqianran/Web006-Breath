import { describe, expect, it } from "vitest";
import {
  formatStakingSetLine,
  formatStakingBaseLine,
  formatSoftstakingAside,
  formatSoftstakingEncourage,
  formatSoftstakingPair,
} from "../src/core/softstaking-label";

describe("softstaking-label", () => {
  it("五函数按阈值分支且非空", () => {
    expect(formatStakingSetLine(1).length).toBeGreaterThan(4);
    expect(formatStakingSetLine(2)).toMatch(/冲|稳|定|点|硬|砸/);
    expect(formatStakingBaseLine(0)).toMatch(/冲台|空|温存|垫|冲/);
    expect(formatStakingBaseLine(15)).toMatch(/台|冲|店|散|定|形/);
    expect(formatSoftstakingAside(0)).toMatch(/杆|齐|流通|定|形/);
    expect(formatSoftstakingAside(12)).toMatch(/12|定|许|可|温柔/);
    expect(formatSoftstakingAside(30)).toMatch(/30|逾|轻定|稳/);
    expect(formatSoftstakingEncourage(0)).toMatch(/冲具|冲台|定/);
    expect(formatSoftstakingEncourage(2)).toMatch(/冲|台|定|流通|形/);
    expect(formatSoftstakingEncourage(5)).toMatch(/冲|收|定|松|腕/);
    const pair = formatSoftstakingPair(3, 20);
    expect(pair).toContain(formatStakingSetLine(3));
    expect(pair).toContain(formatStakingBaseLine(20));
  });
});
