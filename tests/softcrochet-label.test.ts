import { describe, expect, it } from "vitest";
import {
  formatCrochetHookLine,
  formatSoftYarnBallLine,
  formatSoftcrochetAside,
  formatSoftcrochetEncourage,
  formatSoftcrochetPair,
} from "../src/core/softcrochet-label";

describe("softcrochet-label", () => {
  it("formats crochet hook, yarn ball, aside, encourage and pair", () => {
    expect(formatCrochetHookLine(1).length).toBeGreaterThan(4);
    expect(formatCrochetHookLine(2)).toMatch(/针|细|钩|圈|勒|紧/);
    expect(formatSoftYarnBallLine(0)).toMatch(/线|整|温存|抽|缕|团/);
    expect(formatSoftYarnBallLine(15)).toMatch(/线|钩|店|温|形|空|绕/);
    expect(formatSoftcrochetAside(0)).toMatch(/团|满|流通|圈|钩|形/);
    expect(formatSoftcrochetAside(5)).toContain("5");
    expect(formatSoftcrochetEncourage(0)).toMatch(/钩|针|线|团|空|洞/);
    expect(formatSoftcrochetPair(1, 10)).toMatch(/钩|针|线|团/);
  });
});
