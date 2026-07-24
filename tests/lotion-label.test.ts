import { describe, expect, it } from "vitest";
import {
  formatLotionBottleLine,
  formatPumpCapLine,
  formatLotionAside,
  formatLotionEncourage,
  formatLotionPair,
} from "../src/core/lotion-label";

describe("lotion-label", () => {
  it("formats lotion bottle, pump, aside, encourage and pair", () => {
    expect(formatLotionBottleLine(1).length).toBeGreaterThan(4);
    expect(formatLotionBottleLine(2)).toMatch(/乳|轻|涂|层|油|腻/);
    expect(formatPumpCapLine(0)).toMatch(/泵|空|温存|压/);
    expect(formatPumpCapLine(15)).toMatch(/泵|按|滋|皮|店|温|指/);
    expect(formatLotionAside(0)).toMatch(/瓶|满|流通|润|涂|泵/);
    expect(formatLotionAside(5)).toContain("5");
    expect(formatLotionEncourage(0)).toMatch(/乳|泵|润|涂/);
    expect(formatLotionPair(1, 10)).toMatch(/乳|泵|瓶|润/);
  });
});
