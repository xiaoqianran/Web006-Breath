import { describe, expect, it } from "vitest";
import {
  formatMemoryWireLine,
  formatFlushCutterLine,
  formatSoftmemoryAside,
  formatSoftmemoryEncourage,
  formatSoftmemoryPair,
} from "../src/core/softmemory-label";

describe("softmemory-label", () => {
  it("五函数按阈值分支且非空", () => {
    expect(formatMemoryWireLine(1).length).toBeGreaterThan(4);
    expect(formatMemoryWireLine(2)).toMatch(/丝|韧|记|点|硬|绷/);
    expect(formatFlushCutterLine(0)).toMatch(/剪线|钳|合|温存|剪/);
    expect(formatFlushCutterLine(15)).toMatch(/钳|丝|店|多|剪|净/);
    expect(formatSoftmemoryAside(0)).toMatch(/丝|新|流通|记|形/);
    expect(formatSoftmemoryAside(12)).toMatch(/12|记|许|可|温柔/);
    expect(formatSoftmemoryAside(30)).toMatch(/30|逾|轻记|弧/);
    expect(formatSoftmemoryEncourage(0)).toMatch(/记忆|丝|剪线|钳|记/);
    expect(formatSoftmemoryEncourage(2)).toMatch(/丝|剪|记|流通|形/);
    expect(formatSoftmemoryEncourage(5)).toMatch(/钳|合|记|松|肩/);
    const pair = formatSoftmemoryPair(3, 20);
    expect(pair).toContain(formatMemoryWireLine(3));
    expect(pair).toContain(formatFlushCutterLine(20));
  });
});
