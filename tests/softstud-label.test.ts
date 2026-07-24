import { describe, expect, it } from "vitest";
import {
  formatSoftStudLine,
  formatButterflyBackLine,
  formatSoftstudAside,
  formatSoftstudEncourage,
  formatSoftstudPair,
} from "../src/core/softstud-label";

describe("softstud-label", () => {
  it("五函数按阈值分支且非空", () => {
    expect(formatSoftStudLine(1).length).toBeGreaterThan(4);
    expect(formatSoftStudLine(2)).toMatch(/钉|轻|点|硬|卡/);
    expect(formatButterflyBackLine(0)).toMatch(/蝶扣|松|温存|扣/);
    expect(formatButterflyBackLine(15)).toMatch(/扣|钉|店|散|点|亮/);
    expect(formatSoftstudAside(0)).toMatch(/钉|齐|流通|点|光/);
    expect(formatSoftstudAside(12)).toMatch(/12|戴|许|可|温柔/);
    expect(formatSoftstudAside(30)).toMatch(/30|逾|轻戴|光/);
    expect(formatSoftstudEncourage(0)).toMatch(/耳钉|蝶扣|点|亮/);
    expect(formatSoftstudEncourage(2)).toMatch(/钉|扣|戴|流通|点/);
    expect(formatSoftstudEncourage(5)).toMatch(/扣|收|戴|松|肩/);
    const pair = formatSoftstudPair(3, 20);
    expect(pair).toContain(formatSoftStudLine(3));
    expect(pair).toContain(formatButterflyBackLine(20));
  });
});
