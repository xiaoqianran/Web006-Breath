import { describe, it, expect } from "vitest";
import {
  createGameState,
  formatInventoryEmptyLine,
  formatInventoryShelfAside,
  formatSpiceJarAside,
  formatInventoryEncourage,
  SHELF_CAPACITY,
  type CraftedItem,
  type GameState,
} from "../src/core";
import { SAMPLE_EMOTIONS } from "../src/data/emotions";

function item(id: string, vessel: CraftedItem["vessel"] = "tea"): CraftedItem {
  return {
    id,
    emotionId: "e",
    vessel,
    quality: "fine",
    matchScore: 2,
    circulationValue: 3,
    label: "测试",
  };
}

describe("inventory-label", () => {
  it("空架与有货文案", () => {
    const empty = createGameState(SAMPLE_EMOTIONS.slice(0, 1));
    expect(formatInventoryEmptyLine()).toContain("空");
    expect(formatInventoryShelfAside(empty)).toContain("空");
    expect(formatSpiceJarAside(0)).toContain("紧");
    expect(formatSpiceJarAside(5)).toContain("香气");
    expect(formatInventoryEncourage(empty)).toMatch(/接待|擦亮/);

    let s = empty as GameState;
    s = {
      ...s,
      shelf: [{ crafted: item("a", "tea"), listedAt: 0 }],
      circulationsToday: 1,
    };
    expect(formatInventoryShelfAside(s)).toContain("茶");
    expect(formatInventoryEncourage(s)).toMatch(/空位|知音/);

    s = {
      ...s,
      shelf: Array.from({ length: SHELF_CAPACITY }, (_, i) => ({
        crafted: item(`x${i}`),
        listedAt: i,
      })),
    };
    expect(formatInventoryEncourage(s)).toContain("满");
  });
});
