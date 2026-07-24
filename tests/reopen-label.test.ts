import { describe, it, expect } from "vitest";
import {
  formatMorningClothLine,
  formatSillVaseLine,
  formatReopenAside,
  formatReopenEncourage,
  formatReopenPair,
} from "../src/core";

describe("reopen-label", () => {
  it("晨间抹布与窗台小瓶文案", () => {
    expect(formatMorningClothLine(1).length).toBeGreaterThan(4);
    expect(formatMorningClothLine(2)).toMatch(/抹|擦|软|尘|温/);
    expect(formatSillVaseLine(0)).toMatch(/瓶|空|温存|枝/);
    expect(formatSillVaseLine(20)).toMatch(/瓶|温|静|醒|店|街/);
    expect(formatReopenAside(0)).toMatch(/抹|叠|流通|开/);
    expect(formatReopenAside(5)).toContain("5");
    expect(formatReopenEncourage(0)).toMatch(/抹布|小瓶|醒|店/);
    expect(formatReopenPair(1, 10)).toMatch(/抹|瓶/);
  });
});
