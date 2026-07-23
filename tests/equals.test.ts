import { describe, it, expect } from "vitest";
import { shallowEqualRecord, arraysEqualShallow } from "../src/core";

describe("equals", () => {
  it("shallowEqualRecord", () => {
    expect(shallowEqualRecord({ a: 1 }, { a: 1 })).toBe(true);
    expect(shallowEqualRecord({ a: 1 }, { a: 2 })).toBe(false);
    expect(shallowEqualRecord({ a: 1 }, { a: 1, b: 2 })).toBe(false);
  });

  it("arraysEqualShallow", () => {
    expect(arraysEqualShallow([1, 2], [1, 2])).toBe(true);
    expect(arraysEqualShallow([1], [1, 2])).toBe(false);
  });
});
