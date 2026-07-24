import { describe, expect, it } from "vitest";
import {
  formatBathSaltJarLine,
  formatShellScoopLine,
  formatBathsaltAside,
  formatBathsaltEncourage,
  formatBathsaltPair,
} from "../src/core/bathsalt-label";

describe("bathsalt-label", () => {
  it("formats bath salt jar, shell scoop, aside, encourage and pair", () => {
    expect(formatBathSaltJarLine(1).length).toBeGreaterThan(4);
    expect(formatBathSaltJarLine(2)).toMatch(/盐|细|溶|勺|涩|肤/);
    expect(formatShellScoopLine(0)).toMatch(/贝|壳|勺|空|温存|舀/);
    expect(formatShellScoopLine(15)).toMatch(/贝|盐|放|身|店|温|勺/);
    expect(formatBathsaltAside(0)).toMatch(/罐|封|流通|盐|溶|勺/);
    expect(formatBathsaltAside(5)).toContain("5");
    expect(formatBathsaltEncourage(0)).toMatch(/浴|盐|贝|累|溶/);
    expect(formatBathsaltPair(1, 10)).toMatch(/盐|贝|罐|勺/);
  });
});
