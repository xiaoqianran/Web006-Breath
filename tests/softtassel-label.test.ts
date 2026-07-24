import { describe, expect, it } from "vitest";
import {
  formatTasselBoardLine,
  formatWaxedCordLine,
  formatSofttasselAside,
  formatSofttasselEncourage,
  formatSofttasselPair,
} from "../src/core/softtassel-label";

describe("softtassel-label", () => {
  it("五函数按阈值分支且非空", () => {
    expect(formatTasselBoardLine(1).length).toBeGreaterThan(4);
    expect(formatTasselBoardLine(2)).toMatch(/板|平|编|束|勒|紧/);
    expect(formatWaxedCordLine(0)).toMatch(/蜡|线|整|温存|抽|缕/);
    expect(formatWaxedCordLine(15)).toMatch(/蜡|线|板|店|散|落|软|编/);
    expect(formatSofttasselAside(0)).toMatch(/板|空|流通|编|须/);
    expect(formatSofttasselAside(12)).toMatch(/12|编|许|可|温柔/);
    expect(formatSofttasselAside(30)).toMatch(/30|逾|轻编|线/);
    expect(formatSofttasselEncourage(0)).toMatch(/流苏|蜡线|散|落|编/);
    expect(formatSofttasselEncourage(2)).toMatch(/板|线|编|流通|成/);
    expect(formatSofttasselEncourage(5)).toMatch(/线|绕|编|松|腕/);
    const pair = formatSofttasselPair(3, 20);
    expect(pair).toContain(formatTasselBoardLine(3));
    expect(pair).toContain(formatWaxedCordLine(20));
  });
});
