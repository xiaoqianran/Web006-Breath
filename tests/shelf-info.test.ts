import { describe, it, expect } from "vitest";
import {
  createGameState,
  formatShelfLine,
  shelfOccupancy,
  SHELF_CAPACITY,
  type CraftedItem,
  type GameState,
} from "../src/core";
import { SAMPLE_EMOTIONS } from "../src/data/emotions";

function item(id: string): CraftedItem {
  return {
    id,
    emotionId: "e",
    vessel: "object",
    quality: "fine",
    matchScore: 2,
    circulationValue: 3,
    label: "小物",
  };
}

describe("shelf info", () => {
  it("空货架文案", () => {
    const s = createGameState(SAMPLE_EMOTIONS.slice(0, 1));
    expect(shelfOccupancy(s).used).toBe(0);
    expect(shelfOccupancy(s).capacity).toBe(SHELF_CAPACITY);
    expect(formatShelfLine(s)).toContain("空着");
  });

  it("满货架与部分占用", () => {
    let s = createGameState(SAMPLE_EMOTIONS.slice(0, 1)) as GameState;
    s = {
      ...s,
      shelf: Array.from({ length: SHELF_CAPACITY }, (_, i) => ({
        crafted: item(`x${i}`),
        listedAt: i,
      })),
    };
    expect(shelfOccupancy(s).full).toBe(true);
    expect(formatShelfLine(s)).toContain("已满");
    s = { ...s, shelf: s.shelf.slice(0, 2) };
    expect(formatShelfLine(s)).toMatch(/2\//);
  });
});
