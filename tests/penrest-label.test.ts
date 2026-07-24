import { describe, expect, it } from "vitest";
import {
  formatCeramicPenRestLine,
  formatBlotSheetLine,
  formatPenrestAside,
  formatPenrestEncourage,
  formatPenrestPair,
} from "../src/core/penrest-label";

describe("penrest-label", () => {
  it("formats pen rest, blot sheet, aside, encourage and pair", () => {
    expect(formatCeramicPenRestLine(1).length).toBeGreaterThan(4);
    expect(formatCeramicPenRestLine(2)).toMatch(/搁|稳|托|枝|字|笔/);
    expect(formatBlotSheetLine(0)).toMatch(/吸|墨|纸|白|温存|点/);
    expect(formatBlotSheetLine(15)).toMatch(/纸|笔|店|温|字|湿|托/);
    expect(formatPenrestAside(0)).toMatch(/搁|空|流通|笔|托/);
    expect(formatPenrestAside(5)).toContain("5");
    expect(formatPenrestEncourage(0)).toMatch(/笔|搁|吸|墨|放/);
    expect(formatPenrestPair(1, 10)).toMatch(/笔|搁|纸|墨/);
  });
});
