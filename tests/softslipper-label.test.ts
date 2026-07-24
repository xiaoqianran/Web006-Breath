import { describe, expect, it } from "vitest";
import {
  formatSoftSlipperLine,
  formatWoodShoeTrayLine,
  formatSoftslipperAside,
  formatSoftslipperEncourage,
  formatSoftslipperPair,
} from "../src/core/softslipper-label";

describe("softslipper-label", () => {
  it("formats soft slipper, wood shoe tray, aside, encourage and pair", () => {
    expect(formatSoftSlipperLine(1).length).toBeGreaterThan(4);
    expect(formatSoftSlipperLine(2)).toMatch(/鞋|轻|换|双|压|脚/);
    expect(formatWoodShoeTrayLine(0)).toMatch(/盘|空|温存|接|双|木|鞋|托/);
    expect(formatWoodShoeTrayLine(15)).toMatch(/拖|鞋|盘|店|温|尘|门|落/);
    expect(formatSoftslipperAside(0)).toMatch(/鞋|并|流通|暖|换|双/);
    expect(formatSoftslipperAside(5)).toContain("5");
    expect(formatSoftslipperEncourage(0)).toMatch(/拖|鞋|盘|尘|卸|托/);
    expect(formatSoftslipperPair(1, 10)).toMatch(/拖|鞋|盘|木|暖/);
  });
});
