import { describe, expect, it } from "vitest";
import {
  formatSoftBangleLine,
  formatBangleCoreLine,
  formatSoftbangleAside,
  formatSoftbangleEncourage,
  formatSoftbanglePair,
} from "../src/core/softbangle-label";

describe("softbangle-label", () => {
  it("五函数按阈值分支且非空", () => {
    expect(formatSoftBangleLine(1).length).toBeGreaterThan(4);
    expect(formatSoftBangleLine(2)).toMatch(/圈|圆|环|点|硬|箍/);
    expect(formatBangleCoreLine(0)).toMatch(/镯芯|空|温存|套/);
    expect(formatBangleCoreLine(15)).toMatch(/芯|镯|店|散|收|圆/);
    expect(formatSoftbangleAside(0)).toMatch(/镯|新|流通|环|光/);
    expect(formatSoftbangleAside(12)).toMatch(/12|环|许|可|温柔/);
    expect(formatSoftbangleAside(30)).toMatch(/30|逾|轻环|圆/);
    expect(formatSoftbangleEncourage(0)).toMatch(/手镯|镯芯|环/);
    expect(formatSoftbangleEncourage(2)).toMatch(/镯|芯|环|流通/);
    expect(formatSoftbangleEncourage(5)).toMatch(/镯|放|环|松|腕/);
    const pair = formatSoftbanglePair(3, 20);
    expect(pair).toContain(formatSoftBangleLine(3));
    expect(pair).toContain(formatBangleCoreLine(20));
  });
});
