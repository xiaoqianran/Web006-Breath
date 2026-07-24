import { describe, expect, it } from "vitest";
import {
  formatToggleBarLine,
  formatToggleRingLine,
  formatSofttoggleAside,
  formatSofttoggleEncourage,
  formatSofttogglePair,
} from "../src/core/softtoggle-label";

describe("softtoggle-label", () => {
  it("五函数按阈值分支且非空", () => {
    expect(formatToggleBarLine(1).length).toBeGreaterThan(4);
    expect(formatToggleBarLine(2)).toMatch(/杆|稳|扣|点|硬|卡/);
    expect(formatToggleRingLine(0)).toMatch(/圆环|空|温存|扣/);
    expect(formatToggleRingLine(15)).toMatch(/环|杆|店|开|扣|稳/);
    expect(formatSofttoggleAside(0)).toMatch(/杆|齐|流通|扣|合/);
    expect(formatSofttoggleAside(12)).toMatch(/12|扣|许|可|温柔/);
    expect(formatSofttoggleAside(30)).toMatch(/30|逾|轻扣|光/);
    expect(formatSofttoggleEncourage(0)).toMatch(/一字|扣|圆环|扣/);
    expect(formatSofttoggleEncourage(2)).toMatch(/杆|环|扣|流通|接/);
    expect(formatSofttoggleEncourage(5)).toMatch(/扣|放|扣|松|肩/);
    const pair = formatSofttogglePair(3, 20);
    expect(pair).toContain(formatToggleBarLine(3));
    expect(pair).toContain(formatToggleRingLine(20));
  });
});
