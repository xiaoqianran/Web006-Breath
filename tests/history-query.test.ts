import { describe, it, expect } from "vitest";
import {
  createGameState,
  runFullCirculation,
  continueAfterResult,
  countByVessel,
  countByQuality,
  lastCirculation,
  totalWarmthFromHistory,
  type Emotion,
} from "../src/core";

const e: Emotion = {
  id: "hq1",
  guestName: "查",
  text: "想被查询到。",
  tags: ["想念", "温柔"],
  intensity: 5,
};

describe("history-query", () => {
  it("统计 vessel/quality 与末条记录", () => {
    let state = createGameState(
      [e, { ...e, id: "hq2" }],
      { dayGoalCirculations: 99, dayGoalWarmth: 999 },
    );
    expect(lastCirculation(state)).toBeNull();
    state = runFullCirculation(state, "flower", "gift");
    expect(lastCirculation(state)?.action).toBe("gift");
    expect(countByVessel(state.history, "flower")).toBe(1);
    expect(countByQuality(state.history, "rare")).toBeGreaterThanOrEqual(1);
    const w = totalWarmthFromHistory(state.history);
    expect(w).toBe(state.history[0]!.warmthGained);
    state = continueAfterResult(state);
    state = runFullCirculation(state, "tea", "display");
    expect(countByVessel(state.history, "tea")).toBe(1);
    expect(totalWarmthFromHistory(state.history)).toBeGreaterThan(w);
  });
});
