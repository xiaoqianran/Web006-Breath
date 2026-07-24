import { describe, it, expect } from "vitest";
import {
  formatHerbBundleLine,
  formatHangTwineLine,
  formatHerbhangAside,
  formatHerbhangEncourage,
  formatHerbhangPair,
} from "../src/core";

describe("herbhang-label", () => {
  it("干草药束与挂绳文案", () => {
    expect(formatHerbBundleLine(1).length).toBeGreaterThan(4);
    expect(formatHerbBundleLine(2)).toMatch(/束|轻|季|急|记/);
    expect(formatHangTwineLine(0)).toMatch(/绳|松|温存|束|吊/);
    expect(formatHangTwineLine(20)).toMatch(/绳|温|轻|吊|叶|勒/);
    expect(formatHerbhangAside(0)).toMatch(/梁|空|流通|香|束/);
    expect(formatHerbhangAside(5)).toContain("5");
    expect(formatHerbhangEncourage(0)).toMatch(/草药|挂绳|束|吊/);
    expect(formatHerbhangPair(1, 10)).toMatch(/束|绳|草|药/);
  });
});
