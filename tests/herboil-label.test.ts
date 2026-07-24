import { describe, it, expect } from "vitest";
import {
  formatHerbOilBottleLine,
  formatGlassDropperLine,
  formatHerboilAside,
  formatHerboilEncourage,
  formatHerboilPair,
} from "../src/core";

describe("herboil-label", () => {
  it("草药油瓶与玻璃滴管文案", () => {
    expect(formatHerbOilBottleLine(1).length).toBeGreaterThan(4);
    expect(formatHerbOilBottleLine(2)).toMatch(/油|清|润|粘|手/);
    expect(formatGlassDropperLine(0)).toMatch(/管|空|温存|滴/);
    expect(formatGlassDropperLine(20)).toMatch(/管|温|细|给|浪|费/);
    expect(formatHerboilAside(0)).toMatch(/瓶|封|流通|滴|香/);
    expect(formatHerboilAside(5)).toContain("5");
    expect(formatHerboilEncourage(0)).toMatch(/油瓶|滴管|滴|给/);
    expect(formatHerboilPair(1, 10)).toMatch(/油|管|瓶|滴/);
  });
});
