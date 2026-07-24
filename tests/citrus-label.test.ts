import { describe, it, expect } from "vitest";
import {
  formatLemonDishLine,
  formatCitrusKnifeLine,
  formatCitrusAside,
  formatCitrusEncourage,
  formatCitrusPair,
} from "../src/core";

describe("citrus-label", () => {
  it("柠檬碟与柑橘小刀文案", () => {
    expect(formatLemonDishLine(1).length).toBeGreaterThan(4);
    expect(formatLemonDishLine(2)).toMatch(/片|茶|薄|醒|柠/);
    expect(formatCitrusKnifeLine(0)).toMatch(/刀|收|温存|片/);
    expect(formatCitrusKnifeLine(20)).toMatch(/刀|温|薄|开|掌|醒|杯/);
    expect(formatCitrusAside(0)).toMatch(/碟|空|流通|醒|茶/);
    expect(formatCitrusAside(5)).toContain("5");
    expect(formatCitrusEncourage(0)).toMatch(/柠檬|小刀|醒|茶/);
    expect(formatCitrusPair(1, 10)).toMatch(/柠|刀|碟|片/);
  });
});
