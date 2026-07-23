import { describe, it, expect } from "vitest";
import {
  DAY_SCRIPTS,
  getDayScript,
  queueFromDayScript,
} from "../src/data/day-scripts";
import { goalsForDay, describeDayOpener } from "../src/data/emotions";
import { createGameState, runFullCirculation } from "../src/core";

describe("day scripts", () => {
  it("定义至少 10 日剧本", () => {
    expect(DAY_SCRIPTS.length).toBeGreaterThanOrEqual(10);
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

  it("超出 5 日仍可生成脚本", () => {
    const d = getDayScript(9);
    expect(d.day).toBe(9);
    expect(describeDayOpener(9)).toContain("第 9 日");
  });
});
