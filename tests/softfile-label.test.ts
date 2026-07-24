import { describe, expect, it } from "vitest";
import {
  formatNeedleFileLine,
  formatPolishClothLine,
  formatSoftfileAside,
  formatSoftfileEncourage,
  formatSoftfilePair,
} from "../src/core/softfile-label";

describe("softfile-label", () => {
  it("五函数按阈值分支且非空", () => {
    expect(formatNeedleFileLine(1).length).toBeGreaterThan(4);
    expect(formatNeedleFileLine(2)).toMatch(/锉|细|锉|下|硬|磨/);
    expect(formatPolishClothLine(0)).toMatch(/抛|光|布|叠|温存|擦|下/);
    expect(formatPolishClothLine(15)).toMatch(/布|面|店|毛|边|收|光/);
    expect(formatSoftfileAside(0)).toMatch(/锉|净|流通|锉|痕/);
    expect(formatSoftfileAside(12)).toMatch(/12|锉|许|可|温柔/);
    expect(formatSoftfileAside(30)).toMatch(/30|逾|轻锉|光/);
    expect(formatSoftfileEncourage(0)).toMatch(/细锉|抛光|布|毛|边|收/);
    expect(formatSoftfileEncourage(2)).toMatch(/锉|擦|流通|收/);
    expect(formatSoftfileEncourage(5)).toMatch(/布|叠|锉|松|腕/);
    const pair = formatSoftfilePair(3, 20);
    expect(pair).toContain(formatNeedleFileLine(3));
    expect(pair).toContain(formatPolishClothLine(20));
  });
});
