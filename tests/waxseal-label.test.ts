import { describe, it, expect } from "vitest";
import {
  formatSealingWaxLine,
  formatWaxSpoonLine,
  formatWaxsealAside,
  formatWaxsealEncourage,
  formatWaxsealPair,
} from "../src/core";

describe("waxseal-label", () => {
  it("火漆与封缄勺文案", () => {
    expect(formatSealingWaxLine(1).length).toBeGreaterThan(4);
    expect(formatSealingWaxLine(2)).toMatch(/蜡|封|边|册/);
    expect(formatWaxSpoonLine(0)).toMatch(/勺|凉|温存|蜡/);
    expect(formatWaxSpoonLine(20)).toMatch(/蜡|圆|停|印|勺|温|封|开/);
    expect(formatWaxsealAside(0)).toMatch(/印|蜡|册/);
    expect(formatWaxsealAside(5)).toContain("5");
    expect(formatWaxsealEncourage(0)).toMatch(/火漆|郑重|盖/);
    expect(formatWaxsealPair(1, 10)).toMatch(/火漆|蜡|勺|封/);
  });
});
