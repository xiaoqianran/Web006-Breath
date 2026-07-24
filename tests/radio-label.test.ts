import { describe, it, expect } from "vitest";
import {
  formatRadioLine,
  formatNeedleLine,
  formatRadioAside,
  formatRadioEncourage,
  formatRadioPair,
} from "../src/core";

describe("radio-label", () => {
  it("软广播与唱针文案", () => {
    expect(formatRadioLine(1).length).toBeGreaterThan(4);
    expect(formatRadioLine(2)).toMatch(/电台|哼|心情/);
    expect(formatNeedleLine(0)).toMatch(/唱针|停/);
    expect(formatNeedleLine(20)).toMatch(/唱针|温存|旋律|回声/);
    expect(formatRadioAside(true)).toMatch(/音乐/);
    expect(formatRadioAside(false)).toMatch(/背景|呼吸/);
    expect(formatRadioEncourage(0)).toMatch(/音量|听/);
    expect(formatRadioPair(1, 10)).toMatch(/广播|收音机|唱针/);
  });
});
