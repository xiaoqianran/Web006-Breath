import { describe, expect, it } from "vitest";
import {
  formatBurSetLine,
  formatHandpieceLine,
  formatSoftburAside,
  formatSoftburEncourage,
  formatSoftburPair,
} from "../src/core/softbur-label";

describe("softbur-label", () => {
  it("五函数按阈值分支且非空", () => {
    expect(formatBurSetLine(1).length).toBeGreaterThan(4);
    expect(formatBurSetLine(2)).toMatch(/头|细|磨|点|硬|削/);
    expect(formatHandpieceLine(0)).toMatch(/手|持|机|停|温存|转|圈/);
    expect(formatHandpieceLine(15)).toMatch(/机|头|店|多|余|磨|净/);
    expect(formatSoftburAside(0)).toMatch(/盒|齐|流通|磨|净/);
    expect(formatSoftburAside(12)).toMatch(/12|磨|许|可|温柔/);
    expect(formatSoftburAside(30)).toMatch(/30|逾|轻磨|头/);
    expect(formatSoftburEncourage(0)).toMatch(/牙钻|头|手持|机|多|余|磨/);
    expect(formatSoftburEncourage(2)).toMatch(/头|机|磨|流通|修/);
    expect(formatSoftburEncourage(5)).toMatch(/机|停|磨|松|腕/);
    const pair = formatSoftburPair(3, 20);
    expect(pair).toContain(formatBurSetLine(3));
    expect(pair).toContain(formatHandpieceLine(20));
  });
});
