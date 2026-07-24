import { describe, expect, it } from "vitest";
import {
  formatSoftMittenLine,
  formatMittenBasketLine,
  formatSoftmittenAside,
  formatSoftmittenEncourage,
  formatSoftmittenPair,
} from "../src/core/softmitten-label";

describe("softmitten-label", () => {
  it("formats soft mitten, basket, aside, encourage and pair", () => {
    expect(formatSoftMittenLine(1).length).toBeGreaterThan(4);
    expect(formatSoftMittenLine(2)).toMatch(/套|软|捂|掌|勒|腕|手/);
    expect(formatMittenBasketLine(0)).toMatch(/筐|空|温存|放|双|柳|手/);
    expect(formatMittenBasketLine(15)).toMatch(/手|套|筐|店|温|暖|掌|落/);
    expect(formatSoftmittenAside(0)).toMatch(/套|叠|流通|暖|捂|双/);
    expect(formatSoftmittenAside(5)).toContain("5");
    expect(formatSoftmittenEncourage(0)).toMatch(/连|指|手|套|筐|暖|捂/);
    expect(formatSoftmittenPair(1, 10)).toMatch(/手|套|筐|绒|柳|暖/);
  });
});
