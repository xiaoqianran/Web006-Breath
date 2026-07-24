import { describe, it, expect } from "vitest";
import {
  formatDoorMatLine,
  formatShoeBoxLine,
  formatMatAside,
  formatMatEncourage,
  formatMatPair,
} from "../src/core";

describe("mat-label", () => {
  it("入户软垫与鞋边盒文案", () => {
    expect(formatDoorMatLine(1).length).toBeGreaterThan(4);
    expect(formatDoorMatLine(2)).toMatch(/垫|泥|来/);
    expect(formatShoeBoxLine(0)).toMatch(/空|鞋|雨/);
    expect(formatShoeBoxLine(2)).toContain("2");
    expect(formatMatAside(0)).toMatch(/凉|温存|垫/);
    expect(formatMatAside(20)).toMatch(/入口|温|松/);
    expect(formatMatEncourage(0)).toMatch(/门垫|尘/);
    expect(formatMatPair(1, 1)).toMatch(/垫|鞋/);
  });
});
