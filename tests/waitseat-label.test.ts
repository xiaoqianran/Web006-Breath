import { describe, it, expect } from "vitest";
import {
  formatWaitCushionLine,
  formatWarmWaterCupLine,
  formatWaitseatAside,
  formatWaitseatEncourage,
  formatWaitseatPair,
} from "../src/core";

describe("waitseat-label", () => {
  it("候座软垫与温水小杯文案", () => {
    expect(formatWaitCushionLine(1).length).toBeGreaterThan(4);
    expect(formatWaitCushionLine(2)).toMatch(/垫|软|等|催/);
    expect(formatWarmWaterCupLine(0)).toMatch(/杯|凉|温存|倒/);
    expect(formatWarmWaterCupLine(20)).toMatch(/水|温|等|烫|杯|垫|手|心/);
    expect(formatWaitseatAside(0)).toMatch(/垫|空|流通|等/);
    expect(formatWaitseatAside(5)).toContain("5");
    expect(formatWaitseatEncourage(0)).toMatch(/软垫|小杯|等候|照顾/);
    expect(formatWaitseatPair(1, 10)).toMatch(/垫|杯|软/);
  });
});
