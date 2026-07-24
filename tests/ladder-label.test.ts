import { describe, it, expect } from "vitest";
import {
  formatStepLadderLine,
  formatHighShelfLine,
  formatLadderAside,
  formatLadderEncourage,
  formatLadderPair,
} from "../src/core";

describe("ladder-label", () => {
  it("小木梯与高架文案", () => {
    expect(formatStepLadderLine(1).length).toBeGreaterThan(4);
    expect(formatStepLadderLine(2)).toMatch(/梯|磨|心/);
    expect(formatHighShelfLine(0)).toMatch(/空|高架/);
    expect(formatHighShelfLine(4)).toContain("4");
    expect(formatLadderAside(0)).toMatch(/凉|温存|梯/);
    expect(formatLadderAside(20)).toMatch(/梯|温|货架|够/);
    expect(formatLadderEncourage(0)).toMatch(/梯子|稳/);
    expect(formatLadderPair(1, 2)).toMatch(/梯|架/);
  });
});
