import { describe, it, expect } from "vitest";
import {
  formatDarningEggLine,
  formatNeedleBookLine,
  formatDarnAside,
  formatDarnEncourage,
  formatDarnPair,
} from "../src/core";

describe("darn-label", () => {
  it("补衣蛋与针线册文案", () => {
    expect(formatDarningEggLine(1).length).toBeGreaterThan(4);
    expect(formatDarningEggLine(2)).toMatch(/蛋|木|补|袖/);
    expect(formatNeedleBookLine(0)).toMatch(/册|合|针/);
    expect(formatNeedleBookLine(5)).toContain("5");
    expect(formatDarnAside(0)).toMatch(/凉|温存|破/);
    expect(formatDarnAside(20)).toMatch(/温|破|完|蛋/);
    expect(formatDarnEncourage(0)).toMatch(/册|补|针/);
    expect(formatDarnPair(1, 2)).toMatch(/补|蛋|册|针/);
  });
});
