import { describe, expect, it } from "vitest";
import {
  formatDeskCalBlockLine,
  formatDayPageRibbonLine,
  formatDeskcalAside,
  formatDeskcalEncourage,
  formatDeskcalPair,
} from "../src/core/deskcal-label";

describe("deskcal-label", () => {
  it("formats desk calendar, day ribbon, aside, encourage and pair", () => {
    expect(formatDeskCalBlockLine(1).length).toBeGreaterThan(4);
    expect(formatDeskCalBlockLine(2)).toMatch(/页|薄|记|天|事|堆/);
    expect(formatDayPageRibbonLine(0)).toMatch(/丝|垂|温存|别|页|日/);
    expect(formatDayPageRibbonLine(15)).toMatch(/丝|页|店|温|天|柜|抽/);
    expect(formatDeskcalAside(0)).toMatch(/历|新|流通|页|翻|日/);
    expect(formatDeskcalAside(5)).toContain("5");
    expect(formatDeskcalEncourage(0)).toMatch(/台|历|丝|页|翻/);
    expect(formatDeskcalPair(1, 10)).toMatch(/台|历|丝|页/);
  });
});
