import { describe, expect, it } from "vitest";
import {
  formatSoftVeilLine,
  formatVeilPinLine,
  formatSoftveilAside,
  formatSoftveilEncourage,
  formatSoftveilPair,
} from "../src/core/softveil-label";

describe("softveil-label", () => {
  it("五函数按阈值分支且非空", () => {
    expect(formatSoftVeilLine(1).length).toBeGreaterThan(4);
    expect(formatSoftVeilLine(2)).toMatch(/纱|轻|映|点|硬|遮/);
    expect(formatVeilPinLine(0)).toMatch(/别针|松|温存|别/);
    expect(formatVeilPinLine(15)).toMatch(/针|纱|店|散|映|安/);
    expect(formatSoftveilAside(0)).toMatch(/纱|齐|流通|映|光/);
    expect(formatSoftveilAside(12)).toMatch(/12|披|许|可|温柔/);
    expect(formatSoftveilAside(30)).toMatch(/30|逾|轻披|光/);
    expect(formatSoftveilEncourage(0)).toMatch(/薄纱|别针|映/);
    expect(formatSoftveilEncourage(2)).toMatch(/纱|针|披|流通|映/);
    expect(formatSoftveilEncourage(5)).toMatch(/纱|摘|肩/);
    const pair = formatSoftveilPair(3, 20);
    expect(pair).toContain(formatSoftVeilLine(3));
    expect(pair).toContain(formatVeilPinLine(20));
  });
});
