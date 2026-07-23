import { describe, it, expect } from "vitest";
import { qualityRank, isBetterQuality } from "../src/core";

describe("quality-rank", () => {
  it("rare > fine > simple", () => {
    expect(qualityRank("rare")).toBeGreaterThan(qualityRank("fine"));
    expect(qualityRank("fine")).toBeGreaterThan(qualityRank("simple"));
    expect(isBetterQuality("rare", "simple")).toBe(true);
    expect(isBetterQuality("simple", "fine")).toBe(false);
  });
});
