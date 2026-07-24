import { describe, expect, it } from "vitest";
import {
  formatSmallLoomLine,
  formatSoftShuttleLine,
  formatSoftloomAside,
  formatSoftloomEncourage,
  formatSoftloomPair,
} from "../src/core/softloom-label";

describe("softloom-label", () => {
  it("五函数按阈值分支且非空", () => {
    expect(formatSmallLoomLine(1).length).toBeGreaterThan(4);
    expect(formatSmallLoomLine(2)).toMatch(/机|稳|织|纬|赶|工/);
    expect(formatSoftShuttleLine(0)).toMatch(/梭|空|温存|穿|纬/);
    expect(formatSoftShuttleLine(15)).toMatch(/梭|经|店|空|隙|软|织/);
    expect(formatSoftloomAside(0)).toMatch(/机|空|流通|织|纹/);
    expect(formatSoftloomAside(12)).toMatch(/12|织|许|可|温柔/);
    expect(formatSoftloomAside(30)).toMatch(/30|逾|轻织|纬/);
    expect(formatSoftloomEncourage(0)).toMatch(/织机|梭|经|线|织/);
    expect(formatSoftloomEncourage(2)).toMatch(/梭|纬|织|流通|成/);
    expect(formatSoftloomEncourage(5)).toMatch(/梭|放|织|松|腕/);
    const pair = formatSoftloomPair(3, 20);
    expect(pair).toContain(formatSmallLoomLine(3));
    expect(pair).toContain(formatSoftShuttleLine(20));
  });
});
