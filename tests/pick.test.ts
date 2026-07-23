import { describe, it, expect } from "vitest";
import { pickAt, firstOf, lastOf } from "../src/core";

describe("pick", () => {
  it("pickAt 边界", () => {
    expect(pickAt([1, 2, 3], 1)).toBe(2);
    expect(pickAt([1, 2, 3], -1)).toBeUndefined();
    expect(pickAt([1, 2, 3], 9)).toBeUndefined();
  });

  it("first/last", () => {
    expect(firstOf(["a", "b"])).toBe("a");
    expect(lastOf(["a", "b"])).toBe("b");
    expect(firstOf([])).toBeUndefined();
    expect(lastOf([])).toBeUndefined();
  });
});
