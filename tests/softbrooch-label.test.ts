import { describe, expect, it } from "vitest";
import {
  formatBroochPinLine,
  formatPinCatchLine,
  formatSoftbroochAside,
  formatSoftbroochEncourage,
  formatSoftbroochPair,
} from "../src/core/softbrooch-label";

describe("softbrooch-label", () => {
  it("五函数按阈值分支且非空", () => {
    expect(formatBroochPinLine(1).length).toBeGreaterThan(4);
    expect(formatBroochPinLine(2)).toMatch(/针|稳|别|点|硬|扎/);
    expect(formatPinCatchLine(0)).toMatch(/别扣|开|温存|扣/);
    expect(formatPinCatchLine(15)).toMatch(/扣|针|店|留|固|安/);
    expect(formatSoftbroochAside(0)).toMatch(/针|齐|流通|别|稳/);
    expect(formatSoftbroochAside(12)).toMatch(/12|别|许|可|温柔/);
    expect(formatSoftbroochAside(30)).toMatch(/30|逾|轻别|光/);
    expect(formatSoftbroochEncourage(0)).toMatch(/胸针|别扣|别/);
    expect(formatSoftbroochEncourage(2)).toMatch(/针|扣|别|流通|固/);
    expect(formatSoftbroochEncourage(5)).toMatch(/扣|合|别|松|肩/);
    const pair = formatSoftbroochPair(3, 20);
    expect(pair).toContain(formatBroochPinLine(3));
    expect(pair).toContain(formatPinCatchLine(20));
  });
});
