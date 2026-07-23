import { describe, it, expect } from "vitest";
import {
  guestVesselAffinity,
  bestVesselForGuest,
  averageMatchScore,
  createGameState,
  runFullCirculation,
  type Emotion,
} from "../src/core";

const e: Emotion = {
  id: "af1",
  guestName: "默契客",
  text: "累了，只想被安放。",
  tags: ["疲惫", "安心"],
  intensity: 4,
};

describe("guest affinity", () => {
  it("茶应优于画对疲惫/安心", () => {
    expect(guestVesselAffinity(e, "tea")).toBeGreaterThan(guestVesselAffinity(e, "art"));
    expect(bestVesselForGuest(e)).toBe("tea");
  });

  it("平均匹配分随流通更新", () => {
    let state = createGameState([e], { dayGoalCirculations: 99, dayGoalWarmth: 999 });
    expect(averageMatchScore(state)).toBe(0);
    state = runFullCirculation(state, "tea", "gift");
    expect(averageMatchScore(state)).toBeGreaterThan(0);
  });
});
