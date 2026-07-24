import { describe, expect, it } from "vitest";
import {
  formatCardingBrushLine,
  formatCardingPadLine,
  formatSoftcarderAside,
  formatSoftcarderEncourage,
  formatSoftcarderPair,
} from "../src/core/softcarder-label";

describe("softcarder-label", () => {
  it("五函数按阈值分支且非空", () => {
    expect(formatCardingBrushLine(1).length).toBeGreaterThan(4);
    expect(formatCardingBrushLine(2)).toMatch(/刷|轻|梳|缕|硬|拽/);
    expect(formatCardingPadLine(0)).toMatch(/梳|垫|净|温存|铺|层/);
    expect(formatCardingPadLine(15)).toMatch(/毛|垫|店|纠|结|梳|顺/);
    expect(formatSoftcarderAside(0)).toMatch(/刷|净|流通|梳|纹/);
    expect(formatSoftcarderAside(12)).toMatch(/12|梳|许|可|温柔/);
    expect(formatSoftcarderAside(30)).toMatch(/30|逾|轻梳|毛/);
    expect(formatSoftcarderEncourage(0)).toMatch(/梳毛|刷|垫|纠|结|梳/);
    expect(formatSoftcarderEncourage(2)).toMatch(/刷|垫|梳|流通|理/);
    expect(formatSoftcarderEncourage(5)).toMatch(/刷|放|梳|松|腕/);
    const pair = formatSoftcarderPair(3, 20);
    expect(pair).toContain(formatCardingBrushLine(3));
    expect(pair).toContain(formatCardingPadLine(20));
  });
});
