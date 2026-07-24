import { describe, it, expect } from "vitest";
import {
  formatKraftBagLine,
  formatHempTwineLine,
  formatKraftAside,
  formatKraftEncourage,
  formatKraftPair,
} from "../src/core";

describe("kraft-label", () => {
  it("牛皮纸袋与麻绳文案", () => {
    expect(formatKraftBagLine(1).length).toBeGreaterThan(4);
    expect(formatKraftBagLine(2)).toMatch(/袋|温|纸|装/);
    expect(formatHempTwineLine(0)).toMatch(/绳|松|温存|结/);
    expect(formatHempTwineLine(20)).toMatch(/绳|温|轻|系|带|松|结/);
    expect(formatKraftAside(0)).toMatch(/袋|展开|流通|纸袋/);
    expect(formatKraftAside(5)).toContain("5");
    expect(formatKraftEncourage(0)).toMatch(/纸袋|温柔|装/);
    expect(formatKraftPair(1, 10)).toMatch(/纸袋|袋|绳/);
  });
});
