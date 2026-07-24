import { describe, expect, it } from "vitest";
import {
  formatCabochonLine,
  formatBezelStripLine,
  formatSoftcabAside,
  formatSoftcabEncourage,
  formatSoftcabPair,
} from "../src/core/softcab-label";

describe("softcab-label", () => {
  it("五函数按阈值分支且非空", () => {
    expect(formatCabochonLine(1).length).toBeGreaterThan(4);
    expect(formatCabochonLine(2)).toMatch(/石|圆|托|点|硬|压/);
    expect(formatBezelStripLine(0)).toMatch(/包边|条|直|温存|围/);
    expect(formatBezelStripLine(15)).toMatch(/条|石|店|圆|围|安/);
    expect(formatSoftcabAside(0)).toMatch(/石|净|流通|围|护/);
    expect(formatSoftcabAside(12)).toMatch(/12|护|许|可|温柔/);
    expect(formatSoftcabAside(30)).toMatch(/30|逾|轻护|弧/);
    expect(formatSoftcabEncourage(0)).toMatch(/弧面|包边|护/);
    expect(formatSoftcabEncourage(2)).toMatch(/石|条|护|流通|包/);
    expect(formatSoftcabEncourage(5)).toMatch(/条|收|护|松|肩/);
    const pair = formatSoftcabPair(3, 20);
    expect(pair).toContain(formatCabochonLine(3));
    expect(pair).toContain(formatBezelStripLine(20));
  });
});
