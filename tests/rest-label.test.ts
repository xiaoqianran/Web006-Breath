import { describe, it, expect } from "vitest";
import {
  formatMintPotsLine,
  formatRestStoolLine,
  formatRestEncourage,
  formatHerbAside,
} from "../src/core";

describe("rest-label", () => {
  it("绿植与憩座文案", () => {
    expect(formatMintPotsLine(1).length).toBeGreaterThan(4);
    expect(formatMintPotsLine(2)).toMatch(/迷迭|薄荷|清醒/);
    expect(formatRestStoolLine(0)).toContain("空");
    expect(formatRestStoolLine(2)).toContain("2");
    expect(formatRestEncourage(0)).toContain("深呼吸");
    expect(formatHerbAside(0)).toContain("凉");
    expect(formatHerbAside(20)).toMatch(/暖|绿/);
  });
});
