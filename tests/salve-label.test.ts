import { describe, it, expect } from "vitest";
import {
  formatSalveTinLine,
  formatBambooSpatulaLine,
  formatSalveAside,
  formatSalveEncourage,
  formatSalvePair,
} from "../src/core";

describe("salve-label", () => {
  it("软膏小盒与竹刮勺文案", () => {
    expect(formatSalveTinLine(1).length).toBeGreaterThan(4);
    expect(formatSalveTinLine(2)).toMatch(/盒|浅|量|教|装|指|抹/);
    expect(formatBambooSpatulaLine(0)).toMatch(/勺|净|温存|点|舀/);
    expect(formatBambooSpatulaLine(20)).toMatch(/勺|温|薄|舀|刮|膏/);
    expect(formatSalveAside(0)).toMatch(/盒|合|流通|润|抹/);
    expect(formatSalveAside(5)).toContain("5");
    expect(formatSalveEncourage(0)).toMatch(/软膏|竹勺|润|抹/);
    expect(formatSalvePair(1, 10)).toMatch(/膏|勺|盒|竹/);
  });
});
