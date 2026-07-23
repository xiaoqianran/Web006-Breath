import { describe, it, expect } from "vitest";
import {
  createGameState,
  runFullCirculation,
  rollShopEvent,
  applyShopEvent,
  formatShopEventLine,
  formatShopEventReward,
  type Emotion,
  type GameState,
} from "../src/core";

const e: Emotion = {
  id: "se1",
  guestName: "店事客",
  text: "随便走走。",
  tags: ["安心"],
  intensity: 2,
};

describe("shop events", () => {
  it("roll 对同一状态确定性", () => {
    const state = createGameState([e]);
    expect(rollShopEvent(state)).toEqual(rollShopEvent(state));
  });

  it("apply 可改变温存且不降至负", () => {
    let state = createGameState([e]);
    state = runFullCirculation(state, "object", "display");
    const ev = {
      id: "t",
      title: "测",
      description: "d",
      warmthDelta: -100,
      reputationDelta: 0,
    };
    const next = applyShopEvent(state, ev);
    expect(next.warmth).toBe(0);
    expect(next.message).toContain("店事");
  });

  it("店事文案与奖励行", () => {
    const ev = {
      id: "x",
      title: "窗座有人",
      description: "半杯还温的茶。",
      warmthDelta: 1,
      reputationDelta: 0,
    };
    expect(formatShopEventLine(ev)).toContain("店事");
    expect(formatShopEventReward(ev)).toContain("温存");
    expect(formatShopEventReward({ ...ev, warmthDelta: 0, reputationDelta: 0 })).toContain(
      "故事",
    );
  });

  it("apply 正向事件增加温存与口碑", () => {
    const state = createGameState([e]);
    const next = applyShopEvent(state, {
      id: "up",
      title: "好事",
      description: "发生了",
      warmthDelta: 2,
      reputationDelta: 1,
    });
    expect(next.warmth).toBe(2);
    expect(next.reputation).toBe(1);
  });

  it("不同 day 可能改变是否出事件", () => {
    const base = createGameState([e]);
    const results = new Set<string>();
    for (let day = 1; day <= 20; day++) {
      const s: GameState = { ...base, day, history: base.history, warmth: day };
      const ev = rollShopEvent(s);
      results.add(ev ? ev.id : "none");
    }
    // 20 天应出现多于一种结果（含 none 或不同事件）
    expect(results.size).toBeGreaterThan(1);
  });
});
