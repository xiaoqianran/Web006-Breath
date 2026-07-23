import { describe, it, expect } from "vitest";
import {
  buildRevisitGuest,
  maybeAppendRevisit,
  evaluateRevisitEligibility,
  formatRevisitHint,
  REVISIT_FAVOR_THRESHOLD,
  createGameState,
  runFullCirculation,
  continueAfterResult,
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

  it("奇数日且好感不足时不追加", () => {
    let state = createGameState([e], { dayGoalCirculations: 99, dayGoalWarmth: 999 });
    state = runFullCirculation(state, "flower", "gift");
    state = { ...state, day: 1 };
    // 单次赠予 rare 好感约 4，阈值 5 则不触发
    const q = maybeAppendRevisit(state, []);
    // rare gift favor = 3+1=4 < 5，奇数日应为空
    expect(q).toHaveLength(0);
  });

  it("高好感时奇数日也可再访", () => {
    let state = createGameState(
      [e, { ...e, id: "rv2" }, { ...e, id: "rv3" }],
      { dayGoalCirculations: 99, dayGoalWarmth: 999 },
    );
    state = runFullCirculation(state, "flower", "gift");
    state = continueAfterResult(state);
    state = runFullCirculation(state, "flower", "gift");
    state = continueAfterResult(state);
    state = runFullCirculation(state, "flower", "gift");
    state = { ...state, day: 1 };
    const q = maybeAppendRevisit(state, []);
    expect(q.length).toBe(1);
  });

  it("再访资格评估与提示文案", () => {
    expect(REVISIT_FAVOR_THRESHOLD).toBe(5);
    let empty = createGameState([e]);
    const noGift = evaluateRevisitEligibility(empty);
    expect(noGift.allowed).toBe(false);
    expect(noGift.reason).toBe("no_gift");
    expect(formatRevisitHint(empty)).toContain("赠予");

    let state = createGameState([e], { dayGoalCirculations: 99, dayGoalWarmth: 999 });
    state = runFullCirculation(state, "flower", "gift");
    state = { ...state, day: 2 };
    const even = evaluateRevisitEligibility(state);
    expect(even.allowed).toBe(true);
    expect(even.reason).toBe("even_day");
    expect(formatRevisitHint(state).length).toBeGreaterThan(4);
  });
});


