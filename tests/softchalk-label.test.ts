import { describe, expect, it } from "vitest";
import {
  formatSoftTailorChalkLine,
  formatChalkTrayLine,
  formatSoftchalkAside,
  formatSoftchalkEncourage,
  formatSoftchalkPair,
} from "../src/core/softchalk-label";

describe("softchalk-label", () => {
  it("formats soft tailor chalk, tray, aside, encourage and pair", () => {
    expect(formatSoftTailorChalkLine(1).length).toBeGreaterThan(4);
    expect(formatSoftTailorChalkLine(2)).toMatch(/粉|轻|画|痕|伤|布/);
    expect(formatChalkTrayLine(0)).toMatch(/托|空|温存|放|块|粉/);
    expect(formatChalkTrayLine(15)).toMatch(/粉|托|店|温|线|布|落/);
    expect(formatSoftchalkAside(0)).toMatch(/粉|整|流通|痕|画|线/);
    expect(formatSoftchalkAside(5)).toContain("5");
    expect(formatSoftchalkEncourage(0)).toMatch(/粉|托|线|画/);
    expect(formatSoftchalkPair(1, 10)).toMatch(/粉|托|裁|缝|线/);
  });
});
