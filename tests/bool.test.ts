import { describe, it, expect } from "vitest";
import { allTrue, anyTrue, countTrue } from "../src/core";

describe("bool", () => {
  it("all/any/count", () => {
    expect(allTrue([true, true])).toBe(true);
    expect(allTrue([true, false])).toBe(false);
    expect(anyTrue([false, true])).toBe(true);
    expect(anyTrue([false, false])).toBe(false);
    expect(countTrue([true, false, true])).toBe(2);
  });
});
