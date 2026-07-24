import { describe, it, expect } from "vitest";
import {
  formatEyeletLine,
  formatEyeletPunchLine,
  formatEyeletAside,
  formatEyeletEncourage,
  formatEyeletPair,
} from "../src/core";

describe("eyelet-label", () => {
  it("气眼与打孔钳文案", () => {
    expect(formatEyeletLine(1).length).toBeGreaterThan(4);
    expect(formatEyeletLine(2)).toMatch(/气眼|扣|洞|绳/);
    expect(formatEyeletPunchLine(0)).toMatch(/钳|凉|温存|孔/);
    expect(formatEyeletPunchLine(20)).toMatch(/钳|温|孔|解|系/);
    expect(formatEyeletAside(0)).toMatch(/孔|串|洞/);
    expect(formatEyeletAside(5)).toContain("5");
    expect(formatEyeletEncourage(0)).toMatch(/气眼|孔|圆/);
    expect(formatEyeletPair(1, 10)).toMatch(/气眼|孔|钳/);
  });
});
