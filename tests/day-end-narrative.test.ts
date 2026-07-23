import { describe, it, expect } from "vitest";
import {
  createGameState,
  runFullCirculation,
  continueAfterResult,
  buildDayEndNarrative,
  formatDayEndClosing,
  formatDayEndNarrativeBlock,
  type Emotion,
} from "../src/core";

const e: Emotion = {
  id: "de1",
  guestName: "阿初",
  text: "想把今天的暖留下来。",
  tags: ["温柔", "安心"],
  intensity: 4,
};

describe("day-end narrative", () => {
  it("无流通时安静收束", () => {
    const state = createGameState([], {
      dayGoalCirculations: 3,
      dayGoalWarmth: 8,
    });
    const n = buildDayEndNarrative(state);
    expect(n.circulationLine).toContain("安静");
    expect(n.closingLine).toContain("明天");
    expect(formatDayEndClosing(0, 0, 0)).toContain("窗帘");
  });

  it("流通后含温存口碑与常客线索", () => {
    let state = createGameState([e, { ...e, id: "de2" }], {
      dayGoalCirculations: 99,
      dayGoalWarmth: 999,
    });
    state = runFullCirculation(state, "flower", "gift");
    state = continueAfterResult(state);
    state = runFullCirculation(state, "tea", "gift");
    const n = buildDayEndNarrative(state);
    expect(n.warmthLine).toContain("温存");
    expect(n.circulationLine).toContain("赠予");
    expect(n.favorLine).toContain("阿初");
    expect(formatDayEndNarrativeBlock(n).length).toBeGreaterThan(20);
  });

  it("高暖高口碑收束更亮", () => {
    // 口碑 15 → 口碑小铺；温存 30 → 炉边常亮
    const line = formatDayEndClosing(30, 15, 5);
    expect(line).toMatch(/炉边常亮|口碑小铺|记得/);
  });
});
