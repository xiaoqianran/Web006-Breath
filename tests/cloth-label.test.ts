import { describe, it, expect } from "vitest";
import {
  formatBookclothLine,
  formatSpineStripLine,
  formatClothAside,
  formatClothEncourage,
  formatClothPair,
} from "../src/core";

describe("cloth-label", () => {
  it("装帧布与书脊条文案", () => {
    expect(formatBookclothLine(1).length).toBeGreaterThan(4);
    expect(formatBookclothLine(2)).toMatch(/布|裁|外|齐/);
    expect(formatSpineStripLine(0)).toMatch(/脊|硬|温存|弯/);
    expect(formatSpineStripLine(20)).toMatch(/脊|温|立|护|翻/);
    expect(formatClothAside(0)).toMatch(/布|裁|外壳/);
    expect(formatClothAside(5)).toContain("5");
    expect(formatClothEncourage(0)).toMatch(/装帧|布|外衣/);
    expect(formatClothPair(1, 10)).toMatch(/装帧|布|脊/);
  });
});
