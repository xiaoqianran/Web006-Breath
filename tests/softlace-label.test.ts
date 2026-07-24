import { describe, expect, it } from "vitest";
import {
  formatLaceBobbinLine,
  formatLacePillowLine,
  formatSoftlaceAside,
  formatSoftlaceEncourage,
  formatSoftlacePair,
} from "../src/core/softlace-label";

describe("softlace-label", () => {
  it("formats lace bobbin, lace pillow, aside, encourage and pair", () => {
    expect(formatLaceBobbinLine(1).length).toBeGreaterThan(4);
    expect(formatLaceBobbinLine(2)).toMatch(/梭|轻|绕|圈|勒|紧|线/);
    expect(formatLacePillowLine(0)).toMatch(/枕|空|温存|钉|针|花|边/);
    expect(formatLacePillowLine(15)).toMatch(/线|枕|店|温|空|花|编|交/);
    expect(formatSoftlaceAside(0)).toMatch(/枕|净|流通|圈|编|花/);
    expect(formatSoftlaceAside(5)).toContain("5");
    expect(formatSoftlaceEncourage(0)).toMatch(/梭|枕|花|边|空|隙|编/);
    expect(formatSoftlacePair(1, 10)).toMatch(/梭|枕|花|线|编/);
  });
});
