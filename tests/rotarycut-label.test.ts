import { describe, expect, it } from "vitest";
import {
  formatRotaryCutterLine,
  formatSoftCutMatLine,
  formatRotarycutAside,
  formatRotarycutEncourage,
  formatRotarycutPair,
} from "../src/core/rotarycut-label";

describe("rotarycut-label", () => {
  it("formats rotary cutter, soft cut mat, aside, encourage and pair", () => {
    expect(formatRotaryCutterLine(1).length).toBeGreaterThan(4);
    expect(formatRotaryCutterLine(2)).toMatch(/刀|轻|滚|痕|撕|扯/);
    expect(formatSoftCutMatLine(0)).toMatch(/垫|净|温存|铺|层|裁|软/);
    expect(formatSoftCutMatLine(15)).toMatch(/刀|垫|店|温|布|边|齐|滚/);
    expect(formatRotarycutAside(0)).toMatch(/垫|空|流通|痕|切|边/);
    expect(formatRotarycutAside(5)).toContain("5");
    expect(formatRotarycutEncourage(0)).toMatch(/滚|刀|垫|边|切/);
    expect(formatRotarycutPair(1, 10)).toMatch(/滚|刀|垫|裁/);
  });
});
