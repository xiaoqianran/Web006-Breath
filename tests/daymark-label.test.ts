import { describe, it, expect } from "vitest";
import {
  formatDeskCalendarLine,
  formatTodayStickerLine,
  formatDaymarkAside,
  formatDaymarkEncourage,
  formatDaymarkPair,
} from "../src/core";

describe("daymark-label", () => {
  it("台历夹与今日贴纸文案", () => {
    expect(formatDeskCalendarLine(1).length).toBeGreaterThan(4);
    expect(formatDeskCalendarLine(2)).toMatch(/夹|今|轻|心|固/);
    expect(formatTodayStickerLine(0)).toMatch(/贴|卷|温存|枚/);
    expect(formatTodayStickerLine(20)).toMatch(/贴|温|轻|今|明|空|圈/);
    expect(formatDaymarkAside(0)).toMatch(/台历|空白|流通|标记|日/);
    expect(formatDaymarkAside(5)).toContain("5");
    expect(formatDaymarkEncourage(0)).toMatch(/台历|贴纸|今日/);
    expect(formatDaymarkPair(1, 10)).toMatch(/台历|贴|夹/);
  });
});
