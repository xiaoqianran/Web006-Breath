import { describe, it, expect } from "vitest";
import {
  formatPaperShadeLine,
  formatCordSwitchLine,
  formatLampshadeAside,
  formatLampshadeEncourage,
  formatLampshadePair,
} from "../src/core";

describe("lampshade-label", () => {
  it("纸灯罩与灯绳开关文案", () => {
    expect(formatPaperShadeLine(1).length).toBeGreaterThan(4);
    expect(formatPaperShadeLine(2)).toMatch(/罩|光|轻|呼|收/);
    expect(formatCordSwitchLine(0)).toMatch(/绳|垂|温存|拉/);
    expect(formatCordSwitchLine(20)).toMatch(/绳|温|轻|亮|灯|眼|光/);
    expect(formatLampshadeAside(0)).toMatch(/灯|亮|流通|光/);
    expect(formatLampshadeAside(5)).toContain("5");
    expect(formatLampshadeEncourage(0)).toMatch(/灯罩|绳|光|聚/);
    expect(formatLampshadePair(1, 10)).toMatch(/罩|绳|灯/);
  });
});
