import { describe, it, expect } from "vitest";
import {
  formatWarmKettleLine,
  formatCupLidLine,
  formatKettleAside,
  formatKettleEncourage,
  formatKettlePair,
} from "../src/core";

describe("kettle-label", () => {
  it("暖水壶与杯盖文案", () => {
    expect(formatWarmKettleLine(1).length).toBeGreaterThan(4);
    expect(formatWarmKettleLine(2)).toMatch(/壶|气|温/);
    expect(formatCupLidLine(0)).toMatch(/杯盖|凉|香/);
    expect(formatCupLidLine(20)).toMatch(/盖|温|信|香/);
    expect(formatKettleAside(0)).toMatch(/壶|热|烧/);
    expect(formatKettleEncourage(0)).toMatch(/静|壶|气/);
    expect(formatKettleEncourage(2)).toContain("2");
    expect(formatKettlePair(1, 10)).toMatch(/壶|盖|水|茶/);
  });
});
