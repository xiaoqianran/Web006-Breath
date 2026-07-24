import { describe, expect, it } from "vitest";
import {
  formatSignetRingLine,
  formatWaxStickLine,
  formatSoftsignetAside,
  formatSoftsignetEncourage,
  formatSoftsignetPair,
} from "../src/core/softsignet-label";

describe("softsignet-label", () => {
  it("五函数按阈值分支且非空", () => {
    expect(formatSignetRingLine(1).length).toBeGreaterThan(4);
    expect(formatSignetRingLine(2)).toMatch(/面|稳|印|点|硬|盖/);
    expect(formatWaxStickLine(0)).toMatch(/火漆|冷|温存|熔/);
    expect(formatWaxStickLine(15)).toMatch(/蜡|戒|店|心|封|安/);
    expect(formatSoftsignetAside(0)).toMatch(/戒|净|流通|印|封/);
    expect(formatSoftsignetAside(12)).toMatch(/12|印|许|可|温柔/);
    expect(formatSoftsignetAside(30)).toMatch(/30|逾|轻印|光/);
    expect(formatSoftsignetEncourage(0)).toMatch(/印戒|火漆|封/);
    expect(formatSoftsignetEncourage(2)).toMatch(/蜡|戒|印|流通|封/);
    expect(formatSoftsignetEncourage(5)).toMatch(/戒|收|印|松|腕/);
    const pair = formatSoftsignetPair(3, 20);
    expect(pair).toContain(formatSignetRingLine(3));
    expect(pair).toContain(formatWaxStickLine(20));
  });
});
