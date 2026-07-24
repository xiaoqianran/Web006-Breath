import { describe, expect, it } from "vitest";
import {
  formatSoftCaliperLine,
  formatThicknessGaugeLine,
  formatSoftcaliperAside,
  formatSoftcaliperEncourage,
  formatSoftcaliperPair,
} from "../src/core/softcaliper-label";

describe("softcaliper-label", () => {
  it("五函数按阈值分支且非空", () => {
    expect(formatSoftCaliperLine(1).length).toBeGreaterThan(4);
    expect(formatSoftCaliperLine(2)).toMatch(/尺|准|量|寸|定|论/);
    expect(formatThicknessGaugeLine(0)).toMatch(/厚|度|规|合|温存|卡|片/);
    expect(formatThicknessGaugeLine(15)).toMatch(/片|缝|店|厚|薄|量|温/);
    expect(formatSoftcaliperAside(0)).toMatch(/尺|净|流通|量|痕/);
    expect(formatSoftcaliperAside(12)).toMatch(/12|量|许|可|温柔/);
    expect(formatSoftcaliperAside(30)).toMatch(/30|逾|轻量|片/);
    expect(formatSoftcaliperEncourage(0)).toMatch(/卡尺|厚度|规|尺|寸|量/);
    expect(formatSoftcaliperEncourage(2)).toMatch(/尺|卡|读|流通|确/);
    expect(formatSoftcaliperEncourage(5)).toMatch(/尺|合|量|松|腕/);
    const pair = formatSoftcaliperPair(3, 20);
    expect(pair).toContain(formatSoftCaliperLine(3));
    expect(pair).toContain(formatThicknessGaugeLine(20));
  });
});
