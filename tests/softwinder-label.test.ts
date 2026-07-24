import { describe, expect, it } from "vitest";
import {
  formatBallWinderLine,
  formatYarnSwiftLine,
  formatSoftwinderAside,
  formatSoftwinderEncourage,
  formatSoftwinderPair,
} from "../src/core/softwinder-label";

describe("softwinder-label", () => {
  it("五函数按阈值分支且非空", () => {
    expect(formatBallWinderLine(1).length).toBeGreaterThan(4);
    expect(formatBallWinderLine(2)).toMatch(/器|稳|绕|圈|赶|工/);
    expect(formatYarnSwiftLine(0)).toMatch(/纱|架|收|温存|张|臂/);
    expect(formatYarnSwiftLine(15)).toMatch(/纱|架|店|散|乱|有|序|绕/);
    expect(formatSoftwinderAside(0)).toMatch(/器|空|流通|绕|形/);
    expect(formatSoftwinderAside(12)).toMatch(/12|绕|许|可|温柔/);
    expect(formatSoftwinderAside(30)).toMatch(/30|逾|轻绕|纱/);
    expect(formatSoftwinderEncourage(0)).toMatch(/绕线|纱架|散|乱|绕/);
    expect(formatSoftwinderEncourage(2)).toMatch(/器|架|绕|流通|整/);
    expect(formatSoftwinderEncourage(5)).toMatch(/架|收|绕|松|肩/);
    const pair = formatSoftwinderPair(3, 20);
    expect(pair).toContain(formatBallWinderLine(3));
    expect(pair).toContain(formatYarnSwiftLine(20));
  });
});
