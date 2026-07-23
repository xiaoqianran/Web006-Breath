import { describe, it, expect } from "vitest";
import {
  createGameState,
  runFullCirculation,
  continueAfterResult,
  computeSessionStats,
  formatStatsSummary,
  type Emotion,
} from "../src/core";

const e: Emotion = {
  id: "stt1",
  guestName: "统计客",
  text: "想被数得清楚一点。",
  tags: ["想念", "温柔"],
  intensity: 5,
};

describe("session stats", () => {
  it("空局统计为零", () => {
    const s = computeSessionStats(createGameState([e]));
    expect(s.circulations).toBe(0);
    expect(s.avgMatch).toBe(0);
    expect(s.ordersFulfilled).toBe(0);
    expect(formatStatsSummary(s)).toContain("尚未");
  });

  it("流通后汇总赠予/上架与均匹配", () => {
    let state = createGameState(
      [e, { ...e, id: "stt2" }],
      { dayGoalCirculations: 99, dayGoalWarmth: 999 },
    );
    state = runFullCirculation(state, "flower", "gift");
    state = continueAfterResult(state);
    state = runFullCirculation(state, "flower", "display");
    const s = computeSessionStats(state);
    expect(s.circulations).toBe(2);
    expect(s.gifts).toBe(1);
    expect(s.displays).toBe(1);
    expect(s.byVessel.flower).toBe(2);
    expect(s.avgMatch).toBeGreaterThan(0);
    expect(formatStatsSummary(s)).toContain("流通 2");
  });

  it("统计含委托履约数", () => {
    let state = createGameState([e]);
    state = { ...state, ordersFulfilled: 2, activeOrder: null };
    const s = computeSessionStats(state);
    expect(s.ordersFulfilled).toBe(2);
    expect(formatStatsSummary(s)).toContain("委托");
  });
});
