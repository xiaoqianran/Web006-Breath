import { describe, expect, it } from "vitest";
import {
  formatBrassDeskBellLine,
  formatFeltMalletLine,
  formatDeskbellAside,
  formatDeskbellEncourage,
  formatDeskbellPair,
} from "../src/core/deskbell-label";

describe("deskbell-label", () => {
  it("formats brass desk bell, felt mallet, aside, encourage and pair", () => {
    expect(formatBrassDeskBellLine(1).length).toBeGreaterThan(4);
    expect(formatBrassDeskBellLine(2)).toMatch(/铃|轻|报|声|催|人/);
    expect(formatFeltMalletLine(0)).toMatch(/槌|搁|温存|敲|毡/);
    expect(formatFeltMalletLine(15)).toMatch(/毡|槌|铃|店|温|客|罩/);
    expect(formatDeskbellAside(0)).toMatch(/铃|静|流通|声|报|到/);
    expect(formatDeskbellAside(5)).toContain("5");
    expect(formatDeskbellEncourage(0)).toMatch(/黄|铜|铃|槌|报|到/);
    expect(formatDeskbellPair(1, 10)).toMatch(/铃|槌|铜|毡/);
  });
});
