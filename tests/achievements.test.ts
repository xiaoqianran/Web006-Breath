import { describe, it, expect } from "vitest";
import {
  createGameState,
  runFullCirculation,
  continueAfterResult,
  newlyEarnedUnlocks,
  type Emotion,
} from "../src/core";

const e: Emotion = {
  id: "ac1",
  guestName: "成就客",
  text: "想被记得。",
  tags: ["想念", "温柔"],
  intensity: 5,
};

describe("newlyEarnedUnlocks", () => {
  it("流通后可能出现新解锁", () => {
    let state = createGameState(
      [e, { ...e, id: "ac2" }],
      { dayGoalCirculations: 99, dayGoalWarmth: 999 },
    );
    const prev = state;
    state = runFullCirculation(state, "flower", "gift");
    state = continueAfterResult(state);
    state = runFullCirculation(state, "flower", "display");
    const gained = newlyEarnedUnlocks(prev, state);
    expect(gained.some((u) => u.id === "hint_mastery")).toBe(true);
  });

  it("无变化时返回空", () => {
    const state = createGameState([e]);
    expect(newlyEarnedUnlocks(state, state)).toHaveLength(0);
  });
});
