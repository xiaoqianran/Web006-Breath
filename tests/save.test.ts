import { describe, it, expect } from "vitest";
import {
  createGameState,
  runFullCirculation,
  serializeState,
  deserializeState,
  saveToStore,
  loadFromStore,
  createMemoryStore,
  clearSave,
} from "../src/core";
import type { Emotion } from "../src/core";

const e: Emotion = {
  id: "save1",
  guestName: "存档客",
  text: "把今天折好收进抽屉。",
  tags: ["安心", "温柔"],
  intensity: 3,
};

describe("save system", () => {
  it("序列化往返保持温存与历史", () => {
    let state = createGameState([e], { dayGoalCirculations: 99, dayGoalWarmth: 999 });
    state = runFullCirculation(state, "object", "gift");
    const raw = serializeState(state);
    const restored = deserializeState(raw);
    expect(restored.warmth).toBe(state.warmth);
    expect(restored.history).toHaveLength(1);
    expect(restored.history[0]!.item.vessel).toBe("object");
    expect(restored.circulationsToday).toBe(1);
  });

  it("KeyValueStore 存取与清除", () => {
    const store = createMemoryStore();
    let state = createGameState([e]);
    state = runFullCirculation(state, "tea", "display");
    saveToStore(store, state);
    const loaded = loadFromStore(store);
    expect(loaded).not.toBeNull();
    expect(loaded!.warmth).toBe(state.warmth);
    clearSave(store);
    expect(loadFromStore(store)).toBeNull();
  });

  it("损坏存档应抛错", () => {
    expect(() => deserializeState("{}")).toThrow();
    expect(() => deserializeState('{"version":1,"state":{"warmth":"x"}}')).toThrow();
  });
});
