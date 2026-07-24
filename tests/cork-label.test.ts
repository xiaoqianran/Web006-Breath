import { describe, it, expect } from "vitest";
import {
  formatCorkBoardLine,
  formatPushPinLine,
  formatCorkAside,
  formatCorkEncourage,
  formatCorkPair,
} from "../src/core";

describe("cork-label", () => {
  it("软木板与图钉文案", () => {
    expect(formatCorkBoardLine(1).length).toBeGreaterThan(4);
    expect(formatCorkBoardLine(2)).toMatch(/板|钉|话|季/);
    expect(formatPushPinLine(0)).toMatch(/图钉|满|笺/);
    expect(formatPushPinLine(5)).toContain("5");
    expect(formatCorkAside(0)).toMatch(/凉|温存|钉/);
    expect(formatCorkAside(20)).toMatch(/软木|温|钉|拔|释/);
    expect(formatCorkEncourage(0)).toMatch(/图钉|钉/);
    expect(formatCorkPair(1, 2)).toMatch(/软木|板|钉/);
  });
});
