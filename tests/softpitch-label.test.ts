import { describe, expect, it } from "vitest";
import {
  formatPitchBowlLine,
  formatScorperLine,
  formatSoftpitchAside,
  formatSoftpitchEncourage,
  formatSoftpitchPair,
} from "../src/core/softpitch-label";

describe("softpitch-label", () => {
  it("五函数按阈值分支且非空", () => {
    expect(formatPitchBowlLine(1).length).toBeGreaterThan(4);
    expect(formatPitchBowlLine(2)).toMatch(/胶|黏|嵌|下|硬|压/);
    expect(formatScorperLine(0)).toMatch(/錾|刀|收|温存|錾|道/);
    expect(formatScorperLine(15)).toMatch(/刃|面|店|细|錾|纹/);
    expect(formatSoftpitchAside(0)).toMatch(/碗|空|流通|嵌|稳/);
    expect(formatSoftpitchAside(12)).toMatch(/12|嵌|许|可|温柔/);
    expect(formatSoftpitchAside(30)).toMatch(/30|逾|轻嵌|纹/);
    expect(formatSoftpitchEncourage(0)).toMatch(/胶碗|錾刀|嵌|工|件/);
    expect(formatSoftpitchEncourage(2)).toMatch(/碗|嵌|錾|流通|定/);
    expect(formatSoftpitchEncourage(5)).toMatch(/刀|收|錾|松|腕/);
    const pair = formatSoftpitchPair(3, 20);
    expect(pair).toContain(formatPitchBowlLine(3));
    expect(pair).toContain(formatScorperLine(20));
  });
});
