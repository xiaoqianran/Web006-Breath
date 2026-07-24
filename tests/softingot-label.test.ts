import { describe, expect, it } from "vitest";
import {
  formatIngotMoldLine,
  formatMeltingDishLine,
  formatSoftingotAside,
  formatSoftingotEncourage,
  formatSoftingotPair,
} from "../src/core/softingot-label";

describe("softingot-label", () => {
  it("五函数按阈值分支且非空", () => {
    expect(formatIngotMoldLine(1).length).toBeGreaterThan(4);
    expect(formatIngotMoldLine(2)).toMatch(/模|稳|倒|锭|硬|冲/);
    expect(formatMeltingDishLine(0)).toMatch(/熔|金|碗|空|温存|盛|勺/);
    expect(formatMeltingDishLine(15)).toMatch(/金|碗|店|流|收|锭/);
    expect(formatSoftingotAside(0)).toMatch(/模|空|流通|锭|形/);
    expect(formatSoftingotAside(12)).toMatch(/12|倒|许|可|温柔/);
    expect(formatSoftingotAside(30)).toMatch(/30|逾|轻倒|锭/);
    expect(formatSoftingotEncourage(0)).toMatch(/铸锭|模|熔金|碗|流|金|收/);
    expect(formatSoftingotEncourage(2)).toMatch(/碗|倒|锭|流通|成/);
    expect(formatSoftingotEncourage(5)).toMatch(/碗|放|倒|松|腕/);
    const pair = formatSoftingotPair(3, 20);
    expect(pair).toContain(formatIngotMoldLine(3));
    expect(pair).toContain(formatMeltingDishLine(20));
  });
});
