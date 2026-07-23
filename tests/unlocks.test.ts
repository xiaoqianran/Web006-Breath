import { describe, it, expect } from "vitest";
import {
  createGameState,
  runFullCirculation,
  continueAfterResult,
  listEarnedUnlocks,
  isUnlockEarned,
  UNLOCKS,
  vesselAffinityLines,
  type Emotion,
} from "../src/core";

const e: Emotion = {
  id: "u1",
  guestName: "解锁客",
  text: "想被温柔记得。",
  tags: ["想念", "温柔"],
  intensity: 5,
};

describe("unlocks", () => {
  it("初始无解锁", () => {
    const state = createGameState([e]);
    expect(listEarnedUnlocks(state)).toHaveLength(0);
  });

  it("流通与口碑提升后解锁心耳微启", () => {
    let state = createGameState(
      [e, { ...e, id: "u2" }, { ...e, id: "u3" }],
      { dayGoalCirculations: 99, dayGoalWarmth: 999 },
    );
    state = runFullCirculation(state, "flower", "gift");
    state = continueAfterResult(state);
    state = runFullCirculation(state, "flower", "display");
    const hint = UNLOCKS.find((u) => u.id === "hint_mastery")!;
    expect(isUnlockEarned(state, hint)).toBe(true);
    expect(listEarnedUnlocks(state).map((u) => u.id)).toContain("hint_mastery");
  });

  it("形态图鉴五行齐全", () => {
    expect(vesselAffinityLines()).toHaveLength(5);
  });

  it("累计 5 次赠予解锁赠予之心", () => {
    const guests = Array.from({ length: 5 }, (_, i) => ({
      id: `g${i}`,
      guestName: "赠",
      text: "请收下。",
      tags: ["温柔" as const],
      intensity: 3,
    }));
    let state = createGameState(guests, { dayGoalCirculations: 99, dayGoalWarmth: 999 });
    for (let i = 0; i < 5; i++) {
      state = runFullCirculation(state, "object", "gift");
      if (state.phase === "result") state = continueAfterResult(state);
    }
    const heart = UNLOCKS.find((u) => u.id === "gift_heart")!;
    expect(isUnlockEarned(state, heart)).toBe(true);
  });
});

