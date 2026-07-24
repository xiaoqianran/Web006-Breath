import { describe, expect, it } from "vitest";
import {
  formatSoftPinCushionLine,
  formatStraightPinLine,
  formatSoftpinAside,
  formatSoftpinEncourage,
  formatSoftpinPair,
} from "../src/core/softpin-label";

describe("softpin-label", () => {
  it("formats soft pin cushion, straight pin, aside, encourage and pair", () => {
    expect(formatSoftPinCushionLine(1).length).toBeGreaterThan(4);
    expect(formatSoftPinCushionLine(2)).toMatch(/插|软|收|针|刺|手/);
    expect(formatStraightPinLine(0)).toMatch(/针|整|温存|插|枚|直/);
    expect(formatStraightPinLine(15)).toMatch(/针|绒|店|温|锋|收|没/);
    expect(formatSoftpinAside(0)).toMatch(/插|空|流通|枚|针|安/);
    expect(formatSoftpinAside(5)).toContain("5");
    expect(formatSoftpinEncourage(0)).toMatch(/针|插|直|锋|安/);
    expect(formatSoftpinPair(1, 10)).toMatch(/针|插|直|软/);
  });
});
