import { describe, it, expect } from "vitest";
import {
  formatRecipeCardLine,
  formatWoodClipLine,
  formatRecipecardAside,
  formatRecipecardEncourage,
  formatRecipecardPair,
} from "../src/core";

describe("recipecard-label", () => {
  it("手写菜谱卡与木夹文案", () => {
    expect(formatRecipeCardLine(1).length).toBeGreaterThan(4);
    expect(formatRecipeCardLine(2)).toMatch(/卡|旧|步|苛|记/);
    expect(formatWoodClipLine(0)).toMatch(/夹|松|温存|张/);
    expect(formatWoodClipLine(20)).toMatch(/夹|温|稳|纸|字|住|钉/);
    expect(formatRecipecardAside(0)).toMatch(/卡|空白|流通|复|温/);
    expect(formatRecipecardAside(5)).toContain("5");
    expect(formatRecipecardEncourage(0)).toMatch(/菜谱|木夹|步|记/);
    expect(formatRecipecardPair(1, 10)).toMatch(/菜|卡|夹|谱/);
  });
});
