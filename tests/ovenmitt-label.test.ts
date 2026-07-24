import { describe, it, expect } from "vitest";
import {
  formatOvenMittLine,
  formatBakePadLine,
  formatOvenmittAside,
  formatOvenmittEncourage,
  formatOvenmittPair,
} from "../src/core";

describe("ovenmitt-label", () => {
  it("隔热手套与烤盘垫文案", () => {
    expect(formatOvenMittLine(1).length).toBeGreaterThan(4);
    expect(formatOvenMittLine(2)).toMatch(/套|厚|烫|细|挡/);
    expect(formatBakePadLine(0)).toMatch(/垫|凉|温存|盘/);
    expect(formatBakePadLine(20)).toMatch(/垫|温|厚|烫|桌|接|盘/);
    expect(formatOvenmittAside(0)).toMatch(/套|空|流通|护|端/);
    expect(formatOvenmittAside(5)).toContain("5");
    expect(formatOvenmittEncourage(0)).toMatch(/手套|烤盘|护|手/);
    expect(formatOvenmittPair(1, 10)).toMatch(/套|垫|热|烤/);
  });
});
