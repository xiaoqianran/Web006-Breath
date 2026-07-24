import { describe, it, expect } from "vitest";
import {
  formatApronLine,
  formatCuffLine,
  formatApronAside,
  formatKeeperEncourage,
  formatApronPair,
} from "../src/core";

describe("apron-label", () => {
  it("围裙与袖套文案", () => {
    expect(formatApronLine(1).length).toBeGreaterThan(4);
    expect(formatApronLine(2)).toMatch(/围裙|茶|亚麻/);
    expect(formatCuffLine(0)).toMatch(/袖套|叠/);
    expect(formatCuffLine(4)).toContain("4");
    expect(formatApronAside(0)).toMatch(/空|温存/);
    expect(formatApronAside(20)).toMatch(/口袋|丝带|勇气/);
    expect(formatKeeperEncourage(0)).toMatch(/歇|围裙/);
    expect(formatKeeperEncourage(2)).toContain("2");
    expect(formatApronPair(1, 0)).toMatch(/围裙|袖/);
  });
});
