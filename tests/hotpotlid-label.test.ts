import { describe, it, expect } from "vitest";
import {
  formatClayLidLine,
  formatWoodPaddleLine,
  formatHotpotlidAside,
  formatHotpotlidEncourage,
  formatHotpotlidPair,
} from "../src/core";

describe("hotpotlid-label", () => {
  it("小砂锅盖与木铲文案", () => {
    expect(formatClayLidLine(1).length).toBeGreaterThan(4);
    expect(formatClayLidLine(2)).toMatch(/盖|沉|热|耐|压/);
    expect(formatWoodPaddleLine(0)).toMatch(/铲|靠|温存|圈/);
    expect(formatWoodPaddleLine(20)).toMatch(/铲|温|木|搅|锅|圈|耐/);
    expect(formatHotpotlidAside(0)).toMatch(/盖|敞|流通|炖/);
    expect(formatHotpotlidAside(5)).toContain("5");
    expect(formatHotpotlidEncourage(0)).toMatch(/砂锅|木铲|慢|炖/);
    expect(formatHotpotlidPair(1, 10)).toMatch(/盖|铲|砂|锅/);
  });
});
