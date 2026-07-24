import { describe, it, expect } from "vitest";
import {
  formatSoftIronLine,
  formatPressPadLine,
  formatIronAside,
  formatIronEncourage,
  formatIronPair,
} from "../src/core";

describe("iron-label", () => {
  it("软熨斗与烫垫文案", () => {
    expect(formatSoftIronLine(1).length).toBeGreaterThan(4);
    expect(formatSoftIronLine(2)).toMatch(/熨斗|底|折|服/);
    expect(formatPressPadLine(0)).toMatch(/烫垫|凉|温存/);
    expect(formatPressPadLine(20)).toMatch(/垫|温|服|安/);
    expect(formatIronAside(0)).toMatch(/预热|烫|急/);
    expect(formatIronEncourage(0)).toMatch(/静|烫|蒸汽/);
    expect(formatIronEncourage(2)).toContain("2");
    expect(formatIronPair(1, 10)).toMatch(/熨|烫|垫|软/);
  });
});
