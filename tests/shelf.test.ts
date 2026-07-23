import { describe, it, expect } from "vitest";
import {
  createGameState,
  runFullCirculation,
  sellFromShelf,
  type Emotion,
} from "../src/core";

const e: Emotion = {
  id: "sh1",
  guestName: "货架客",
  text: "想被放在明亮的地方。",
  tags: ["期待", "温柔"],
  intensity: 3,
};

describe("shelf", () => {
  it("上架进入货架，赠予不进入", () => {
    let display = createGameState([e], { dayGoalCirculations: 99, dayGoalWarmth: 999 });
    display = runFullCirculation(display, "object", "display");
    expect(display.shelf).toHaveLength(1);
    expect(display.shelf[0]!.crafted.vessel).toBe("object");

    let gift = createGameState([{ ...e, id: "sh2" }], {
      dayGoalCirculations: 99,
      dayGoalWarmth: 999,
    });
    gift = runFullCirculation(gift, "object", "gift");
    expect(gift.shelf).toHaveLength(0);
  });

  it("sellFromShelf 增加温存并移除", () => {
    let state = createGameState([e], { dayGoalCirculations: 99, dayGoalWarmth: 999 });
    state = runFullCirculation(state, "flower", "display");
    const before = state.warmth;
    state = sellFromShelf(state, 0);
    expect(state.shelf).toHaveLength(0);
    expect(state.warmth).toBeGreaterThan(before);
  });

  it("非法下标不改状态结构", () => {
    const state = createGameState([e]);
    const next = sellFromShelf(state, 3);
    expect(next.shelf).toHaveLength(0);
    expect(next.warmth).toBe(0);
  });
});
