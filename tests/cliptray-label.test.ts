import { describe, it, expect } from "vitest";
import {
  formatPaperClipLine,
  formatMiniTrayLine,
  formatCliptrayAside,
  formatCliptrayEncourage,
  formatCliptrayPair,
} from "../src/core";

describe("cliptray-label", () => {
  it("回形针与小托盘文案", () => {
    expect(formatPaperClipLine(1).length).toBeGreaterThan(4);
    expect(formatPaperClipLine(2)).toMatch(/夹|纸|轻|呼|拢/);
    expect(formatMiniTrayLine(0)).toMatch(/盘|空|温存|叠/);
    expect(formatMiniTrayLine(20)).toMatch(/盘|温|浅|盛|纸|空|页/);
    expect(formatCliptrayAside(0)).toMatch(/夹|盘|闲|流通|拢/);
    expect(formatCliptrayAside(5)).toContain("5");
    expect(formatCliptrayEncourage(0)).toMatch(/回形针|托盘|归拢|散/);
    expect(formatCliptrayPair(1, 10)).toMatch(/回形针|夹|盘/);
  });
});
