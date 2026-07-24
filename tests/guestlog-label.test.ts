import { describe, it, expect } from "vitest";
import {
  formatGuestLogLine,
  formatSoftEraserLine,
  formatGuestlogAside,
  formatGuestlogEncourage,
  formatGuestlogPair,
} from "../src/core";

describe("guestlog-label", () => {
  it("访客签到本与软橡皮文案", () => {
    expect(formatGuestLogLine(1).length).toBeGreaterThan(4);
    expect(formatGuestLogLine(2)).toMatch(/本|记|来|薄/);
    expect(formatSoftEraserLine(0)).toMatch(/橡皮|新|温存|擦/);
    expect(formatSoftEraserLine(20)).toMatch(/擦|温|轻|纸|改|橡皮|写|角|关/);
    expect(formatGuestlogAside(0)).toMatch(/本|空白|流通|名字/);
    expect(formatGuestlogAside(5)).toContain("5");
    expect(formatGuestlogEncourage(0)).toMatch(/签到|橡皮|笔/);
    expect(formatGuestlogPair(1, 10)).toMatch(/签到|本|橡皮/);
  });
});
