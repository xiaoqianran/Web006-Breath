import { describe, it, expect } from "vitest";
import {
  formatChangeDishLine,
  formatPalmKerchiefLine,
  formatFarewellAside,
  formatFarewellEncourage,
  formatFarewellPair,
} from "../src/core";

describe("farewell-label", () => {
  it("找零浅碟与掌心手帕文案", () => {
    expect(formatChangeDishLine(1).length).toBeGreaterThan(4);
    expect(formatChangeDishLine(2)).toMatch(/碟|温|余|浅/);
    expect(formatPalmKerchiefLine(0)).toMatch(/帕|叠|温存|递/);
    expect(formatPalmKerchiefLine(20)).toMatch(/帕|温|软|带|还|叮嘱|手/);
    expect(formatFarewellAside(0)).toMatch(/碟|空|流通|余温/);
    expect(formatFarewellAside(5)).toContain("5");
    expect(formatFarewellEncourage(0)).toMatch(/浅碟|手帕|余温/);
    expect(formatFarewellPair(1, 10)).toMatch(/碟|帕|手帕|浅/);
  });
});
