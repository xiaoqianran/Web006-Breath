import { describe, it, expect } from "vitest";
import {
  buildRevisitGuest,
  maybeAppendRevisit,
  createGameState,
  runFullCirculation,
  type Emotion,
} from "../src/core";

const e: Emotion = {
  id: "rv1",
  guestName: "阿初",
  text: "有句话还没说完。",
  tags: ["想念", "遗憾"],
  intensity: 4,
};

describe("revisit", () => {
  it("从流通记录构建再访客人", () => {
    let state = createGameState([e], { dayGoalCirculations: 99, dayGoalWarmth: 999 });
    state = runFullCirculation(state, "flower", "gift");
    const guest = buildRevisitGuest(state.history[0]!);
    expect(guest.guestName).toBe("阿初");
    expect(guest.text).toContain("带着");
    expect(guest.id).toContain("revisit_");
  });

  it("偶数日且有赠予历史时追加再访", () => {
    let state = createGameState([e], { dayGoalCirculations: 99, dayGoalWarmth: 999 });
    state = runFullCirculation(state, "flower", "gift");
    state = { ...state, day: 2 };
    const q = maybeAppendRevisit(state, []);
    expect(q).toHaveLength(1);
    expect(q[0]!.id.startsWith("revisit_")).toBe(true);
  });

  it("奇数日不追加", () => {
    let state = createGameState([e], { dayGoalCirculations: 99, dayGoalWarmth: 999 });
    state = runFullCirculation(state, "flower", "gift");
    state = { ...state, day: 1 };
    expect(maybeAppendRevisit(state, [])).toHaveLength(0);
  });
});
