import { describe, expect, it } from "vitest";
import {
  formatBeadingNeedleLine,
  formatSeedBeadsLine,
  formatSoftbeadAside,
  formatSoftbeadEncourage,
  formatSoftbeadPair,
} from "../src/core/softbead-label";

describe("softbead-label", () => {
  it("五函数按阈值分支且非空", () => {
    expect(formatBeadingNeedleLine(1).length).toBeGreaterThan(4);
    expect(formatBeadingNeedleLine(2)).toMatch(/针|细|串|颗|赶|工/);
    expect(formatSeedBeadsLine(0)).toMatch(/米|珠|散|温存|拣|颗/);
    expect(formatSeedBeadsLine(15)).toMatch(/珠|线|店|散|串|软/);
    expect(formatSoftbeadAside(0)).toMatch(/针|空|流通|串|光/);
    expect(formatSoftbeadAside(12)).toMatch(/12|串|许|可|温柔/);
    expect(formatSoftbeadAside(30)).toMatch(/30|逾|轻串|珠/);
    expect(formatSoftbeadEncourage(0)).toMatch(/串珠|米珠|散|落|串/);
    expect(formatSoftbeadEncourage(2)).toMatch(/针|珠|串|流通|成/);
    expect(formatSoftbeadEncourage(5)).toMatch(/珠|收|串|松|腕/);
    const pair = formatSoftbeadPair(3, 20);
    expect(pair).toContain(formatBeadingNeedleLine(3));
    expect(pair).toContain(formatSeedBeadsLine(20));
  });
});
