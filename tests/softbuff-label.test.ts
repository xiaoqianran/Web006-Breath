import { describe, expect, it } from "vitest";
import {
  formatBuffWheelLine,
  formatPolishCakeLine,
  formatSoftbuffAside,
  formatSoftbuffEncourage,
  formatSoftbuffPair,
} from "../src/core/softbuff-label";

describe("softbuff-label", () => {
  it("五函数按阈值分支且非空", () => {
    expect(formatBuffWheelLine(1).length).toBeGreaterThan(4);
    expect(formatBuffWheelLine(2)).toMatch(/轮|软|抛|点|硬|蹭/);
    expect(formatPolishCakeLine(0)).toMatch(/抛光膏|封|温存|沾/);
    expect(formatPolishCakeLine(15)).toMatch(/膏|轮|店|暗|抛|亮/);
    expect(formatSoftbuffAside(0)).toMatch(/轮|新|流通|抛|光/);
    expect(formatSoftbuffAside(12)).toMatch(/12|抛|许|可|温柔/);
    expect(formatSoftbuffAside(30)).toMatch(/30|逾|轻抛|弧/);
    expect(formatSoftbuffEncourage(0)).toMatch(/抛光轮|抛光膏|抛/);
    expect(formatSoftbuffEncourage(2)).toMatch(/膏|轮|抛|流通|光/);
    expect(formatSoftbuffEncourage(5)).toMatch(/轮|停|抛|松|肩/);
    const pair = formatSoftbuffPair(3, 20);
    expect(pair).toContain(formatBuffWheelLine(3));
    expect(pair).toContain(formatPolishCakeLine(20));
  });
});
