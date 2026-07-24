import { describe, expect, it } from "vitest";
import {
  formatLavenderSachetLine,
  formatSachetDishLine,
  formatLavsachetAside,
  formatLavsachetEncourage,
  formatLavsachetPair,
} from "../src/core/lavsachet-label";

describe("lavsachet-label", () => {
  it("formats lavender sachet, dish, aside, encourage and pair", () => {
    expect(formatLavenderSachetLine(1).length).toBeGreaterThan(4);
    expect(formatLavenderSachetLine(2)).toMatch(/囊|轻|润|角|呛|鼻|香/);
    expect(formatSachetDishLine(0)).toMatch(/碟|空|温存|放|袋|瓷|香/);
    expect(formatSachetDishLine(15)).toMatch(/香|囊|碟|店|温|枕|歇|落/);
    expect(formatLavsachetAside(0)).toMatch(/囊|新|流通|香|安|放|袋/);
    expect(formatLavsachetAside(5)).toContain("5");
    expect(formatLavsachetEncourage(0)).toMatch(/香|囊|碟|夜|安/);
    expect(formatLavsachetPair(1, 10)).toMatch(/香|囊|碟|薰|衣/);
  });
});
