import { describe, expect, it } from "vitest";
import {
  formatSoftHoopLine,
  formatEarWireLine,
  formatSoftearringAside,
  formatSoftearringEncourage,
  formatSoftearringPair,
} from "../src/core/softearring-label";

describe("softearring-label", () => {
  it("五函数按阈值分支且非空", () => {
    expect(formatSoftHoopLine(1).length).toBeGreaterThan(4);
    expect(formatSoftHoopLine(2)).toMatch(/圈|圆|环|点|硬|夹/);
    expect(formatEarWireLine(0)).toMatch(/耳钩|直|温存|弯/);
    expect(formatEarWireLine(15)).toMatch(/钩|圈|店|散|环|圆/);
    expect(formatSoftearringAside(0)).toMatch(/圈|齐|流通|环|光/);
    expect(formatSoftearringAside(12)).toMatch(/12|戴|许|可|温柔/);
    expect(formatSoftearringAside(30)).toMatch(/30|逾|轻戴|弧/);
    expect(formatSoftearringEncourage(0)).toMatch(/耳圈|耳钩|环/);
    expect(formatSoftearringEncourage(2)).toMatch(/钩|圈|戴|流通|环/);
    expect(formatSoftearringEncourage(5)).toMatch(/圈|放|戴|松|肩/);
    const pair = formatSoftearringPair(3, 20);
    expect(pair).toContain(formatSoftHoopLine(3));
    expect(pair).toContain(formatEarWireLine(20));
  });
});
