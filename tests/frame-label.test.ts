import { describe, it, expect } from "vitest";
import {
  formatPictureFrameLine,
  formatHangingCordLine,
  formatFrameAside,
  formatFrameEncourage,
  formatFramePair,
} from "../src/core";

describe("frame-label", () => {
  it("画框与挂绳文案", () => {
    expect(formatPictureFrameLine(1).length).toBeGreaterThan(4);
    expect(formatPictureFrameLine(2)).toMatch(/框|空|墙|心情/);
    expect(formatHangingCordLine(0)).toMatch(/挂绳|卷|空/);
    expect(formatHangingCordLine(4)).toContain("4");
    expect(formatFrameAside(0)).toMatch(/凉|温存|框/);
    expect(formatFrameAside(20)).toMatch(/框|绳|温|墙/);
    expect(formatFrameEncourage(0)).toMatch(/挂绳|第一/);
    expect(formatFramePair(1, 2)).toMatch(/框|绳|挂/);
  });
});
