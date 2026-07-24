import { describe, expect, it } from "vitest";
import {
  formatMendMushroomLine,
  formatMendYarnLine,
  formatSoftmendAside,
  formatSoftmendEncourage,
  formatSoftmendPair,
} from "../src/core/softmend-label";

describe("softmend-label", () => {
  it("formats mend mushroom, yarn, aside, encourage and pair", () => {
    expect(formatMendMushroomLine(1).length).toBeGreaterThan(4);
    expect(formatMendMushroomLine(2)).toMatch(/菇|圆|托|处|撑|破|木/);
    expect(formatMendYarnLine(0)).toMatch(/线|整|温存|抽|缕|补|团/);
    expect(formatMendYarnLine(15)).toMatch(/线|菇|店|温|完|破|绕/);
    expect(formatSoftmendAside(0)).toMatch(/菇|闲|流通|处|织|口/);
    expect(formatSoftmendAside(5)).toContain("5");
    expect(formatSoftmendEncourage(0)).toMatch(/木|菇|补|线|破|口|织/);
    expect(formatSoftmendPair(1, 10)).toMatch(/菇|线|补|木/);
  });
});
