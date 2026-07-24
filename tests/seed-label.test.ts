import { describe, it, expect } from "vitest";
import {
  formatBirdSeedLine,
  formatSeedDishLine,
  formatSeedAside,
  formatSeedEncourage,
  formatSeedPair,
} from "../src/core";

describe("seed-label", () => {
  it("窗台鸟食与小碟文案", () => {
    expect(formatBirdSeedLine(1).length).toBeGreaterThan(4);
    expect(formatBirdSeedLine(2)).toMatch(/食|爪|鸟/);
    expect(formatSeedDishLine(0)).toMatch(/碟|空|温存|谷/);
    expect(formatSeedDishLine(20)).toMatch(/碟|流通|窗|满|空/);
    expect(formatSeedAside(0)).toMatch(/窗|风|翅|光/);
    expect(formatSeedAside(2)).toContain("2");
    expect(formatSeedEncourage(0)).toMatch(/鸟食|勺|小生命/);
    expect(formatSeedPair(1, 10)).toMatch(/鸟|食|碟|窗/);
  });
});
