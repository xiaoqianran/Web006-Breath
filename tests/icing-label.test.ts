import { describe, it, expect } from "vitest";
import {
  formatIcingBagLine,
  formatSugarSieveLine,
  formatIcingAside,
  formatIcingEncourage,
  formatIcingPair,
} from "../src/core";

describe("icing-label", () => {
  it("裱花袋与糖粉筛文案", () => {
    expect(formatIcingBagLine(1).length).toBeGreaterThan(4);
    expect(formatIcingBagLine(2)).toMatch(/袋|软|线|催|画/);
    expect(formatSugarSieveLine(0)).toMatch(/筛|静|温存|雪|粉/);
    expect(formatSugarSieveLine(20)).toMatch(/粉|温|细|香|盖|筛|温/);
    expect(formatIcingAside(0)).toMatch(/袋|空|流通|甜|线/);
    expect(formatIcingAside(5)).toContain("5");
    expect(formatIcingEncourage(0)).toMatch(/裱花|糖粉|点缀|笔/);
    expect(formatIcingPair(1, 10)).toMatch(/袋|筛|裱|粉/);
  });
});
