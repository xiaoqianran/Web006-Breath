import { describe, expect, it } from "vitest";
import {
  formatFeltingNeedleLine,
  formatWoolRovingLine,
  formatSoftfeltingAside,
  formatSoftfeltingEncourage,
  formatSoftfeltingPair,
} from "../src/core/softfelting-label";

describe("softfelting-label", () => {
  it("五函数按阈值分支且非空", () => {
    expect(formatFeltingNeedleLine(1).length).toBeGreaterThan(4);
    expect(formatFeltingNeedleLine(2)).toMatch(/针|细|戳|下|赶|工/);
    expect(formatWoolRovingLine(0)).toMatch(/羊|毛|条|整|温存|扯|缕/);
    expect(formatWoolRovingLine(15)).toMatch(/毛|指|店|蓬|戳|形|松/);
    expect(formatSoftfeltingAside(0)).toMatch(/针|净|流通|戳|形/);
    expect(formatSoftfeltingAside(12)).toMatch(/12|戳|许|可|温柔/);
    expect(formatSoftfeltingAside(30)).toMatch(/30|逾|轻戳|毛/);
    expect(formatSoftfeltingEncourage(0)).toMatch(/戳戳|羊毛|蓬|松|戳/);
    expect(formatSoftfeltingEncourage(2)).toMatch(/针|毛|戳|流通|成/);
    expect(formatSoftfeltingEncourage(5)).toMatch(/针|收|戳|松|腕/);
    const pair = formatSoftfeltingPair(3, 20);
    expect(pair).toContain(formatFeltingNeedleLine(3));
    expect(pair).toContain(formatWoolRovingLine(20));
  });
});
