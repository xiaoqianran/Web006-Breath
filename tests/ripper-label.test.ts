import { describe, it, expect } from "vitest";
import {
  formatSeamRipperLine,
  formatEmeryBagLine,
  formatRipperAside,
  formatRipperEncourage,
  formatRipperPair,
} from "../src/core";

describe("ripper-label", () => {
  it("拆线器与砂囊文案", () => {
    expect(formatSeamRipperLine(1).length).toBeGreaterThan(4);
    expect(formatSeamRipperLine(2)).toMatch(/红|柄|拆|缝/);
    expect(formatEmeryBagLine(0)).toMatch(/砂囊|凉|温存|针/);
    expect(formatEmeryBagLine(20)).toMatch(/砂|温|钝|拆|磨/);
    expect(formatRipperAside(0)).toMatch(/刃|重来|针/);
    expect(formatRipperEncourage(0)).toMatch(/静|拆|针/);
    expect(formatRipperEncourage(2)).toContain("2");
    expect(formatRipperPair(1, 10)).toMatch(/拆|砂|针|线/);
  });
});
