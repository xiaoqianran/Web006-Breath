import { describe, it, expect } from "vitest";
import {
  formatFabricClipLine,
  formatMarkingPenLine,
  formatClipAside,
  formatClipEncourage,
  formatClipPair,
} from "../src/core";

describe("clip-label", () => {
  it("布夹与划线笔文案", () => {
    expect(formatFabricClipLine(1).length).toBeGreaterThan(4);
    expect(formatFabricClipLine(2)).toMatch(/夹|绒|边/);
    expect(formatMarkingPenLine(0)).toMatch(/划线|盖|温存|虚线/);
    expect(formatMarkingPenLine(20)).toMatch(/笔|温|淡|改|线/);
    expect(formatClipAside(0)).toMatch(/夹|空|边/);
    expect(formatClipAside(4)).toContain("4");
    expect(formatClipEncourage(0)).toMatch(/夹|边|偏/);
    expect(formatClipPair(1, 10)).toMatch(/夹|笔|线/);
  });
});
