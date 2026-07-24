import { describe, expect, it } from "vitest";
import {
  formatLobsterClaspLine,
  formatJumpRingLine,
  formatSoftclaspAside,
  formatSoftclaspEncourage,
  formatSoftclaspPair,
} from "../src/core/softclasp-label";

describe("softclasp-label", () => {
  it("五函数按阈值分支且非空", () => {
    expect(formatLobsterClaspLine(1).length).toBeGreaterThan(4);
    expect(formatLobsterClaspLine(2)).toMatch(/扣|轻|扣|下|硬|扳/);
    expect(formatJumpRingLine(0)).toMatch(/开|口|圈|开|温存|合|圈/);
    expect(formatJumpRingLine(15)).toMatch(/圈|扣|店|开|口|温|合/);
    expect(formatSoftclaspAside(0)).toMatch(/扣|空|流通|扣|声/);
    expect(formatSoftclaspAside(12)).toMatch(/12|扣|许|可|温柔/);
    expect(formatSoftclaspAside(30)).toMatch(/30|逾|轻扣|圈/);
    expect(formatSoftclaspEncourage(0)).toMatch(/龙虾|扣|开口|圈|开|扣/);
    expect(formatSoftclaspEncourage(2)).toMatch(/扣|圈|合|流通|收/);
    expect(formatSoftclaspEncourage(5)).toMatch(/扣|放|扣|松|腕/);
    const pair = formatSoftclaspPair(3, 20);
    expect(pair).toContain(formatLobsterClaspLine(3));
    expect(pair).toContain(formatJumpRingLine(20));
  });
});
