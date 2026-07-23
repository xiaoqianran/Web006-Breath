import { describe, it, expect } from "vitest";
import { repeatItem, times } from "../src/core";

describe("repeat", () => {
  it("repeatItem 复制引用 n 次", () => {
    const o = { a: 1 };
    const arr = repeatItem(o, 3);
    expect(arr).toHaveLength(3);
    expect(arr[0]).toBe(o);
  });

  it("times 调用次数", () => {
    let c = 0;
    times(4, () => {
      c += 1;
    });
    expect(c).toBe(4);
    times(-1, () => {
      c += 1;
    });
    expect(c).toBe(4);
  });
});
