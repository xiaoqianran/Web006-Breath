import { describe, it, expect } from "vitest";
import {
  createGameState,
  runFullCirculation,
  dayGoalProgress,
  formatDayGoalLine,
  dayGoalRemaining,
  formatDayGoalEncourage,
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
    expect(dayGoalRemaining(p).status).toBe("done");
    expect(formatDayGoalEncourage(p)).toContain("已达成");
  });

  it("剩余与鼓励文案随进度变化", () => {
    const state = createGameState([e], { dayGoalCirculations: 4, dayGoalWarmth: 20 });
    const p0 = dayGoalProgress(state);
    expect(dayGoalRemaining(p0).circulationsLeft).toBe(4);
    expect(dayGoalRemaining(p0).status).toBe("early");
    expect(formatDayGoalEncourage(p0)).toContain("新的一天");

    // 人为推进到 mid
    const mid = dayGoalProgress({
      ...state,
      circulationsToday: 2,
      warmth: 2,
    });
    expect(dayGoalRemaining(mid).status).toBe("mid");
    expect(formatDayGoalEncourage(mid)).toContain("过半");

    const close = dayGoalProgress({
      ...state,
      circulationsToday: 3,
      warmth: 2,
    });
    expect(dayGoalRemaining(close).status).toBe("close");
    expect(formatDayGoalEncourage(close)).toContain("差一点");
  });
});
