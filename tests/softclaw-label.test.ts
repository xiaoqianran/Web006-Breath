import { describe, expect, it } from "vitest";
import {
  formatSoftClawLine,
  formatClawHingeLine,
  formatSoftclawAside,
  formatSoftclawEncourage,
  formatSoftclawPair,
} from "../src/core/softclaw-label";

describe("softclaw-label", () => {
  it("五函数按阈值分支且非空", () => {
    expect(formatSoftClawLine(1).length).toBeGreaterThan(4);
    expect(formatSoftClawLine(2)).toMatch(/夹|轻|收|点|硬|咬/);
    expect(formatClawHingeLine(0)).toMatch(/铰链|松|温存|合/);
    expect(formatClawHingeLine(15)).toMatch(/链|夹|店|散|收|安/);
    expect(formatSoftclawAside(0)).toMatch(/夹|齐|流通|收|光/);
    expect(formatSoftclawAside(12)).toMatch(/12|夹|许|可|温柔/);
    expect(formatSoftclawAside(30)).toMatch(/30|逾|轻夹|弧/);
    expect(formatSoftclawEncourage(0)).toMatch(/抓夹|铰链|收/);
    expect(formatSoftclawEncourage(2)).toMatch(/链|发|合|流通|收/);
    expect(formatSoftclawEncourage(5)).toMatch(/夹|开|肩/);
    const pair = formatSoftclawPair(3, 20);
    expect(pair).toContain(formatSoftClawLine(3));
    expect(pair).toContain(formatClawHingeLine(20));
  });
});
