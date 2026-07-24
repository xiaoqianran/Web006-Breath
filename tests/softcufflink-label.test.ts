import { describe, expect, it } from "vitest";
import {
  formatCufflinkFaceLine,
  formatCuffPostLine,
  formatSoftcufflinkAside,
  formatSoftcufflinkEncourage,
  formatSoftcufflinkPair,
} from "../src/core/softcufflink-label";

describe("softcufflink-label", () => {
  it("五函数按阈值分支且非空", () => {
    expect(formatCufflinkFaceLine(1).length).toBeGreaterThan(4);
    expect(formatCufflinkFaceLine(2)).toMatch(/面|稳|扣|点|硬|卡/);
    expect(formatCuffPostLine(0)).toMatch(/扣杆|松|温存|穿/);
    expect(formatCuffPostLine(15)).toMatch(/杆|面|店|袖|收|整/);
    expect(formatSoftcufflinkAside(0)).toMatch(/扣|齐|流通|扣|收/);
    expect(formatSoftcufflinkAside(12)).toMatch(/12|扣|许|可|温柔/);
    expect(formatSoftcufflinkAside(30)).toMatch(/30|逾|轻扣|光/);
    expect(formatSoftcufflinkEncourage(0)).toMatch(/袖扣|扣杆|扣/);
    expect(formatSoftcufflinkEncourage(2)).toMatch(/杆|面|扣|流通|收/);
    expect(formatSoftcufflinkEncourage(5)).toMatch(/扣|收|扣|松|腕/);
    const pair = formatSoftcufflinkPair(3, 20);
    expect(pair).toContain(formatCufflinkFaceLine(3));
    expect(pair).toContain(formatCuffPostLine(20));
  });
});
