import { describe, expect, it } from "vitest";
import {
  formatNeedleGaugeLine,
  formatCableNeedleLine,
  formatSoftgaugeAside,
  formatSoftgaugeEncourage,
  formatSoftgaugePair,
} from "../src/core/softgauge-label";

describe("softgauge-label", () => {
  it("五函数按阈值分支且非空", () => {
    expect(formatNeedleGaugeLine(1).length).toBeGreaterThan(4);
    expect(formatNeedleGaugeLine(2)).toMatch(/尺|细|量|格|定|论/);
    expect(formatCableNeedleLine(0)).toMatch(/麻|花|针|空|温存|挂|针/);
    expect(formatCableNeedleLine(15)).toMatch(/针|活|店|交|叉|软|量/);
    expect(formatSoftgaugeAside(0)).toMatch(/尺|净|流通|量|孔/);
    expect(formatSoftgaugeAside(12)).toMatch(/12|量|许|可|温柔/);
    expect(formatSoftgaugeAside(30)).toMatch(/30|逾|轻量|针/);
    expect(formatSoftgaugeEncourage(0)).toMatch(/棒针|尺|麻花|尺|寸|量/);
    expect(formatSoftgaugeEncourage(2)).toMatch(/尺|针|量|流通|确/);
    expect(formatSoftgaugeEncourage(5)).toMatch(/针|并|量|松|腕/);
    const pair = formatSoftgaugePair(3, 20);
    expect(pair).toContain(formatNeedleGaugeLine(3));
    expect(pair).toContain(formatCableNeedleLine(20));
  });
});
