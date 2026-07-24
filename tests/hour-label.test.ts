import { describe, it, expect } from "vitest";
import {
  hourForDay,
  formatHourLine,
  formatHourShort,
  formatHourCraftAside,
  formatHourglassAside,
} from "../src/core";

describe("hour-label", () => {
  it("八时辰轮转与文案", () => {
    const hours = new Set([1, 2, 3, 4, 5, 6, 7, 8].map((d) => hourForDay(d).hour));
    expect(hours.size).toBe(8);
    expect(hourForDay(9).hour).toBe(hourForDay(1).hour);
    expect(formatHourLine(1)).toContain("时辰");
    expect(formatHourShort(2)).toBe("午前");
    expect(formatHourCraftAside(1)).toMatch(/茶|花/);
    expect(formatHourglassAside(0)).toContain("翻面");
    expect(formatHourglassAside(4)).toMatch(/满|攒/);
  });
});
