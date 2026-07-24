import { describe, it, expect } from "vitest";
import {
  formatFlourBinLine,
  formatMeasureCupLine,
  formatFlourbinAside,
  formatFlourbinEncourage,
  formatFlourbinPair,
} from "../src/core";

describe("flourbin-label", () => {
  it("面粉罐与量杯文案", () => {
    expect(formatFlourBinLine(1).length).toBeGreaterThan(4);
    expect(formatFlourBinLine(2)).toMatch(/粉|软|分|完|记/);
    expect(formatMeasureCupLine(0)).toMatch(/杯|空|温存|舀/);
    expect(formatMeasureCupLine(20)).toMatch(/杯|温|准|量|苛|刻|寸/);
    expect(formatFlourbinAside(0)).toMatch(/罐|合|流通|粉|白/);
    expect(formatFlourbinAside(5)).toContain("5");
    expect(formatFlourbinEncourage(0)).toMatch(/面粉|量杯|白|量/);
    expect(formatFlourbinPair(1, 10)).toMatch(/粉|杯|罐/);
  });
});
