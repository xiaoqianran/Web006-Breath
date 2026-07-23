import { describe, it, expect } from "vitest";
import { sumNumbers, averageNumbers } from "../src/core";

describe("sum", () => {
  it("sumNumbers 忽略非有限值", () => {
    expect(sumNumbers([1, 2, NaN, 3])).toBe(6);
  });

  it("averageNumbers 空数组为 0", () => {
    expect(averageNumbers([])).toBe(0);
    expect(averageNumbers([2, 4])).toBe(3);
  });
});
