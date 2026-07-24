import { describe, it, expect } from "vitest";
import {
  formatThimbleLine,
  formatPincushionLine,
  formatThimbleAside,
  formatThimbleEncourage,
  formatThimblePair,
} from "../src/core";

describe("thimble-label", () => {
  it("顶针与针垫文案", () => {
    expect(formatThimbleLine(1).length).toBeGreaterThan(4);
    expect(formatThimbleLine(2)).toMatch(/顶针|铜|勇/);
    expect(formatPincushionLine(0)).toMatch(/针垫|空|针/);
    expect(formatPincushionLine(5)).toContain("5");
    expect(formatThimbleAside(0)).toMatch(/凉|温存|顶针/);
    expect(formatThimbleAside(20)).toMatch(/顶针|温|细|疼/);
    expect(formatThimbleEncourage(0)).toMatch(/顶针|护|第一/);
    expect(formatThimblePair(1, 2)).toMatch(/顶针|针垫|针/);
  });
});
