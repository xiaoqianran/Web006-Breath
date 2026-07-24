import { describe, it, expect } from "vitest";
import {
  formatRollingPinLine,
  formatDustSpoonLine,
  formatRollingpinAside,
  formatRollingpinEncourage,
  formatRollingpinPair,
} from "../src/core";

describe("rollingpin-label", () => {
  it("擀面杖与撒粉勺文案", () => {
    expect(formatRollingPinLine(1).length).toBeGreaterThan(4);
    expect(formatRollingPinLine(2)).toMatch(/轴|圆|厚|急|推/);
    expect(formatDustSpoonLine(0)).toMatch(/勺|空|温存|撒|粉/);
    expect(formatDustSpoonLine(20)).toMatch(/粉|温|薄|粘|香|勺|面/);
    expect(formatRollingpinAside(0)).toMatch(/杖|靠|流通|擀|面/);
    expect(formatRollingpinAside(5)).toContain("5");
    expect(formatRollingpinEncourage(0)).toMatch(/擀面杖|撒粉|铺|层/);
    expect(formatRollingpinPair(1, 10)).toMatch(/杖|勺|擀|粉/);
  });
});
