import { describe, it, expect } from "vitest";
import {
  formatPastePotLine,
  formatPasteBrushLine,
  formatGlueAside,
  formatGlueEncourage,
  formatGluePair,
} from "../src/core";

describe("glue-label", () => {
  it("浆糊盅与排刷文案", () => {
    expect(formatPastePotLine(1).length).toBeGreaterThan(4);
    expect(formatPastePotLine(2)).toMatch(/盅|干|刷|环衬/);
    expect(formatPasteBrushLine(0)).toMatch(/排刷|干|温存|浆/);
    expect(formatPasteBrushLine(20)).toMatch(/刷|温|匀|粘|缝/);
    expect(formatGlueAside(0)).toMatch(/浆|粘|匀/);
    expect(formatGlueEncourage(0)).toMatch(/静|刷|浆/);
    expect(formatGlueEncourage(2)).toContain("2");
    expect(formatGluePair(1, 10)).toMatch(/浆|刷|盅/);
  });
});
