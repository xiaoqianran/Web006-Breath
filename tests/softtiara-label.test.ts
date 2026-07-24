import { describe, expect, it } from "vitest";
import {
  formatSoftTiaraLine,
  formatTiaraCombLine,
  formatSofttiaraAside,
  formatSofttiaraEncourage,
  formatSofttiaraPair,
} from "../src/core/softtiara-label";

describe("softtiara-label", () => {
  it("五函数按阈值分支且非空", () => {
    expect(formatSoftTiaraLine(1).length).toBeGreaterThan(4);
    expect(formatSoftTiaraLine(2)).toMatch(/冠|轻|托|点|硬|压/);
    expect(formatTiaraCombLine(0)).toMatch(/梳座|空|温存|插/);
    expect(formatTiaraCombLine(15)).toMatch(/座|冠|店|发|托|安/);
    expect(formatSofttiaraAside(0)).toMatch(/冠|齐|流通|托|光/);
    expect(formatSofttiaraAside(12)).toMatch(/12|戴|许|可|温柔/);
    expect(formatSofttiaraAside(30)).toMatch(/30|逾|轻戴|光/);
    expect(formatSofttiaraEncourage(0)).toMatch(/头冠|梳座|托/);
    expect(formatSofttiaraEncourage(2)).toMatch(/座|冠|戴|流通|托/);
    expect(formatSofttiaraEncourage(5)).toMatch(/冠|放|戴|松|肩/);
    const pair = formatSofttiaraPair(3, 20);
    expect(pair).toContain(formatSoftTiaraLine(3));
    expect(pair).toContain(formatTiaraCombLine(20));
  });
});
