import { describe, it, expect } from "vitest";
import { makeId, isGameId } from "../src/core";

describe("id", () => {
  it("makeId 含前缀且唯一", () => {
    const a = makeId("item");
    const b = makeId("item");
    expect(a.startsWith("item_")).toBe(true);
    expect(a).not.toBe(b);
    expect(isGameId(a)).toBe(true);
  });

  it("isGameId 拒绝过短过长", () => {
    expect(isGameId("ab")).toBe(false);
    expect(isGameId("x".repeat(65))).toBe(false);
  });
});
