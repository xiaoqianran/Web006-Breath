import { describe, expect, it } from "vitest";
import {
  formatSoftPendantLine,
  formatPendantCordLine,
  formatSoftpendantAside,
  formatSoftpendantEncourage,
  formatSoftpendantPair,
} from "../src/core/softpendant-label";

describe("softpendant-label", () => {
  it("五函数按阈值分支且非空", () => {
    expect(formatSoftPendantLine(1).length).toBeGreaterThan(4);
    expect(formatSoftPendantLine(2)).toMatch(/坠|轻|挂|点|硬|垂/);
    expect(formatPendantCordLine(0)).toMatch(/丝绳|松|温存|穿/);
    expect(formatPendantCordLine(15)).toMatch(/绳|坠|店|心|贴|近/);
    expect(formatSoftpendantAside(0)).toMatch(/坠|齐|流通|挂|光/);
    expect(formatSoftpendantAside(12)).toMatch(/12|挂|许|可|温柔/);
    expect(formatSoftpendantAside(30)).toMatch(/30|逾|轻挂|光/);
    expect(formatSoftpendantEncourage(0)).toMatch(/吊坠|丝绳|挂/);
    expect(formatSoftpendantEncourage(2)).toMatch(/绳|坠|贴|流通|近/);
    expect(formatSoftpendantEncourage(5)).toMatch(/坠|放|挂|松|肩/);
    const pair = formatSoftpendantPair(3, 20);
    expect(pair).toContain(formatSoftPendantLine(3));
    expect(pair).toContain(formatPendantCordLine(20));
  });
});
