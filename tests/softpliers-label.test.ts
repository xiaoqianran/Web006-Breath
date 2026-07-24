import { describe, expect, it } from "vitest";
import {
  formatJewelryPliersLine,
  formatFlushCuttersLine,
  formatSoftpliersAside,
  formatSoftpliersEncourage,
  formatSoftpliersPair,
} from "../src/core/softpliers-label";

describe("softpliers-label", () => {
  it("五函数按阈值分支且非空", () => {
    expect(formatJewelryPliersLine(1).length).toBeGreaterThan(4);
    expect(formatJewelryPliersLine(2)).toMatch(/钳|稳|夹|下|硬|拧/);
    expect(formatFlushCuttersLine(0)).toMatch(/斜|口|剪|合|温存|剪|截/);
    expect(formatFlushCuttersLine(15)).toMatch(/剪|线|店|多|余|温|收/);
    expect(formatSoftpliersAside(0)).toMatch(/钳|空|流通|夹|痕/);
    expect(formatSoftpliersAside(12)).toMatch(/12|夹|许|可|温柔/);
    expect(formatSoftpliersAside(30)).toMatch(/30|逾|轻夹|线/);
    expect(formatSoftpliersEncourage(0)).toMatch(/珠宝|钳|斜口|剪|细|节|稳/);
    expect(formatSoftpliersEncourage(2)).toMatch(/钳|夹|剪|流通|收/);
    expect(formatSoftpliersEncourage(5)).toMatch(/钳|放|夹|松|腕/);
    const pair = formatSoftpliersPair(3, 20);
    expect(pair).toContain(formatJewelryPliersLine(3));
    expect(pair).toContain(formatFlushCuttersLine(20));
  });
});
