import { describe, expect, it } from "vitest";
import {
  formatHeadPinLine,
  formatEyePinLine,
  formatSoftheadpinAside,
  formatSoftheadpinEncourage,
  formatSoftheadpinPair,
} from "../src/core/softheadpin-label";

describe("softheadpin-label", () => {
  it("五函数按阈值分支且非空", () => {
    expect(formatHeadPinLine(1).length).toBeGreaterThan(4);
    expect(formatHeadPinLine(2)).toMatch(/针|稳|穿|点|硬|戳/);
    expect(formatEyePinLine(0)).toMatch(/眼针|直|温存|弯/);
    expect(formatEyePinLine(15)).toMatch(/眼|针|店|珠|连|串/);
    expect(formatSoftheadpinAside(0)).toMatch(/针|齐|流通|穿|托/);
    expect(formatSoftheadpinAside(12)).toMatch(/12|穿|许|可|温柔/);
    expect(formatSoftheadpinAside(30)).toMatch(/30|逾|轻穿|串/);
    expect(formatSoftheadpinEncourage(0)).toMatch(/头针|眼针|穿/);
    expect(formatSoftheadpinEncourage(2)).toMatch(/珠|眼|连|流通|托/);
    expect(formatSoftheadpinEncourage(5)).toMatch(/针|收|穿|松|指/);
    const pair = formatSoftheadpinPair(3, 20);
    expect(pair).toContain(formatHeadPinLine(3));
    expect(pair).toContain(formatEyePinLine(20));
  });
});
