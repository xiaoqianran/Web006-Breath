import { describe, expect, it } from "vitest";
import {
  formatQuiltBlockLine,
  formatBastingThreadLine,
  formatSoftblockAside,
  formatSoftblockEncourage,
  formatSoftblockPair,
} from "../src/core/softblock-label";

describe("softblock-label", () => {
  it("五函数按阈值分支且非空", () => {
    expect(formatQuiltBlockLine(1).length).toBeGreaterThan(4);
    expect(formatQuiltBlockLine(2)).toMatch(/布|软|拼|块|赶|工/);
    expect(formatBastingThreadLine(0)).toMatch(/绷|缝|线|整|温存|钉|针/);
    expect(formatBastingThreadLine(15)).toMatch(/线|布|店|碎|拼|完|整/);
    expect(formatSoftblockAside(0)).toMatch(/方|块|空|流通|拼|纹/);
    expect(formatSoftblockAside(12)).toMatch(/12|拼|许|可|温柔/);
    expect(formatSoftblockAside(30)).toMatch(/30|逾|轻拼|线/);
    expect(formatSoftblockEncourage(0)).toMatch(/拼布|绷缝|碎|布|拼/);
    expect(formatSoftblockEncourage(2)).toMatch(/布|线|拼|流通|成/);
    expect(formatSoftblockEncourage(5)).toMatch(/线|绕|拼|松|腕/);
    const pair = formatSoftblockPair(3, 20);
    expect(pair).toContain(formatQuiltBlockLine(3));
    expect(pair).toContain(formatBastingThreadLine(20));
  });
});
