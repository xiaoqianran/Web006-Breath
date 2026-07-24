import { describe, it, expect } from "vitest";
import { SAMPLE_EMOTIONS, freshDayQueue } from "../src/data/emotions";
import {
  createGameState,
  runFullCirculation,
  EMOTION_TAG_LIST,
  assertEmotionTags,
  isEmotionTag,
} from "../src/core";


describe("emotion content", () => {
  it("样本情绪不少于 12 条且字段完整", () => {
    expect(SAMPLE_EMOTIONS.length).toBeGreaterThanOrEqual(144);
    for (const e of SAMPLE_EMOTIONS) {
      expect(e.id).toBeTruthy();
      expect(e.text.length).toBeGreaterThan(4);
      expect(e.tags.length).toBeGreaterThanOrEqual(1);
      expect(e.intensity).toBeGreaterThanOrEqual(1);
      expect(e.intensity).toBeLessThanOrEqual(5);
      expect(e.guestName).toBeTruthy();
      expect(assertEmotionTags(e.tags), e.id).toBe(true);
      for (const tag of e.tags) {
        expect(isEmotionTag(tag), tag).toBe(true);
      }
    }
    const ids = SAMPLE_EMOTIONS.map((e) => e.id);
    expect(new Set(ids).size).toBe(ids.length);
    expect(EMOTION_TAG_LIST.length).toBe(10);
  });

  it("freshDayQueue 返回去重 id 的可玩队列", () => {
    const q1 = freshDayQueue(1);
    const q2 = freshDayQueue(2);
    expect(q1.length).toBe(4);
    expect(new Set(q1.map((e) => e.id)).size).toBe(4);
    // 不同日应产生不同 id 后缀
    expect(q1[0]!.id).not.toBe(q2[0]!.id);
  });

  it("样本队列可被核心循环消化", () => {
    let state = createGameState(freshDayQueue(1), {
      dayGoalCirculations: 99,
      dayGoalWarmth: 999,
    });
    state = runFullCirculation(state, "object", "display");
    expect(state.history).toHaveLength(1);
    expect(state.warmth).toBeGreaterThan(0);
  });
});
