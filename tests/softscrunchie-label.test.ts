import { describe, expect, it } from "vitest";
import {
  formatSoftScrunchieLine,
  formatScrunchieElasticLine,
  formatSoftscrunchieAside,
  formatSoftscrunchieEncourage,
  formatSoftscrunchiePair,
} from "../src/core/softscrunchie-label";

describe("softscrunchie-label", () => {
  it("五函数按阈值分支且非空", () => {
    expect(formatSoftScrunchieLine(1).length).toBeGreaterThan(4);
    expect(formatSoftScrunchieLine(2)).toMatch(/圈|软|束|点|硬|勒/);
    expect(formatScrunchieElasticLine(0)).toMatch(/弹力|绳|松|温存|绕/);
    expect(formatScrunchieElasticLine(15)).toMatch(/绳|圈|店|散|收|安/);
    expect(formatSoftscrunchieAside(0)).toMatch(/圈|齐|流通|收|光/);
    expect(formatSoftscrunchieAside(12)).toMatch(/12|束|许|可|温柔/);
    expect(formatSoftscrunchieAside(30)).toMatch(/30|逾|轻束|弧/);
    expect(formatSoftscrunchieEncourage(0)).toMatch(/发圈|弹力|束/);
    expect(formatSoftscrunchieEncourage(2)).toMatch(/绳|发|束|流通|收/);
    expect(formatSoftscrunchieEncourage(5)).toMatch(/圈|摘|肩/);
    const pair = formatSoftscrunchiePair(3, 20);
    expect(pair).toContain(formatSoftScrunchieLine(3));
    expect(pair).toContain(formatScrunchieElasticLine(20));
  });
});
