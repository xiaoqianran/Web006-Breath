import { describe, expect, it } from "vitest";
import {
  formatFoldUmbrellaLine,
  formatCeramicUmStandLine,
  formatFoldumbAside,
  formatFoldumbEncourage,
  formatFoldumbPair,
} from "../src/core/foldumb-label";

describe("foldumb-label", () => {
  it("formats fold umbrella, ceramic stand, aside, encourage and pair", () => {
    expect(formatFoldUmbrellaLine(1).length).toBeGreaterThan(4);
    expect(formatFoldUmbrellaLine(2)).toMatch(/伞|轻|遮|阵|扛|重/);
    expect(formatCeramicUmStandLine(0)).toMatch(/筒|空|温存|插|瓷|伞/);
    expect(formatCeramicUmStandLine(15)).toMatch(/伞|筒|店|温|雨|门|插/);
    expect(formatFoldumbAside(0)).toMatch(/伞|合|流通|湿|收/);
    expect(formatFoldumbAside(5)).toContain("5");
    expect(formatFoldumbEncourage(0)).toMatch(/折|叠|伞|筒|湿|收/);
    expect(formatFoldumbPair(1, 10)).toMatch(/伞|筒|折|瓷/);
  });
});
