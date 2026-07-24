import { describe, it, expect } from "vitest";
import {
  formatEndpaperLine,
  formatHeadbandLine,
  formatEndpaperAside,
  formatEndpaperEncourage,
  formatEndpaperPair,
} from "../src/core";

describe("endpaper-label", () => {
  it("环衬与天头丝带文案", () => {
    expect(formatEndpaperLine(1).length).toBeGreaterThan(4);
    expect(formatEndpaperLine(2)).toMatch(/环衬|贴|服|外|内/);
    expect(formatHeadbandLine(0)).toMatch(/丝带|松|温存|天头/);
    expect(formatHeadbandLine(20)).toMatch(/丝|温|合|开/);
    expect(formatEndpaperAside(0)).toMatch(/环衬|贴|颜色/);
    expect(formatEndpaperAside(5)).toContain("5");
    expect(formatEndpaperEncourage(0)).toMatch(/环衬|颜色|裁/);
    expect(formatEndpaperPair(1, 10)).toMatch(/环衬|丝|天头/);
  });
});
