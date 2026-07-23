import { describe, it, expect } from "vitest";
import {
  atmosphereForDay,
  formatAtmosphereLine,
  formatAtmosphereShort,
  formatAtmosphereClosing,
  formatAtmosphereCraftHint,
  formatDayHeaderLine,
} from "../src/core";

describe("day atmosphere", () => {
  it("按日轮转六种氛围", () => {
    const kinds = new Set(
      [1, 2, 3, 4, 5, 6].map((d) => atmosphereForDay(d).kind),
    );
    expect(kinds.size).toBe(6);
    expect(atmosphereForDay(7).kind).toBe(atmosphereForDay(1).kind);
  });

  it("文案非空且含标题", () => {
    expect(formatAtmosphereLine(1)).toContain("今日氛围");
    expect(formatAtmosphereShort(2).length).toBeGreaterThan(0);
    expect(formatAtmosphereClosing(2)).toContain("雨");
    expect(formatAtmosphereClosing(6)).toMatch(/夜|灯/);
    expect(formatAtmosphereCraftHint(2)).toMatch(/茶|物件/);
    expect(formatDayHeaderLine(1, "开张的午后")).toContain("开张的午后");
    expect(formatDayHeaderLine(1, "开张的午后")).toContain("晴窗");
  });
});
