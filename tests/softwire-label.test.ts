import { describe, expect, it } from "vitest";
import {
  formatBeadingWireLine,
  formatCrimpBeadLine,
  formatSoftwireAside,
  formatSoftwireEncourage,
  formatSoftwirePair,
} from "../src/core/softwire-label";

describe("softwire-label", () => {
  it("五函数按阈值分支且非空", () => {
    expect(formatBeadingWireLine(1).length).toBeGreaterThan(4);
    expect(formatBeadingWireLine(2)).toMatch(/线|韧|穿|截|硬|拽/);
    expect(formatCrimpBeadLine(0)).toMatch(/压|接|珠|散|温存|压|颗/);
    expect(formatCrimpBeadLine(15)).toMatch(/珠|线|店|端|温|固|定/);
    expect(formatSoftwireAside(0)).toMatch(/线|松|流通|压|结/);
    expect(formatSoftwireAside(12)).toMatch(/12|压|许|可|温柔/);
    expect(formatSoftwireAside(30)).toMatch(/30|逾|轻压|珠/);
    expect(formatSoftwireEncourage(0)).toMatch(/串珠|软线|压接|线|端|收/);
    expect(formatSoftwireEncourage(2)).toMatch(/线|珠|压|流通|收/);
    expect(formatSoftwireEncourage(5)).toMatch(/珠|收|压|松|腕/);
    const pair = formatSoftwirePair(3, 20);
    expect(pair).toContain(formatBeadingWireLine(3));
    expect(pair).toContain(formatCrimpBeadLine(20));
  });
});
