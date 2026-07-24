import { describe, it, expect } from "vitest";
import {
  formatHoneyJarLine,
  formatWoodDipperLine,
  formatHoneydipAside,
  formatHoneydipEncourage,
  formatHoneydipPair,
} from "../src/core";

describe("honeydip-label", () => {
  it("小蜜罐与木蜜勺文案", () => {
    expect(formatHoneyJarLine(1).length).toBeGreaterThan(4);
    expect(formatHoneyJarLine(2)).toMatch(/蜜|稠|茶|苦|甜/);
    expect(formatWoodDipperLine(0)).toMatch(/勺|干|温存|滴/);
    expect(formatWoodDipperLine(20)).toMatch(/勺|温|轻|甜|茶|心|蜜/);
    expect(formatHoneydipAside(0)).toMatch(/蜜|合|流通|甜/);
    expect(formatHoneydipAside(5)).toContain("5");
    expect(formatHoneydipEncourage(0)).toMatch(/蜜罐|木勺|甜/);
    expect(formatHoneydipPair(1, 10)).toMatch(/蜜|勺|罐/);
  });
});
