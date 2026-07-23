import { describe, it, expect } from "vitest";
import {
  createGameState,
  runFullCirculation,
  dayGoalProgress,
  formatDayGoalLine,
  type Emotion,
} from "../src/core";

const e: Emotion = {
  id: "dg1",
  guestName: "目标客",
  text: "今天也想完成一点点。",
  tags: ["期待", "温柔"],
  intensity: 3,
};

describe("dayGoalProgress", () => {
  it("初始未达标", () => {
    const state = createGameState([e], { dayGoalCirculations: 3, dayGoalWarmth: 10 });
    const p = dayGoalProgress(state);
    expect(p.eitherMet).toBe(false);
    expect(p.bestRatio).toBe(0);
    expect(formatDayGoalLine(p)).toContain("流通 0/3");
  });

  it("流通达目标后 eitherMet", () => {
    let state = createGameState(
      [e, { ...e, id: "dg2" }, { ...e, id: "dg3" }],
      { dayGoalCirculations: 1, dayGoalWarmth: 999 },
    );
    state = runFullCirculation(state, "flower", "gift");
    const p = dayGoalProgress(state);
    expect(p.circulationsMet).toBe(true);
    expect(p.eitherMet).toBe(true);
    expect(p.bestRatio).toBe(1);
  });
});
