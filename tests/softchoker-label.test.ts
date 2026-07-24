import { describe, expect, it } from "vitest";
import {
  formatSoftChokerLine,
  formatChokerRibbonLine,
  formatSoftchokerAside,
  formatSoftchokerEncourage,
  formatSoftchokerPair,
} from "../src/core/softchoker-label";

describe("softchoker-label", () => {
  it("五函数按阈值分支且非空", () => {
    expect(formatSoftChokerLine(1).length).toBeGreaterThan(4);
    expect(formatSoftChokerLine(2)).toMatch(/圈|软|绕|点|硬|勒/);
    expect(formatChokerRibbonLine(0)).toMatch(/丝带|扣|松|温存|系/);
    expect(formatChokerRibbonLine(15)).toMatch(/带|圈|店|散|系|安/);
    expect(formatSoftchokerAside(0)).toMatch(/圈|齐|流通|绕|光/);
    expect(formatSoftchokerAside(12)).toMatch(/12|系|许|可|温柔/);
    expect(formatSoftchokerAside(30)).toMatch(/30|逾|轻系|弧/);
    expect(formatSoftchokerEncourage(0)).toMatch(/颈圈|丝带|系/);
    expect(formatSoftchokerEncourage(2)).toMatch(/圈|带|扣|流通|绕/);
    expect(formatSoftchokerEncourage(5)).toMatch(/带|松|系|肩/);
    const pair = formatSoftchokerPair(3, 20);
    expect(pair).toContain(formatSoftChokerLine(3));
    expect(pair).toContain(formatChokerRibbonLine(20));
  });
});
