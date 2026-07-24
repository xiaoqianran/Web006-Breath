import { describe, expect, it } from "vitest";
import {
  formatSoftChainLine,
  formatChainNoseLine,
  formatSoftchainAside,
  formatSoftchainEncourage,
  formatSoftchainPair,
} from "../src/core/softchain-label";

describe("softchain-label", () => {
  it("五函数按阈值分支且非空", () => {
    expect(formatSoftChainLine(1).length).toBeGreaterThan(4);
    expect(formatSoftChainLine(2)).toMatch(/链|软|连|点|硬|扣/);
    expect(formatChainNoseLine(0)).toMatch(/链嘴|钳|合|温存|夹/);
    expect(formatChainNoseLine(15)).toMatch(/钳|链|店|断|接|整/);
    expect(formatSoftchainAside(0)).toMatch(/链|齐|流通|接|环/);
    expect(formatSoftchainAside(12)).toMatch(/12|接|许|可|温柔/);
    expect(formatSoftchainAside(30)).toMatch(/30|逾|轻接|光/);
    expect(formatSoftchainEncourage(0)).toMatch(/链条|链嘴|钳|接/);
    expect(formatSoftchainEncourage(2)).toMatch(/环|口|接|流通|连/);
    expect(formatSoftchainEncourage(5)).toMatch(/钳|合|接|松|腕/);
    const pair = formatSoftchainPair(3, 20);
    expect(pair).toContain(formatSoftChainLine(3));
    expect(pair).toContain(formatChainNoseLine(20));
  });
});
