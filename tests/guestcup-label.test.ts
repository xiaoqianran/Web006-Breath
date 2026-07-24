import { describe, expect, it } from "vitest";
import {
  formatGuestCupLine,
  formatLinenCoasterLine,
  formatGuestcupAside,
  formatGuestcupEncourage,
  formatGuestcupPair,
} from "../src/core/guestcup-label";

describe("guestcup-label", () => {
  it("formats guest cup, linen coaster, aside, encourage and pair", () => {
    expect(formatGuestCupLine(1).length).toBeGreaterThan(4);
    expect(formatGuestCupLine(2)).toMatch(/茶|淡|润|口|烫|心/);
    expect(formatLinenCoasterLine(0)).toMatch(/垫|干|温存|水|亚麻|杯/);
    expect(formatLinenCoasterLine(15)).toMatch(/杯|垫|店|温|热|桌/);
    expect(formatGuestcupAside(0)).toMatch(/杯|空|流通|热|递/);
    expect(formatGuestcupAside(5)).toContain("5");
    expect(formatGuestcupEncourage(0)).toMatch(/瓷|杯|垫|热|递/);
    expect(formatGuestcupPair(1, 10)).toMatch(/杯|垫|瓷|亚麻|茶/);
  });
});
