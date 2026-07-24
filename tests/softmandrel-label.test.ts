import { describe, expect, it } from "vitest";
import {
  formatRingMandrelLine,
  formatRingSizerLine,
  formatSoftmandrelAside,
  formatSoftmandrelEncourage,
  formatSoftmandrelPair,
} from "../src/core/softmandrel-label";

describe("softmandrel-label", () => {
  it("五函数按阈值分支且非空", () => {
    expect(formatRingMandrelLine(1).length).toBeGreaterThan(4);
    expect(formatRingMandrelLine(2)).toMatch(/棒|匀|量|圈|定|论/);
    expect(formatRingSizerLine(0)).toMatch(/指|圈|尺|齐|温存|试|号/);
    expect(formatRingSizerLine(15)).toMatch(/圈|指|店|合|适|量|温/);
    expect(formatSoftmandrelAside(0)).toMatch(/棒|空|流通|量|痕/);
    expect(formatSoftmandrelAside(12)).toMatch(/12|量|许|可|温柔/);
    expect(formatSoftmandrelAside(30)).toMatch(/30|逾|轻量|号/);
    expect(formatSoftmandrelEncourage(0)).toMatch(/戒指|棒|指圈|尺|合|适|量/);
    expect(formatSoftmandrelEncourage(2)).toMatch(/棒|圈|量|流通|确/);
    expect(formatSoftmandrelEncourage(5)).toMatch(/尺|收|量|松|腕/);
    const pair = formatSoftmandrelPair(3, 20);
    expect(pair).toContain(formatRingMandrelLine(3));
    expect(pair).toContain(formatRingSizerLine(20));
  });
});
