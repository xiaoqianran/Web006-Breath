import { describe, it, expect } from "vitest";
import {
  createGameState,
  runFullCirculation,
  continueAfterResult,
  type Emotion,
} from "../src/core";

const good: Emotion = {
  id: "st1",
  guestName: "连心客",
  text: "温柔的想念。",
  tags: ["想念", "温柔"],
  intensity: 5,
};

const weak: Emotion = {
  id: "st2",
  guestName: "错配客",
  text: "累到说不出话。",
  tags: ["疲惫"],
  intensity: 1,
};

describe("quality streak", () => {
  it("连续精致/珍稀提供温存加成", () => {
    let state = createGameState(
      [
        good,
        { ...good, id: "st1b" },
        { ...good, id: "st1c" },
      ],
      { dayGoalCirculations: 99, dayGoalWarmth: 999 },
    );
    state = runFullCirculation(state, "flower", "display");
    const w1 = state.warmth;
    expect(state.qualityStreak).toBe(1);
    state = continueAfterResult(state);
    state = runFullCirculation(state, "flower", "display");
    // 第二次应有 streakBonus >= 1
    expect(state.qualityStreak).toBe(2);
    expect(state.warmth).toBeGreaterThan(w1 * 2 - 1);
    expect(state.message).toMatch(/连心|温存/);
  });

  it("素简品质清零连心", () => {
    let state = createGameState([good, weak], {
      dayGoalCirculations: 99,
      dayGoalWarmth: 999,
    });
    state = runFullCirculation(state, "flower", "display");
    expect(state.qualityStreak).toBe(1);
    state = continueAfterResult(state);
    // art 与 疲惫 低匹配 → simple
    state = runFullCirculation(state, "art", "display");
    expect(state.qualityStreak).toBe(0);
  });
});
