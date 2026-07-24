import { describe, expect, it } from "vitest";
import {
  formatSolderWireLine,
  formatThirdHandLine,
  formatSoftsolderAside,
  formatSoftsolderEncourage,
  formatSoftsolderPair,
} from "../src/core/softsolder-label";

describe("softsolder-label", () => {
  it("五函数按阈值分支且非空", () => {
    expect(formatSolderWireLine(1).length).toBeGreaterThan(4);
    expect(formatSolderWireLine(2)).toMatch(/丝|细|送|硬|塞/);
    expect(formatThirdHandLine(0)).toMatch(/第|三|手|空|温存|夹|件/);
    expect(formatThirdHandLine(15)).toMatch(/夹|件|店|接|缝|稳/);
    expect(formatSoftsolderAside(0)).toMatch(/丝|整|流通|送|银/);
    expect(formatSoftsolderAside(12)).toMatch(/12|焊|许|可|温柔/);
    expect(formatSoftsolderAside(30)).toMatch(/30|逾|轻焊|件/);
    expect(formatSoftsolderEncourage(0)).toMatch(/焊丝|第三|手|接|缝|填/);
    expect(formatSoftsolderEncourage(2)).toMatch(/丝|夹|送|流通|填/);
    expect(formatSoftsolderEncourage(5)).toMatch(/夹|松|焊|松|腕/);
    const pair = formatSoftsolderPair(3, 20);
    expect(pair).toContain(formatSolderWireLine(3));
    expect(pair).toContain(formatThirdHandLine(20));
  });
});
