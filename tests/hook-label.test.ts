import { describe, it, expect } from "vitest";
import {
  formatCoatHookLine,
  formatScarfRackLine,
  formatHookAside,
  formatCoatEncourage,
  formatHookPair,
} from "../src/core";

describe("hook-label", () => {
  it("衣帽钩与围巾文案", () => {
    expect(formatCoatHookLine(0)).toMatch(/空|钩/);
    expect(formatCoatHookLine(2)).toContain("2");
    expect(formatScarfRackLine(1).length).toBeGreaterThan(4);
    expect(formatScarfRackLine(2)).toMatch(/围巾|暖|叠/);
    expect(formatHookAside(0)).toMatch(/凉|流通/);
    expect(formatHookAside(20)).toMatch(/钩|温柔|人/);
    expect(formatCoatEncourage(0)).toMatch(/钩|卸/);
    expect(formatHookPair(1, 1)).toMatch(/钩|外套|围巾/);
  });
});
