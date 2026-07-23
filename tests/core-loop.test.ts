import { describe, it, expect } from "vitest";
import {
  acceptNextEmotion,
  chooseVessel,
  circulate,
  continueAfterResult,
  createGameState,
  evaluateMatch,
  runFullCirculation,
  type Emotion,
} from "../src/core";

const sample: Emotion[] = [
  {
    id: "t1",
    guestName: "测试客",
    text: "想被轻轻记得。",
    tags: ["想念", "温柔"],
    intensity: 5,
  },
  {
    id: "t2",
    guestName: "乙",
    text: "好累，只想喝一口热水。",
    tags: ["疲惫", "安心"],
    intensity: 3,
  },
  {
    id: "t3",
    guestName: "丙",
    text: "说不出口的遗憾。",
    tags: ["遗憾", "孤独"],
    intensity: 4,
  },
];

describe("evaluateMatch", () => {
  it("高匹配花形态应得到 rare 或 fine 并给出正流通价值", () => {
    const emotion = sample[0]!;
    const result = evaluateMatch(emotion, "flower");
    // 想念+温柔 均在 flower 擅长 → 4 分 + 强度加成 1 = 5 → rare
    expect(result.matchedTags).toEqual(expect.arrayContaining(["想念", "温柔"]));
    expect(result.matchScore).toBeGreaterThanOrEqual(4);
    expect(result.quality).toBe("rare");
    expect(result.circulationValue).toBe(1 + result.matchScore + 3);
  });

  it("错配形态匹配分应低于正配", () => {
    const emotion = sample[0]!;
    const good = evaluateMatch(emotion, "flower");
    const bad = evaluateMatch(emotion, "tea");
    expect(good.matchScore).toBeGreaterThan(bad.matchScore);
  });
});

describe("core circulation loop", () => {
  it("完整路径：接待→转化→流通，温存与历史更新", () => {
    let state = createGameState(sample, { dayGoalCirculations: 10, dayGoalWarmth: 100 });
    expect(state.phase).toBe("awaiting_emotion");

    state = acceptNextEmotion(state);
    expect(state.phase).toBe("awaiting_vessel");
    expect(state.current?.id).toBe("t1");
    expect(state.queue).toHaveLength(2);

    state = chooseVessel(state, "flower");
    expect(state.phase).toBe("awaiting_circulation");
    expect(state.crafted).not.toBeNull();
    expect(state.crafted!.vessel).toBe("flower");
    expect(state.crafted!.quality).toBe("rare");

    const warmthBefore = state.warmth;
    state = circulate(state, "gift");
    expect(state.phase).toBe("result");
    expect(state.circulationsToday).toBe(1);
    expect(state.warmth).toBeGreaterThan(warmthBefore);
    expect(state.history).toHaveLength(1);
    expect(state.lastResult?.action).toBe("gift");
    expect(state.lastResult?.momentCard).toContain("测试客");
    expect(state.current).toBeNull();
    expect(state.crafted).toBeNull();
  });

  it("非法阶段选择形态不应推进", () => {
    const state = createGameState(sample);
    const next = chooseVessel(state, "tea");
    expect(next.phase).toBe("awaiting_emotion");
    expect(next.crafted).toBeNull();
  });

  it("runFullCirculation 可连续完成多笔流通", () => {
    let state = createGameState(sample, { dayGoalCirculations: 99, dayGoalWarmth: 999 });
    state = runFullCirculation(state, "flower", "display");
    state = continueAfterResult(state);
    state = runFullCirculation(state, "tea", "gift");
    expect(state.circulationsToday).toBe(2);
    expect(state.history).toHaveLength(2);
    expect(state.warmth).toBeGreaterThan(0);
  });

  it("达到日目标且队列空时进入 day_complete", () => {
    const one: Emotion[] = [sample[0]!];
    let state = createGameState(one, { dayGoalCirculations: 1, dayGoalWarmth: 999 });
    state = runFullCirculation(state, "flower", "display");
    expect(state.phase).toBe("day_complete");
    expect(state.circulationsToday).toBe(1);
  });

  it("赠予比上架多 1 点温存", () => {
    // 关闭委托履约，避免订单奖励干扰基础温存差
    const mk = () => {
      const s = createGameState([sample[1]!], { dayGoalCirculations: 99, dayGoalWarmth: 999 });
      return { ...s, activeOrder: null };
    };
    const base = mk();
    const display = runFullCirculation(mk(), "tea", "display");
    const gift = runFullCirculation(mk(), "tea", "gift");
    expect(gift.warmth).toBe(display.warmth + 1);
    expect(base.warmth).toBe(0);
  });
});
