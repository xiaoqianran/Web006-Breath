import { describe, expect, it } from "vitest";
import {
  formatYarnSwatchLine,
  formatRowCounterLine,
  formatSoftswatchAside,
  formatSoftswatchEncourage,
  formatSoftswatchPair,
} from "../src/core/softswatch-label";

describe("softswatch-label", () => {
  it("五函数按阈值分支且非空", () => {
    expect(formatYarnSwatchLine(1).length).toBeGreaterThan(4);
    expect(formatYarnSwatchLine(2)).toMatch(/色|柔|试|块|定|论/);
    expect(formatRowCounterLine(0)).toMatch(/计|数|零|温存|拨|格/);
    expect(formatRowCounterLine(15)).toMatch(/数|字|店|耐|心|不|确|定/);
    expect(formatSoftswatchAside(0)).toMatch(/卡|空|流通|试|色/);
    expect(formatSoftswatchAside(12)).toMatch(/12|试|许|可|温柔/);
    expect(formatSoftswatchAside(30)).toMatch(/30|逾|轻试|行/);
    expect(formatSoftswatchEncourage(0)).toMatch(/样片|计数|不|确|定|试/);
    expect(formatSoftswatchEncourage(2)).toMatch(/片|拨|试|流通|确/);
    expect(formatSoftswatchEncourage(5)).toMatch(/拨|归|零|试|松|肩/);
    const pair = formatSoftswatchPair(3, 20);
    expect(pair).toContain(formatYarnSwatchLine(3));
    expect(pair).toContain(formatRowCounterLine(20));
  });
});
