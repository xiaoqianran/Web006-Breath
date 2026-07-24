import { describe, expect, it } from "vitest";
import {
  formatQuenchBowlLine,
  formatSteelBlockLine,
  formatSoftquenchAside,
  formatSoftquenchEncourage,
  formatSoftquenchPair,
} from "../src/core/softquench-label";

describe("softquench-label", () => {
  it("五函数按阈值分支且非空", () => {
    expect(formatQuenchBowlLine(1).length).toBeGreaterThan(4);
    expect(formatQuenchBowlLine(2)).toMatch(/水|清|淬|下|硬|甩/);
    expect(formatSteelBlockLine(0)).toMatch(/钢|砧|冷|温存|敲|下/);
    expect(formatSteelBlockLine(15)).toMatch(/丝|面|店|热|定|稳/);
    expect(formatSoftquenchAside(0)).toMatch(/碗|满|流通|淬|静/);
    expect(formatSoftquenchAside(12)).toMatch(/12|淬|许|可|温柔/);
    expect(formatSoftquenchAside(30)).toMatch(/30|逾|轻淬|丝/);
    expect(formatSoftquenchEncourage(0)).toMatch(/淬火|碗|钢砧|热|丝|定/);
    expect(formatSoftquenchEncourage(2)).toMatch(/碗|淬|定|流通|住/);
    expect(formatSoftquenchEncourage(5)).toMatch(/碗|放|淬|松|腕/);
    const pair = formatSoftquenchPair(3, 20);
    expect(pair).toContain(formatQuenchBowlLine(3));
    expect(pair).toContain(formatSteelBlockLine(20));
  });
});
