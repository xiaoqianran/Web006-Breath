import { describe, it, expect } from "vitest";
import {
  formatWarmTagCardLine,
  formatFineStringLine,
  formatTagcardAside,
  formatTagcardEncourage,
  formatTagcardPair,
} from "../src/core";

describe("tagcard-label", () => {
  it("温言小卡与细线文案", () => {
    expect(formatWarmTagCardLine(1).length).toBeGreaterThan(4);
    expect(formatWarmTagCardLine(2)).toMatch(/卡|字|句|写/);
    expect(formatFineStringLine(0)).toMatch(/线|松|温存|孔/);
    expect(formatFineStringLine(20)).toMatch(/线|温|细|卡|余|松|孔/);
    expect(formatTagcardAside(0)).toMatch(/卡|写|流通|温言/);
    expect(formatTagcardAside(5)).toContain("5");
    expect(formatTagcardEncourage(0)).toMatch(/小卡|温言|写/);
    expect(formatTagcardPair(1, 10)).toMatch(/卡|线|温言/);
  });
});
