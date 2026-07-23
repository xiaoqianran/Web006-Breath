import { describe, it, expect } from "vitest";
import { clamp, clampInt } from "../src/core";

describe("clamp", () => {
  it("限制上下界", () => {
    expect(clamp(5, 0, 10)).toBe(5);
    expect(clamp(-1, 0, 10)).toBe(0);
    expect(clamp(99, 0, 10)).toBe(10);
  });

  it("min>max 时自动交换", () => {
    expect(clamp(5, 10, 0)).toBe(5);
    expect(clamp(-1, 10, 0)).toBe(0);
  });

  it("clampInt 四舍五入", () => {
    expect(clampInt(1.6, 0, 10)).toBe(2);
    expect(clampInt(1.4, 0, 10)).toBe(1);
  });
});
