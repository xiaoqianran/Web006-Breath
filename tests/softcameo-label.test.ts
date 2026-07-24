import { describe, expect, it } from "vitest";
import {
  formatCameoStoneLine,
  formatCameoBezelLine,
  formatSoftcameoAside,
  formatSoftcameoEncourage,
  formatSoftcameoPair,
} from "../src/core/softcameo-label";

describe("softcameo-label", () => {
  it("五函数按阈值分支且非空", () => {
    expect(formatCameoStoneLine(1).length).toBeGreaterThan(4);
    expect(formatCameoStoneLine(2)).toMatch(/石|细|嵌|点|硬|塞/);
    expect(formatCameoBezelLine(0)).toMatch(/嵌框|空|温存|托/);
    expect(formatCameoBezelLine(15)).toMatch(/框|石|店|肖|围|安/);
    expect(formatSoftcameoAside(0)).toMatch(/石|净|流通|嵌|护/);
    expect(formatSoftcameoAside(12)).toMatch(/12|嵌|许|可|温柔/);
    expect(formatSoftcameoAside(30)).toMatch(/30|逾|轻嵌|光/);
    expect(formatSoftcameoEncourage(0)).toMatch(/浮雕|石|嵌框|护/);
    expect(formatSoftcameoEncourage(2)).toMatch(/石|框|嵌|流通|护/);
    expect(formatSoftcameoEncourage(5)).toMatch(/框|收|嵌|松|肩/);
    const pair = formatSoftcameoPair(3, 20);
    expect(pair).toContain(formatCameoStoneLine(3));
    expect(pair).toContain(formatCameoBezelLine(20));
  });
});
