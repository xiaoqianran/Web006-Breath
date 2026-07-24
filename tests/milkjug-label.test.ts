import { describe, it, expect } from "vitest";
import {
  formatMilkJugLine,
  formatCreamSpoonLine,
  formatMilkjugAside,
  formatMilkjugEncourage,
  formatMilkjugPair,
} from "../src/core";

describe("milkjug-label", () => {
  it("小奶盅与奶油勺文案", () => {
    expect(formatMilkJugLine(1).length).toBeGreaterThan(4);
    expect(formatMilkJugLine(2)).toMatch(/奶|轻|烫|茶|软/);
    expect(formatCreamSpoonLine(0)).toMatch(/勺|闲|温存|圈/);
    expect(formatCreamSpoonLine(20)).toMatch(/勺|温|圆|搅|香|圈/);
    expect(formatMilkjugAside(0)).toMatch(/奶|满|流通|软/);
    expect(formatMilkjugAside(5)).toContain("5");
    expect(formatMilkjugEncourage(0)).toMatch(/奶盅|奶油|烫|软/);
    expect(formatMilkjugPair(1, 10)).toMatch(/奶|勺|盅/);
  });
});
