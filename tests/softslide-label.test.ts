import { describe, expect, it } from "vitest";
import {
  formatSoftSlideLine,
  formatSlideRestLine,
  formatSoftslideAside,
  formatSoftslideEncourage,
  formatSoftslidePair,
} from "../src/core/softslide-label";

describe("softslide-label", () => {
  it("五函数按阈值分支且非空", () => {
    expect(formatSoftSlideLine(1).length).toBeGreaterThan(4);
    expect(formatSoftSlideLine(2)).toMatch(/簪|细|定|点|硬|顶/);
    expect(formatSlideRestLine(0)).toMatch(/滑座|空|温存|搁/);
    expect(formatSlideRestLine(15)).toMatch(/座|簪|店|散|定|安/);
    expect(formatSoftslideAside(0)).toMatch(/簪|齐|流通|定|光/);
    expect(formatSoftslideAside(12)).toMatch(/12|插|许|可|温柔/);
    expect(formatSoftslideAside(30)).toMatch(/30|逾|轻插|光/);
    expect(formatSoftslideEncourage(0)).toMatch(/发簪|滑座|定/);
    expect(formatSoftslideEncourage(2)).toMatch(/簪|座|插|流通|定/);
    expect(formatSoftslideEncourage(5)).toMatch(/簪|抽|肩/);
    const pair = formatSoftslidePair(3, 20);
    expect(pair).toContain(formatSoftSlideLine(3));
    expect(pair).toContain(formatSlideRestLine(20));
  });
});
