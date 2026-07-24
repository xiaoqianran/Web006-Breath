import { describe, it, expect } from "vitest";
import {
  formatJarTagLine,
  formatFineCottonLine,
  formatJarlabelAside,
  formatJarlabelEncourage,
  formatJarlabelPair,
} from "../src/core";

describe("jarlabel-label", () => {
  it("罐口标签与细棉线文案", () => {
    expect(formatJarTagLine(1).length).toBeGreaterThan(4);
    expect(formatJarTagLine(2)).toMatch(/标|名|写|评|签/);
    expect(formatFineCottonLine(0)).toMatch(/线|松|温存|圈/);
    expect(formatFineCottonLine(20)).toMatch(/线|温|细|名|罐|系|签/);
    expect(formatJarlabelAside(0)).toMatch(/标|空|流通|罐|名/);
    expect(formatJarlabelAside(5)).toContain("5");
    expect(formatJarlabelEncourage(0)).toMatch(/标签|棉线|名|温柔/);
    expect(formatJarlabelPair(1, 10)).toMatch(/标|线|罐/);
  });
});
