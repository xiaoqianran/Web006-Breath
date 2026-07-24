import { describe, it, expect } from "vitest";
import {
  formatCookieCutterLine,
  formatCoolingRackLine,
  formatCutterAside,
  formatCutterEncourage,
  formatCutterPair,
} from "../src/core";

describe("cutter-label", () => {
  it("饼干模与冷却架文案", () => {
    expect(formatCookieCutterLine(1).length).toBeGreaterThan(4);
    expect(formatCookieCutterLine(2)).toMatch(/模|轻|形|心|定/);
    expect(formatCoolingRackLine(0)).toMatch(/架|空|温存|片|搁/);
    expect(formatCoolingRackLine(20)).toMatch(/架|温|透|热|香|晾|烫/);
    expect(formatCutterAside(0)).toMatch(/模|闲|流通|形|枚/);
    expect(formatCutterAside(5)).toContain("5");
    expect(formatCutterEncourage(0)).toMatch(/饼干|冷却|模|形|压/);
    expect(formatCutterPair(1, 10)).toMatch(/模|架|饼|冷/);
  });
});
