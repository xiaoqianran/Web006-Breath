import { describe, it, expect } from "vitest";
import {
  formatStoneMortarLine,
  formatWoodPestleLine,
  formatMortarAside,
  formatMortarEncourage,
  formatMortarPair,
} from "../src/core";

describe("mortar-label", () => {
  it("石臼与木杵文案", () => {
    expect(formatStoneMortarLine(1).length).toBeGreaterThan(4);
    expect(formatStoneMortarLine(2)).toMatch(/臼|沉|研|急|托/);
    expect(formatWoodPestleLine(0)).toMatch(/杵|靠|温存|下/);
    expect(formatWoodPestleLine(20)).toMatch(/杵|温|圆|研|心|香|醒/);
    expect(formatMortarAside(0)).toMatch(/臼|空|流通|香/);
    expect(formatMortarAside(5)).toContain("5");
    expect(formatMortarEncourage(0)).toMatch(/石臼|木杵|香|唤/);
    expect(formatMortarPair(1, 10)).toMatch(/臼|杵|石|木/);
  });
});
