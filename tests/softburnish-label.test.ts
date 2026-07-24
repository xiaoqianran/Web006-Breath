import { describe, expect, it } from "vitest";
import {
  formatBurnisherLine,
  formatBezelPusherLine,
  formatSoftburnishAside,
  formatSoftburnishEncourage,
  formatSoftburnishPair,
} from "../src/core/softburnish-label";

describe("softburnish-label", () => {
  it("五函数按阈值分支且非空", () => {
    expect(formatBurnisherLine(1).length).toBeGreaterThan(4);
    expect(formatBurnisherLine(2)).toMatch(/钢|滑|压|圈|硬|蹭/);
    expect(formatBezelPusherLine(0)).toMatch(/压|边|刀|收|温存|压|边/);
    expect(formatBezelPusherLine(15)).toMatch(/刀|石|店|边|压|稳/);
    expect(formatSoftburnishAside(0)).toMatch(/钢|净|流通|压|光/);
    expect(formatSoftburnishAside(12)).toMatch(/12|压|许|可|温柔/);
    expect(formatSoftburnishAside(30)).toMatch(/30|逾|轻压|边/);
    expect(formatSoftburnishEncourage(0)).toMatch(/抛光|钢|压边|边|沿|压/);
    expect(formatSoftburnishEncourage(2)).toMatch(/钢|压|收|流通|稳/);
    expect(formatSoftburnishEncourage(5)).toMatch(/刀|收|压|松|腕/);
    const pair = formatSoftburnishPair(3, 20);
    expect(pair).toContain(formatBurnisherLine(3));
    expect(pair).toContain(formatBezelPusherLine(20));
  });
});
