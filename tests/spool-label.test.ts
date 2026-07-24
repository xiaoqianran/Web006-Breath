import { describe, it, expect } from "vitest";
import {
  formatThreadSpoolLine,
  formatBeeswaxBrickLine,
  formatSpoolAside,
  formatSpoolEncourage,
  formatSpoolPair,
} from "../src/core";

describe("spool-label", () => {
  it("线轴与蜂蜡砖文案", () => {
    expect(formatThreadSpoolLine(1).length).toBeGreaterThan(4);
    expect(formatThreadSpoolLine(2)).toMatch(/线轴|转|线|话/);
    expect(formatBeeswaxBrickLine(0)).toMatch(/蜂蜡|硬|温/);
    expect(formatBeeswaxBrickLine(20)).toMatch(/蜡|温|滑|香|细/);
    expect(formatSpoolAside(0)).toMatch(/蜡|针|顺/);
    expect(formatSpoolEncourage(0)).toMatch(/静|线|蜂蜡/);
    expect(formatSpoolEncourage(2)).toContain("2");
    expect(formatSpoolPair(1, 10)).toMatch(/线|蜡|轴/);
  });
});
