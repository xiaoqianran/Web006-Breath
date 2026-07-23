import { describe, it, expect } from "vitest";
import { createGameState, inspectGameState, type Emotion } from "../src/core";

const e: Emotion = {
  id: "as1",
  guestName: "检",
  text: "检查结构。",
  tags: ["安心"],
  intensity: 1,
};

describe("inspectGameState", () => {
  it("合法 createGameState 通过", () => {
    const r = inspectGameState(createGameState([e]));
    expect(r.ok).toBe(true);
    expect(r.messages).toHaveLength(0);
  });

  it("残缺对象给出问题列表", () => {
    const r = inspectGameState({ day: 0, warmth: -1 });
    expect(r.ok).toBe(false);
    expect(r.messages.length).toBeGreaterThan(0);
  });
});
