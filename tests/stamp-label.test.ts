import { describe, it, expect } from "vitest";
import {
  formatSealStampLine,
  formatInkPadLine,
  formatStampAside,
  formatStampEncourage,
  formatStampPair,
} from "../src/core";

describe("stamp-label", () => {
  it("印模与印泥文案", () => {
    expect(formatSealStampLine(1).length).toBeGreaterThan(4);
    expect(formatSealStampLine(2)).toMatch(/印|柄|温|压|中/);
    expect(formatInkPadLine(0)).toMatch(/印泥|干|温存|蘸/);
    expect(formatInkPadLine(20)).toMatch(/泥|温|记|呼|润/);
    expect(formatStampAside(0)).toMatch(/印|册|记/);
    expect(formatStampAside(5)).toContain("5");
    expect(formatStampEncourage(0)).toMatch(/印|我在|理/);
    expect(formatStampPair(1, 10)).toMatch(/印|泥|模/);
  });
});
