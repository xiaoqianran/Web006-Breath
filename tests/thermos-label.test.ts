import { describe, expect, it } from "vitest";
import {
  formatThermosFlaskLine,
  formatWoolSleeveLine,
  formatThermosAside,
  formatThermosEncourage,
  formatThermosPair,
} from "../src/core/thermos-label";

describe("thermos-label", () => {
  it("formats thermos flask, wool sleeve, aside, encourage and pair", () => {
    expect(formatThermosFlaskLine(1).length).toBeGreaterThan(4);
    expect(formatThermosFlaskLine(2)).toMatch(/壶|轻|装|热|程|压|肩/);
    expect(formatWoolSleeveLine(0)).toMatch(/套|松|温存|圈|羊|毛/);
    expect(formatWoolSleeveLine(15)).toMatch(/羊|套|壶|店|温|暖|路|掌/);
    expect(formatThermosAside(0)).toMatch(/壶|空|流通|热|灌/);
    expect(formatThermosAside(5)).toContain("5");
    expect(formatThermosEncourage(0)).toMatch(/保|温|壶|套|热|留/);
    expect(formatThermosPair(1, 10)).toMatch(/壶|套|羊|保|温/);
  });
});
