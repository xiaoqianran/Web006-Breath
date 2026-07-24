import { describe, it, expect } from "vitest";
import {
  formatOvenThermoLine,
  formatTimerDialLine,
  formatOventhermoAside,
  formatOventhermoEncourage,
  formatOventhermoPair,
} from "../src/core";

describe("oventhermo-label", () => {
  it("烤箱温度计与计时旋钮文案", () => {
    expect(formatOvenThermoLine(1).length).toBeGreaterThan(4);
    expect(formatOvenThermoLine(2)).toMatch(/针|稳|温|慌|报/);
    expect(formatTimerDialLine(0)).toMatch(/钮|零|温存|格|拧/);
    expect(formatTimerDialLine(20)).toMatch(/钮|温|准|点|吓|人|等|刻/);
    expect(formatOventhermoAside(0)).toMatch(/表|静|流通|火|候/);
    expect(formatOventhermoAside(5)).toContain("5");
    expect(formatOventhermoEncourage(0)).toMatch(/温度|旋钮|火候|看/);
    expect(formatOventhermoPair(1, 10)).toMatch(/温|钮|表|计/);
  });
});
