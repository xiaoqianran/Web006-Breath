import { describe, expect, it } from "vitest";
import {
  formatSpacerBeadLine,
  formatBeadStopperLine,
  formatSoftspacerAside,
  formatSoftspacerEncourage,
  formatSoftspacerPair,
} from "../src/core/softspacer-label";

describe("softspacer-label", () => {
  it("五函数按阈值分支且非空", () => {
    expect(formatSpacerBeadLine(1).length).toBeGreaterThan(4);
    expect(formatSpacerBeadLine(2)).toMatch(/珠|轻|隔|点|硬|挤/);
    expect(formatBeadStopperLine(0)).toMatch(/止珠|器|松|温存|夹/);
    expect(formatBeadStopperLine(15)).toMatch(/器|珠|店|挤|隔|松/);
    expect(formatSoftspacerAside(0)).toMatch(/珠|齐|流通|隔|白/);
    expect(formatSoftspacerAside(12)).toMatch(/12|隔|许|可|温柔/);
    expect(formatSoftspacerAside(30)).toMatch(/30|逾|轻隔|缝/);
    expect(formatSoftspacerEncourage(0)).toMatch(/隔珠|止珠|留|白/);
    expect(formatSoftspacerEncourage(2)).toMatch(/珠|止|隔|流通|白/);
    expect(formatSoftspacerEncourage(5)).toMatch(/器|松|隔|肩/);
    const pair = formatSoftspacerPair(3, 20);
    expect(pair).toContain(formatSpacerBeadLine(3));
    expect(pair).toContain(formatBeadStopperLine(20));
  });
});
