import { describe, expect, it } from "vitest";
import {
  formatEndCapLine,
  formatSoftBailLine,
  formatSoftendcapAside,
  formatSoftendcapEncourage,
  formatSoftendcapPair,
} from "../src/core/softendcap-label";

describe("softendcap-label", () => {
  it("五函数按阈值分支且非空", () => {
    expect(formatEndCapLine(1).length).toBeGreaterThan(4);
    expect(formatEndCapLine(2)).toMatch(/帽|轻|护|点|硬|封/);
    expect(formatSoftBailLine(0)).toMatch(/吊坠|环|空|温存|挂/);
    expect(formatSoftBailLine(15)).toMatch(/环|帽|店|线|护|整/);
    expect(formatSoftendcapAside(0)).toMatch(/帽|齐|流通|护|收/);
    expect(formatSoftendcapAside(12)).toMatch(/12|护|许|可|温柔/);
    expect(formatSoftendcapAside(30)).toMatch(/30|逾|轻护|口/);
    expect(formatSoftendcapEncourage(0)).toMatch(/线头|帽|吊坠|环|护/);
    expect(formatSoftendcapEncourage(2)).toMatch(/帽|环|护|流通|收/);
    expect(formatSoftendcapEncourage(5)).toMatch(/帽|收|护|松|肩/);
    const pair = formatSoftendcapPair(3, 20);
    expect(pair).toContain(formatEndCapLine(3));
    expect(pair).toContain(formatSoftBailLine(20));
  });
});
