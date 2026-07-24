import { describe, expect, it } from "vitest";
import {
  formatFingerlessGloveLine,
  formatGloveDishLine,
  formatFingerlessAside,
  formatFingerlessEncourage,
  formatFingerlessPair,
} from "../src/core/fingerless-label";

describe("fingerless-label", () => {
  it("formats fingerless glove, dish, aside, encourage and pair", () => {
    expect(formatFingerlessGloveLine(1).length).toBeGreaterThan(4);
    expect(formatFingerlessGloveLine(2)).toMatch(/套|薄|捂|掌|指|尖|半/);
    expect(formatGloveDishLine(0)).toMatch(/碟|空|温存|放|双|瓷|手/);
    expect(formatGloveDishLine(15)).toMatch(/手|套|碟|店|温|暖|掌|写|落/);
    expect(formatFingerlessAside(0)).toMatch(/套|叠|流通|暖|戴|双/);
    expect(formatFingerlessAside(5)).toContain("5");
    expect(formatFingerlessEncourage(0)).toMatch(/半|指|手|套|碟|掌|捂/);
    expect(formatFingerlessPair(1, 10)).toMatch(/手|套|碟|半|指|掌/);
  });
});
