import { describe, it, expect } from "vitest";
import {
  formatCookieTinLine,
  formatTwistTieLine,
  formatCookietinAside,
  formatCookietinEncourage,
  formatCookietinPair,
} from "../src/core";

describe("cookietin-label", () => {
  it("饼干铁盒与扎带文案", () => {
    expect(formatCookieTinLine(1).length).toBeGreaterThan(4);
    expect(formatCookieTinLine(2)).toMatch(/盒|轻|香|催|装/);
    expect(formatTwistTieLine(0)).toMatch(/带|松|温存|结/);
    expect(formatTwistTieLine(20)).toMatch(/带|温|软|香|系|勒/);
    expect(formatCookietinAside(0)).toMatch(/盒|空|流通|香|带/);
    expect(formatCookietinAside(5)).toContain("5");
    expect(formatCookietinEncourage(0)).toMatch(/铁盒|扎带|香|装/);
    expect(formatCookietinPair(1, 10)).toMatch(/盒|带|铁|扎/);
  });
});
