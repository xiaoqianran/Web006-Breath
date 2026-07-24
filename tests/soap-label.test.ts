import { describe, it, expect } from "vitest";
import {
  formatHandSoapLine,
  formatSoftTowelLine,
  formatSoapAside,
  formatSoapEncourage,
  formatSoapPair,
} from "../src/core";

describe("soap-label", () => {
  it("洗手皂与软毛巾文案", () => {
    expect(formatHandSoapLine(1).length).toBeGreaterThan(4);
    expect(formatHandSoapLine(2)).toMatch(/皂|湿|洗/);
    expect(formatSoftTowelLine(0)).toMatch(/毛巾|温存|叠/);
    expect(formatSoftTowelLine(20)).toMatch(/毛巾|温|擦|接/);
    expect(formatSoapAside(0)).toMatch(/洗手|干净/);
    expect(formatSoapEncourage(0)).toMatch(/静|毛巾|门铃/);
    expect(formatSoapEncourage(2)).toContain("2");
    expect(formatSoapPair(1, 10)).toMatch(/皂|毛巾|手/);
  });
});
