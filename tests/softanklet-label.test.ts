import { describe, expect, it } from "vitest";
import {
  formatSoftAnkletLine,
  formatAnkletClaspLine,
  formatSoftankletAside,
  formatSoftankletEncourage,
  formatSoftankletPair,
} from "../src/core/softanklet-label";

describe("softanklet-label", () => {
  it("五函数按阈值分支且非空", () => {
    expect(formatSoftAnkletLine(1).length).toBeGreaterThan(4);
    expect(formatSoftAnkletLine(2)).toMatch(/链|轻|绕|点|硬|绑/);
    expect(formatAnkletClaspLine(0)).toMatch(/细扣|开|温存|扣/);
    expect(formatAnkletClaspLine(15)).toMatch(/扣|链|店|散|绕|安/);
    expect(formatSoftankletAside(0)).toMatch(/链|齐|流通|绕|光/);
    expect(formatSoftankletAside(12)).toMatch(/12|绕|许|可|温柔/);
    expect(formatSoftankletAside(30)).toMatch(/30|逾|轻绕|光/);
    expect(formatSoftankletEncourage(0)).toMatch(/脚链|细扣|绕/);
    expect(formatSoftankletEncourage(2)).toMatch(/链|扣|戴|流通|绕/);
    expect(formatSoftankletEncourage(5)).toMatch(/扣|合|绕|松|脚/);
    const pair = formatSoftankletPair(3, 20);
    expect(pair).toContain(formatSoftAnkletLine(3));
    expect(pair).toContain(formatAnkletClaspLine(20));
  });
});
