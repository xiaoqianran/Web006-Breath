import { describe, expect, it } from "vitest";
import {
  formatPotholderLoomLine,
  formatLoopYarnLine,
  formatSoftpotholderAside,
  formatSoftpotholderEncourage,
  formatSoftpotholderPair,
} from "../src/core/softpotholder-label";

describe("softpotholder-label", () => {
  it("五函数按阈值分支且非空", () => {
    expect(formatPotholderLoomLine(1).length).toBeGreaterThan(4);
    expect(formatPotholderLoomLine(2)).toMatch(/机|稳|套|格|赶|工/);
    expect(formatLoopYarnLine(0)).toMatch(/圈|线|齐|温存|套|环/);
    expect(formatLoopYarnLine(15)).toMatch(/环|钉|店|方|格|套|软/);
    expect(formatSoftpotholderAside(0)).toMatch(/机|空|流通|套|纹/);
    expect(formatSoftpotholderAside(12)).toMatch(/12|套|许|可|温柔/);
    expect(formatSoftpotholderAside(30)).toMatch(/30|逾|轻套|环/);
    expect(formatSoftpotholderEncourage(0)).toMatch(/杯垫|织机|圈|方|格|套/);
    expect(formatSoftpotholderEncourage(2)).toMatch(/机|环|扣|流通|成/);
    expect(formatSoftpotholderEncourage(5)).toMatch(/环|理|套|松|腕/);
    const pair = formatSoftpotholderPair(3, 20);
    expect(pair).toContain(formatPotholderLoomLine(3));
    expect(pair).toContain(formatLoopYarnLine(20));
  });
});
