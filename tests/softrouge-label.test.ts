import { describe, expect, it } from "vitest";
import {
  formatPolishRougeLine,
  formatBuffStickLine,
  formatSoftrougeAside,
  formatSoftrougeEncourage,
  formatSoftrougePair,
} from "../src/core/softrouge-label";

describe("softrouge-label", () => {
  it("五函数按阈值分支且非空", () => {
    expect(formatPolishRougeLine(1).length).toBeGreaterThan(4);
    expect(formatPolishRougeLine(2)).toMatch(/膏|细|抹|硬|蹭/);
    expect(formatBuffStickLine(0)).toMatch(/绒|布|棒|新|温存|擦|下/);
    expect(formatBuffStickLine(15)).toMatch(/棒|面|店|暗|擦|光/);
    expect(formatSoftrougeAside(0)).toMatch(/膏|整|流通|擦|光/);
    expect(formatSoftrougeAside(12)).toMatch(/12|擦|许|可|温柔/);
    expect(formatSoftrougeAside(30)).toMatch(/30|逾|轻擦|粉/);
    expect(formatSoftrougeEncourage(0)).toMatch(/抛光|膏|绒布|棒|暗|面|擦/);
    expect(formatSoftrougeEncourage(2)).toMatch(/膏|棒|擦|流通|亮/);
    expect(formatSoftrougeEncourage(5)).toMatch(/棒|放|擦|松|腕/);
    const pair = formatSoftrougePair(3, 20);
    expect(pair).toContain(formatPolishRougeLine(3));
    expect(pair).toContain(formatBuffStickLine(20));
  });
});
