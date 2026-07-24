import { describe, expect, it } from "vitest";
import {
  formatSoftClothTapeLine,
  formatTapeWoodClipLine,
  formatSofttapeAside,
  formatSofttapeEncourage,
  formatSofttapePair,
} from "../src/core/softtape-label";

describe("softtape-label", () => {
  it("formats soft cloth tape, wood clip, aside, encourage and pair", () => {
    expect(formatSoftClothTapeLine(1).length).toBeGreaterThan(4);
    expect(formatSoftClothTapeLine(2)).toMatch(/尺|软|量|寸|勒|紧/);
    expect(formatTapeWoodClipLine(0)).toMatch(/夹|松|温存|端|木/);
    expect(formatTapeWoodClipLine(15)).toMatch(/尺|夹|店|温|量|扣|记/);
    expect(formatSofttapeAside(0)).toMatch(/尺|卷|流通|寸|量|合/);
    expect(formatSofttapeAside(5)).toContain("5");
    expect(formatSofttapeEncourage(0)).toMatch(/卷|尺|夹|合|适|量/);
    expect(formatSofttapePair(1, 10)).toMatch(/尺|夹|卷|布|木/);
  });
});
