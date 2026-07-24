import { describe, it, expect } from "vitest";
import {
  formatSoftBroomLine,
  formatDustpanLine,
  formatBroomAside,
  formatBroomEncourage,
  formatBroomPair,
} from "../src/core";

describe("broom-label", () => {
  it("软扫帚与簸箕文案", () => {
    expect(formatSoftBroomLine(1).length).toBeGreaterThan(4);
    expect(formatSoftBroomLine(2)).toMatch(/帚|扫|黄昏/);
    expect(formatDustpanLine(0)).toMatch(/簸箕|空|屑/);
    expect(formatDustpanLine(4)).toContain("4");
    expect(formatBroomAside(0)).toMatch(/凉|温存|扫/);
    expect(formatBroomAside(20)).toMatch(/扫|温|净|欢迎/);
    expect(formatBroomEncourage(0)).toMatch(/静|扫|口/);
    expect(formatBroomPair(1, 0)).toMatch(/扫|簸箕|帚/);
  });
});
