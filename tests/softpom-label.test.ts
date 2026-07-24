import { describe, expect, it } from "vitest";
import {
  formatPomMakerLine,
  formatYarnScrapBoxLine,
  formatSoftpomAside,
  formatSoftpomEncourage,
  formatSoftpomPair,
} from "../src/core/softpom-label";

describe("softpom-label", () => {
  it("五函数按阈值分支且非空", () => {
    expect(formatPomMakerLine(1).length).toBeGreaterThan(4);
    expect(formatPomMakerLine(2)).toMatch(/器|圆|绕|层|勒|紧/);
    expect(formatYarnScrapBoxLine(0)).toMatch(/碎|线|盒|空|温存|收|缕/);
    expect(formatYarnScrapBoxLine(15)).toMatch(/线|盒|店|零|碎|软|绕/);
    expect(formatSoftpomAside(0)).toMatch(/器|空|流通|绕|绒/);
    expect(formatSoftpomAside(12)).toMatch(/12|绕|许|可|温柔/);
    expect(formatSoftpomAside(30)).toMatch(/30|逾|轻绕|线/);
    expect(formatSoftpomEncourage(0)).toMatch(/绒球|碎线|零|碎|绕/);
    expect(formatSoftpomEncourage(2)).toMatch(/器|线|绕|流通|成/);
    expect(formatSoftpomEncourage(5)).toMatch(/线|盒|绕|松|腕/);
    const pair = formatSoftpomPair(3, 20);
    expect(pair).toContain(formatPomMakerLine(3));
    expect(pair).toContain(formatYarnScrapBoxLine(20));
  });
});
