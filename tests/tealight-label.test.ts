import { describe, expect, it } from "vitest";
import {
  formatTealightLine,
  formatSnufferLine,
  formatTealightAside,
  formatTealightEncourage,
  formatTealightPair,
} from "../src/core/tealight-label";

describe("tealight-label", () => {
  it("formats tealight, snuffer, aside, encourage and pair", () => {
    expect(formatTealightLine(1).length).toBeGreaterThan(4);
    expect(formatTealightLine(2)).toMatch(/光|浅|照|圈|刺|眼|暖/);
    expect(formatSnufferLine(0)).toMatch(/罩|冷|温存|盖|熄/);
    expect(formatSnufferLine(15)).toMatch(/罩|扣|光|店|温|收/);
    expect(formatTealightAside(0)).toMatch(/蜡|新|流通|暖|点|亮/);
    expect(formatTealightAside(5)).toContain("5");
    expect(formatTealightEncourage(0)).toMatch(/茶|蜡|罩|暖|点/);
    expect(formatTealightPair(1, 10)).toMatch(/茶|罩|蜡|光|熄/);
  });
});
