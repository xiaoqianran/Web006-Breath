import { describe, expect, it } from "vitest";
import {
  formatLocketShellLine,
  formatLocketHingeLine,
  formatSoftlocketAside,
  formatSoftlocketEncourage,
  formatSoftlocketPair,
} from "../src/core/softlocket-label";

describe("softlocket-label", () => {
  it("五函数按阈值分支且非空", () => {
    expect(formatLocketShellLine(1).length).toBeGreaterThan(4);
    expect(formatLocketShellLine(2)).toMatch(/盒|轻|开|点|硬|翻/);
    expect(formatLocketHingeLine(0)).toMatch(/合页|合|温存|打|开/);
    expect(formatLocketHingeLine(15)).toMatch(/页|盒|店|藏|开|光/);
    expect(formatSoftlocketAside(0)).toMatch(/盒|闭|流通|打|光/);
    expect(formatSoftlocketAside(12)).toMatch(/12|开|许|可|温柔/);
    expect(formatSoftlocketAside(30)).toMatch(/30|逾|轻开|光/);
    expect(formatSoftlocketEncourage(0)).toMatch(/盒式|吊坠|合页|打|开/);
    expect(formatSoftlocketEncourage(2)).toMatch(/掀|看|合|流通|见/);
    expect(formatSoftlocketEncourage(5)).toMatch(/盒|合|看|松|眉/);
    const pair = formatSoftlocketPair(3, 20);
    expect(pair).toContain(formatLocketShellLine(3));
    expect(pair).toContain(formatLocketHingeLine(20));
  });
});
