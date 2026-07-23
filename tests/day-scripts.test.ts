import { describe, it, expect } from "vitest";
import {
  DAY_SCRIPTS,
  getDayScript,
  queueFromDayScript,
} from "../src/data/day-scripts";
import { goalsForDay, describeDayOpener } from "../src/data/emotions";
import { createGameState, runFullCirculation } from "../src/core";

describe("day scripts", () => {
  it("定义至少 20 日剧本", () => {
    expect(DAY_SCRIPTS.length).toBeGreaterThanOrEqual(20);
    for (const d of DAY_SCRIPTS) {
      expect(d.sampleIndexes.length).toBeGreaterThanOrEqual(3);
      expect(d.goalCirculations).toBeGreaterThan(0);
    }
  });

  it("queueFromDayScript 可被核心循环消化", () => {
    const q = queueFromDayScript(1);
    expect(q.length).toBeGreaterThanOrEqual(4);
    let state = createGameState(q, goalsForDay(1));
    state = runFullCirculation(state, "flower", "gift");
    expect(state.history).toHaveLength(1);
  });

  it("第 9 日使用具名剧本开场", () => {
    const d = getDayScript(9);
    expect(d.day).toBe(9);
    expect(d.title).toBe("薄雾");
    expect(describeDayOpener(9)).toContain("第九日");
  });

  it("超出定义日仍可延展生成", () => {
    const d = getDayScript(12);
    expect(d.day).toBe(12);
    expect(describeDayOpener(12).length).toBeGreaterThan(4);
  });

  it("第 18 日具名剧本", () => {
    const d = getDayScript(18);
    expect(d.day).toBe(18);
    expect(d.title).toBe("十八的窗口");
    expect(describeDayOpener(18)).toContain("第十八日");
    const q = queueFromDayScript(18);
    expect(q.length).toBeGreaterThanOrEqual(4);
  });

  it("第 20 日具名剧本", () => {
    const d = getDayScript(20);
    expect(d.day).toBe(20);
    expect(d.title).toBe("二十的铃");
    expect(describeDayOpener(20)).toContain("第二十日");
  });
});

