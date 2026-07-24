import { describe, expect, it } from "vitest";
import {
  formatSandTimerLine,
  formatFineSandLine,
  formatSandTimerAside,
  formatSandTimerEncourage,
  formatSandTimerPair,
} from "../src/core/sandtimer-label";

describe("sandtimer-label", () => {
  it("formats sand timer, fine sand, aside, encourage and pair", () => {
    expect(formatSandTimerLine(1).length).toBeGreaterThan(4);
    expect(formatSandTimerLine(2)).toMatch(/沙|慢|记|催|段|时/);
    expect(formatFineSandLine(0)).toMatch(/沙|静|温存|落|粒/);
    expect(formatFineSandLine(15)).toMatch(/沙|落|店|温|时|三|百|腰/);
    expect(formatSandTimerAside(0)).toMatch(/漏|满|流通|时|翻/);
    expect(formatSandTimerAside(5)).toContain("5");
    expect(formatSandTimerEncourage(0)).toMatch(/沙|漏|时|翻|计/);
    expect(formatSandTimerPair(1, 10)).toMatch(/沙|漏|时/);
  });
});
