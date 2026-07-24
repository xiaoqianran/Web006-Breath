import { describe, expect, it } from "vitest";
import {
  formatKnitNeedlesLine,
  formatStitchMarkersLine,
  formatSoftknitAside,
  formatSoftknitEncourage,
  formatSoftknitPair,
} from "../src/core/softknit-label";

describe("softknit-label", () => {
  it("五函数按阈值分支且非空", () => {
    expect(formatKnitNeedlesLine(1).length).toBeGreaterThan(4);
    expect(formatKnitNeedlesLine(2)).toMatch(/针|匀|织|行|赶|工/);
    expect(formatStitchMarkersLine(0)).toMatch(/记|号|扣|齐|温存|夹|针/);
    expect(formatStitchMarkersLine(15)).toMatch(/扣|行|店|节|奏|空|白|夹/);
    expect(formatSoftknitAside(0)).toMatch(/针|空|流通|织|纹/);
    expect(formatSoftknitAside(12)).toMatch(/12|织|许|可|温柔/);
    expect(formatSoftknitAside(30)).toMatch(/30|逾|轻织|行/);
    expect(formatSoftknitEncourage(0)).toMatch(/棒针|记号|扣|空白|织/);
    expect(formatSoftknitEncourage(2)).toMatch(/针|扣|织|流通|成/);
    expect(formatSoftknitEncourage(5)).toMatch(/针|并|织|松|腕/);
    const pair = formatSoftknitPair(3, 20);
    expect(pair).toContain(formatKnitNeedlesLine(3));
    expect(pair).toContain(formatStitchMarkersLine(20));
  });
});
