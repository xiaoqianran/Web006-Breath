import { describe, expect, it } from "vitest";
import {
  formatDropSpindleLine,
  formatSoftRovingLine,
  formatSoftspindleAside,
  formatSoftspindleEncourage,
  formatSoftspindlePair,
} from "../src/core/softspindle-label";

describe("softspindle-label", () => {
  it("五函数按阈值分支且非空", () => {
    expect(formatDropSpindleLine(1).length).toBeGreaterThan(4);
    expect(formatDropSpindleLine(2)).toMatch(/锤|轻|捻|缕|赶|工/);
    expect(formatSoftRovingLine(0)).toMatch(/毛|条|整|温存|抽|缕/);
    expect(formatSoftRovingLine(15)).toMatch(/毛|指|店|蓬|捻|线/);
    expect(formatSoftspindleAside(0)).toMatch(/锤|空|流通|捻|线/);
    expect(formatSoftspindleAside(12)).toMatch(/12|捻|许|可|温柔/);
    expect(formatSoftspindleAside(30)).toMatch(/30|逾|轻捻|线/);
    expect(formatSoftspindleEncourage(0)).toMatch(/纺锤|毛条|蓬|松|捻/);
    expect(formatSoftspindleEncourage(2)).toMatch(/锤|毛|捻|流通|成/);
    expect(formatSoftspindleEncourage(5)).toMatch(/锤|放|捻|松|腕/);
    const pair = formatSoftspindlePair(3, 20);
    expect(pair).toContain(formatDropSpindleLine(3));
    expect(pair).toContain(formatSoftRovingLine(20));
  });
});
