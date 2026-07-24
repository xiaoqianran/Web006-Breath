import { describe, expect, it } from "vitest";
import {
  formatBeeswaxTinLine,
  formatStrikeStripLine,
  formatBeeswaxAside,
  formatBeeswaxEncourage,
  formatBeeswaxPair,
} from "../src/core/beeswax-label";

describe("beeswax-label", () => {
  it("formats beeswax tin, strike strip, aside, encourage and pair", () => {
    expect(formatBeeswaxTinLine(1).length).toBeGreaterThan(4);
    expect(formatBeeswaxTinLine(2)).toMatch(/烛|浅|照|圈|刺|眼|光|蜜/);
    expect(formatStrikeStripLine(0)).toMatch(/条|净|温存|划|擦|火/);
    expect(formatStrikeStripLine(15)).toMatch(/火|擦|条|店|温|暖|暗|划/);
    expect(formatBeeswaxAside(0)).toMatch(/烛|新|流通|亮|蜜|香|圈/);
    expect(formatBeeswaxAside(5)).toContain("5");
    expect(formatBeeswaxEncourage(0)).toMatch(/蜂|蜡|烛|条|暖|点/);
    expect(formatBeeswaxPair(1, 10)).toMatch(/蜂|蜡|烛|条|火|暖/);
  });
});
