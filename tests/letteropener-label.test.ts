import { describe, expect, it } from "vitest";
import {
  formatCreamEnvelopeLine,
  formatLetterOpenerLine,
  formatLetteropenerAside,
  formatLetteropenerEncourage,
  formatLetteropenerPair,
} from "../src/core/letteropener-label";

describe("letteropener-label", () => {
  it("formats envelope, opener, aside, encourage and pair", () => {
    expect(formatCreamEnvelopeLine(1).length).toBeGreaterThan(4);
    expect(formatCreamEnvelopeLine(2)).toMatch(/信|轻|装|行|压|手|封/);
    expect(formatLetterOpenerLine(0)).toMatch(/刀|收|温存|划|口|拆/);
    expect(formatLetterOpenerLine(15)).toMatch(/刀|信|店|温|封|开|边/);
    expect(formatLetteropenerAside(0)).toMatch(/信|封|流通|拆|话/);
    expect(formatLetteropenerAside(5)).toContain("5");
    expect(formatLetteropenerEncourage(0)).toMatch(/信|刀|封|拆|开/);
    expect(formatLetteropenerPair(1, 10)).toMatch(/信|刀|封|拆/);
  });
});
