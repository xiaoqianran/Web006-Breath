import { describe, it, expect } from "vitest";
import { formatInt, formatRatioPercent } from "../src/core";

describe("format-number", () => {
  it("formatInt 截断", () => {
    expect(formatInt(3.9)).toBe("3");
    expect(formatInt(NaN)).toBe("0");
  });

  it("formatRatioPercent 夹紧", () => {
    expect(formatRatioPercent(0.5)).toBe("50%");
    expect(formatRatioPercent(2)).toBe("100%");
    expect(formatRatioPercent(-1)).toBe("0%");
  });
});
