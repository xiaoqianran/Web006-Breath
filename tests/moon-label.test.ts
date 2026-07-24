import { describe, it, expect } from "vitest";
import {
  moonForDay,
  formatMoonLine,
  formatMoonShort,
  formatMoonCraftAside,
  formatMoonClosing,
} from "../src/core";

describe("moon-label", () => {
  it("八相轮转且文案非空", () => {
    const phases = new Set([1, 2, 3, 4, 5, 6, 7, 8].map((d) => moonForDay(d).phase));
    expect(phases.size).toBe(8);
    expect(moonForDay(9).phase).toBe(moonForDay(1).phase);
    expect(formatMoonLine(1)).toContain("月相");
    expect(formatMoonShort(5)).toBe("满月");
    expect(formatMoonCraftAside(5)).toMatch(/珍藏|匹配/);
    expect(formatMoonClosing(1)).toMatch(/朔|暗|歇|守/);
  });
});
