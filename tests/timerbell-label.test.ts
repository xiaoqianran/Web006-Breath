import { describe, it, expect } from "vitest";
import {
  formatKitchenHourglassLine,
  formatSoftTimerBellLine,
  formatTimerbellAside,
  formatTimerbellEncourage,
  formatTimerbellPair,
} from "../src/core";

describe("timerbell-label", () => {
  it("厨房沙漏与小铃铛文案", () => {
    expect(formatKitchenHourglassLine(1).length).toBeGreaterThan(4);
    expect(formatKitchenHourglassLine(2)).toMatch(/砂|细|时|急|记/);
    expect(formatSoftTimerBellLine(0)).toMatch(/铃|哑|温存|声/);
    expect(formatSoftTimerBellLine(20)).toMatch(/铃|温|轻|响|吓|人|等/);
    expect(formatTimerbellAside(0)).toMatch(/沙漏|立|流通|等/);
    expect(formatTimerbellAside(5)).toContain("5");
    expect(formatTimerbellEncourage(0)).toMatch(/沙漏|小铃|等|听/);
    expect(formatTimerbellPair(1, 10)).toMatch(/沙|铃|漏/);
  });
});
