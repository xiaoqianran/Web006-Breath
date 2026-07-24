import { describe, expect, it } from "vitest";
import {
  formatWireCoilLine,
  formatCoilPliersLine,
  formatSoftcoilAside,
  formatSoftcoilEncourage,
  formatSoftcoilPair,
} from "../src/core/softcoil-label";

describe("softcoil-label", () => {
  it("五函数按阈值分支且非空", () => {
    expect(formatWireCoilLine(1).length).toBeGreaterThan(4);
    expect(formatWireCoilLine(2)).toMatch(/圈|轻|绕|点|硬|拧/);
    expect(formatCoilPliersLine(0)).toMatch(/绕钳|合|温存|绕|圈/);
    expect(formatCoilPliersLine(15)).toMatch(/钳|线|店|直|绕|软/);
    expect(formatSoftcoilAside(0)).toMatch(/线|直|流通|绕|弧/);
    expect(formatSoftcoilAside(12)).toMatch(/12|绕|许|可|温柔/);
    expect(formatSoftcoilAside(30)).toMatch(/30|逾|轻绕|弧/);
    expect(formatSoftcoilEncourage(0)).toMatch(/线圈|绕钳|绕|圈/);
    expect(formatSoftcoilEncourage(2)).toMatch(/线|钳|绕|流通|形/);
    expect(formatSoftcoilEncourage(5)).toMatch(/钳|放|绕|松|腕/);
    const pair = formatSoftcoilPair(3, 20);
    expect(pair).toContain(formatWireCoilLine(3));
    expect(pair).toContain(formatCoilPliersLine(20));
  });
});
