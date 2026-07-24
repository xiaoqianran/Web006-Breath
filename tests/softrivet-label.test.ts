import { describe, expect, it } from "vitest";
import {
  formatRivetSetLine,
  formatRivetBlockLine,
  formatSoftrivetAside,
  formatSoftrivetEncourage,
  formatSoftrivetPair,
} from "../src/core/softrivet-label";

describe("softrivet-label", () => {
  it("五函数按阈值分支且非空", () => {
    expect(formatRivetSetLine(1).length).toBeGreaterThan(4);
    expect(formatRivetSetLine(2)).toMatch(/钉|稳|连|点|硬|砸/);
    expect(formatRivetBlockLine(0)).toMatch(/铆砧|空|温存|垫|铆/);
    expect(formatRivetBlockLine(15)).toMatch(/砧|钉|店|散|连|稳/);
    expect(formatSoftrivetAside(0)).toMatch(/钉|齐|流通|连|稳/);
    expect(formatSoftrivetAside(12)).toMatch(/12|连|许|可|温柔/);
    expect(formatSoftrivetAside(30)).toMatch(/30|逾|轻连|稳/);
    expect(formatSoftrivetEncourage(0)).toMatch(/铆钉|铆砧|连/);
    expect(formatSoftrivetEncourage(2)).toMatch(/钉|砧|铆|流通|连/);
    expect(formatSoftrivetEncourage(5)).toMatch(/钉|收|连|松|指/);
    const pair = formatSoftrivetPair(3, 20);
    expect(pair).toContain(formatRivetSetLine(3));
    expect(pair).toContain(formatRivetBlockLine(20));
  });
});
