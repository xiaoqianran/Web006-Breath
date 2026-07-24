import { describe, expect, it } from "vitest";
import {
  formatRoseWaterLine,
  formatLinenClothLine,
  formatRosewaterAside,
  formatRosewaterEncourage,
  formatRosewaterPair,
} from "../src/core/rosewater-label";

describe("rosewater-label", () => {
  it("formats rose water, linen cloth, aside, encourage and pair", () => {
    expect(formatRoseWaterLine(1).length).toBeGreaterThan(4);
    expect(formatRoseWaterLine(2)).toMatch(/露|淡|润|香|层/);
    expect(formatLinenClothLine(0)).toMatch(/帕|叠|温存|角|亚麻|手/);
    expect(formatLinenClothLine(15)).toMatch(/帕|展|清|皮|店|温/);
    expect(formatRosewaterAside(0)).toMatch(/瓶|盖|流通|香|擦/);
    expect(formatRosewaterAside(5)).toContain("5");
    expect(formatRosewaterEncourage(0)).toMatch(/花露|手帕|清|擦/);
    expect(formatRosewaterPair(1, 10)).toMatch(/花|帕|露|亚麻|瓶/);
  });
});
