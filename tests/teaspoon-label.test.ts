import { describe, it, expect } from "vitest";
import {
  formatTastingSpoonLine,
  formatTastingMatLine,
  formatTeaspoonAside,
  formatTeaspoonEncourage,
  formatTeaspoonPair,
} from "../src/core";

describe("teaspoon-label", () => {
  it("试茶小勺与品茶垫文案", () => {
    expect(formatTastingSpoonLine(1).length).toBeGreaterThan(4);
    expect(formatTastingSpoonLine(2)).toMatch(/勺|尝|味|催|浅/);
    expect(formatTastingMatLine(0)).toMatch(/垫|干|温存|杯/);
    expect(formatTastingMatLine(20)).toMatch(/垫|温|柔|杯|掌|托/);
    expect(formatTeaspoonAside(0)).toMatch(/勺|闲|流通|试/);
    expect(formatTeaspoonAside(5)).toContain("5");
    expect(formatTeaspoonEncourage(0)).toMatch(/小勺|品茶|尝/);
    expect(formatTeaspoonPair(1, 10)).toMatch(/勺|垫|茶/);
  });
});
