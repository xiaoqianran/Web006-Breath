import { describe, it, expect } from "vitest";
import {
  formatStickyPadLine,
  formatFinePenLine,
  formatNotepenAside,
  formatNotepenEncourage,
  formatNotepenPair,
} from "../src/core";

describe("notepen-label", () => {
  it("便签本与细钢笔文案", () => {
    expect(formatStickyPadLine(1).length).toBeGreaterThan(4);
    expect(formatStickyPadLine(2)).toMatch(/本|记|句|薄/);
    expect(formatFinePenLine(0)).toMatch(/笔|盖|温存|划/);
    expect(formatFinePenLine(20)).toMatch(/笔|温|细|写|页|句|行/);
    expect(formatNotepenAside(0)).toMatch(/便签|撕|流通|记/);
    expect(formatNotepenAside(5)).toContain("5");
    expect(formatNotepenEncourage(0)).toMatch(/便签|细笔|写|句/);
    expect(formatNotepenPair(1, 10)).toMatch(/便签|笔|本/);
  });
});
