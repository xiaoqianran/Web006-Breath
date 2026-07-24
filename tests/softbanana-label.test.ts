import { describe, expect, it } from "vitest";
import {
  formatSoftBananaLine,
  formatBananaTeethLine,
  formatSoftbananaAside,
  formatSoftbananaEncourage,
  formatSoftbananaPair,
} from "../src/core/softbanana-label";

describe("softbanana-label", () => {
  it("五函数按阈值分支且非空", () => {
    expect(formatSoftBananaLine(1).length).toBeGreaterThan(4);
    expect(formatSoftBananaLine(2)).toMatch(/夹|弯|别|点|硬|卡/);
    expect(formatBananaTeethLine(0)).toMatch(/齿|空|温存|扣/);
    expect(formatBananaTeethLine(15)).toMatch(/齿|夹|店|散|别|安/);
    expect(formatSoftbananaAside(0)).toMatch(/夹|齐|流通|别|光/);
    expect(formatSoftbananaAside(12)).toMatch(/12|别|许|可|温柔/);
    expect(formatSoftbananaAside(30)).toMatch(/30|逾|轻别|光/);
    expect(formatSoftbananaEncourage(0)).toMatch(/香蕉|齿|别/);
    expect(formatSoftbananaEncourage(2)).toMatch(/齿|发|别|流通/);
    expect(formatSoftbananaEncourage(5)).toMatch(/夹|取|肩/);
    const pair = formatSoftbananaPair(3, 20);
    expect(pair).toContain(formatSoftBananaLine(3));
    expect(pair).toContain(formatBananaTeethLine(20));
  });
});
