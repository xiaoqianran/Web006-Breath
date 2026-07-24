import { describe, it, expect } from "vitest";
import {
  formatWoodenBookendLine,
  formatPageWeightLine,
  formatBookendAside,
  formatBookendEncourage,
  formatBookendPair,
} from "../src/core";

describe("bookend-label", () => {
  it("木质书立与页镇文案", () => {
    expect(formatWoodenBookendLine(1).length).toBeGreaterThan(4);
    expect(formatWoodenBookendLine(2)).toMatch(/书立|稳|脊|心|扶/);
    expect(formatPageWeightLine(0)).toMatch(/镇|凉|温存|页/);
    expect(formatPageWeightLine(20)).toMatch(/镇|温|沉|页|呼|压/);
    expect(formatBookendAside(0)).toMatch(/书立|闲|流通|停|读/);
    expect(formatBookendAside(5)).toContain("5");
    expect(formatBookendEncourage(0)).toMatch(/书立|页镇|停|温柔/);
    expect(formatBookendPair(1, 10)).toMatch(/书立|镇|页/);
  });
});
