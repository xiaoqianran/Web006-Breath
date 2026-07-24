import { describe, expect, it } from "vitest";
import {
  formatSoftRosetteLine,
  formatRosetteCoreLine,
  formatSoftrosetteAside,
  formatSoftrosetteEncourage,
  formatSoftrosettePair,
} from "../src/core/softrosette-label";

describe("softrosette-label", () => {
  it("五函数按阈值分支且非空", () => {
    expect(formatSoftRosetteLine(1).length).toBeGreaterThan(4);
    expect(formatSoftRosetteLine(2)).toMatch(/结|软|点|硬|扎/);
    expect(formatRosetteCoreLine(0)).toMatch(/丝心|空|温存|收/);
    expect(formatRosetteCoreLine(15)).toMatch(/心|结|店|散|点|安/);
    expect(formatSoftrosetteAside(0)).toMatch(/结|齐|流通|点|光/);
    expect(formatSoftrosetteAside(12)).toMatch(/12|别|许|可|温柔/);
    expect(formatSoftrosetteAside(30)).toMatch(/30|逾|轻别|光/);
    expect(formatSoftrosetteEncourage(0)).toMatch(/玫瑰|丝心|点/);
    expect(formatSoftrosetteEncourage(2)).toMatch(/瓣|心|别|流通|点/);
    expect(formatSoftrosetteEncourage(5)).toMatch(/结|摘|肩/);
    const pair = formatSoftrosettePair(3, 20);
    expect(pair).toContain(formatSoftRosetteLine(3));
    expect(pair).toContain(formatRosetteCoreLine(20));
  });
});
