import { describe, it, expect } from "vitest";
import {
  formatClayPotLine,
  formatWateringCanLine,
  formatPlantpotAside,
  formatPlantpotEncourage,
  formatPlantpotPair,
} from "../src/core";

describe("plantpot-label", () => {
  it("小陶盆与浇水壶文案", () => {
    expect(formatClayPotLine(1).length).toBeGreaterThan(4);
    expect(formatClayPotLine(2)).toMatch(/盆|根|轻|催|托/);
    expect(formatWateringCanLine(0)).toMatch(/壶|空|温存|浇/);
    expect(formatWateringCanLine(20)).toMatch(/水|温|浅|土|根|润|叶|壶/);
    expect(formatPlantpotAside(0)).toMatch(/盆|干|流通|浇/);
    expect(formatPlantpotAside(5)).toContain("5");
    expect(formatPlantpotEncourage(0)).toMatch(/陶盆|壶|绿|水/);
    expect(formatPlantpotPair(1, 10)).toMatch(/盆|壶|陶/);
  });
});
