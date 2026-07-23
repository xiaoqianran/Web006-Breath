import { describe, it, expect } from "vitest";
import {
  createGameState,
  runFullCirculation,
  continueAfterResult,
  rebuildFavorMap,
  topFavoredGuests,
  favorDeltaForRecord,
  type Emotion,
} from "../src/core";

const a: Emotion = {
  id: "fa",
  guestName: "阿初",
  text: "想被记得。",
  tags: ["想念", "温柔"],
  intensity: 5,
};
const b: Emotion = {
  id: "fb",
  guestName: "小满",
  text: "雨停了。",
  tags: ["释然"],
  intensity: 2,
};

describe("favor", () => {
  it("珍稀赠予好感增量高于素简上架", () => {
    const rareGift = favorDeltaForRecord({
      item: {
        id: "i",
        emotionId: "e",
        vessel: "flower",
        quality: "rare",
        matchScore: 5,
        circulationValue: 9,
        label: "x",
      },
      action: "gift",
      warmthGained: 1,
      momentCard: "阿初的心情，测试",
      at: 0,
    });
    const simpleDisplay = favorDeltaForRecord({
      item: {
        id: "i2",
        emotionId: "e2",
        vessel: "art",
        quality: "simple",
        matchScore: 0,
        circulationValue: 1,
        label: "y",
      },
      action: "display",
      warmthGained: 1,
      momentCard: "乙的心情，测试",
      at: 0,
    });
    expect(rareGift).toBeGreaterThan(simpleDisplay);
  });

  it("从历史重建好感并取 top", () => {
    let state = createGameState([a, b, { ...a, id: "fa2" }], {
      dayGoalCirculations: 99,
      dayGoalWarmth: 999,
    });
    state = runFullCirculation(state, "flower", "gift");
    state = continueAfterResult(state);
    state = runFullCirculation(state, "tea", "display");
    state = continueAfterResult(state);
    state = runFullCirculation(state, "flower", "gift");
    const map = rebuildFavorMap(state.history);
    expect(map["阿初"]).toBeGreaterThan(0);
    const top = topFavoredGuests(state, 2);
    expect(top[0]!.name).toBe("阿初");
  });
});
