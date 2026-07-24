import { describe, expect, it } from "vitest";
import {
  formatMiniSteamIronLine,
  formatSteamPressClothLine,
  formatSteampressAside,
  formatSteampressEncourage,
  formatSteampressPair,
} from "../src/core/steampress-label";

describe("steampress-label", () => {
  it("formats mini steam iron, press cloth, aside, encourage and pair", () => {
    expect(formatMiniSteamIronLine(1).length).toBeGreaterThan(4);
    expect(formatMiniSteamIronLine(2)).toMatch(/熨|轻|痕|烫|焦|过/);
    expect(formatSteamPressClothLine(0)).toMatch(/布|叠|温存|垫|层|熨/);
    expect(formatSteamPressClothLine(15)).toMatch(/熨|布|店|温|热|隔/);
    expect(formatSteampressAside(0)).toMatch(/熨|凉|流通|痕|抚|褶/);
    expect(formatSteampressAside(5)).toContain("5");
    expect(formatSteampressEncourage(0)).toMatch(/蒸|汽|熨|布|褶|抚/);
    expect(formatSteampressPair(1, 10)).toMatch(/熨|布|蒸|汽/);
  });
});
