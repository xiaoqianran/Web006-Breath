import { describe, it, expect } from "vitest";
import {
  formatCornerRounderLine,
  formatCornerGuardLine,
  formatCornerAside,
  formatCornerEncourage,
  formatCornerPair,
} from "../src/core";

describe("corner-label", () => {
  it("圆角器与护角文案", () => {
    expect(formatCornerRounderLine(1).length).toBeGreaterThan(4);
    expect(formatCornerRounderLine(2)).toMatch(/角|屑|封面|修/);
    expect(formatCornerGuardLine(0)).toMatch(/护角|凉|温存|角/);
    expect(formatCornerGuardLine(20)).toMatch(/护|温|角|圆|刺/);
    expect(formatCornerAside(0)).toMatch(/角|方|成册|尖/);
    expect(formatCornerAside(5)).toContain("5");
    expect(formatCornerEncourage(0)).toMatch(/圆角|边|软/);
    expect(formatCornerPair(1, 10)).toMatch(/圆角|护角|角/);
  });
});
