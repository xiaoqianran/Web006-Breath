import { describe, it, expect } from "vitest";
import {
  streakRankTitle,
  formatStreakLine,
  nextStreakThreshold,
  formatStreakEncourage,
} from "../src/core";

describe("streak labels", () => {
  it("档位与文案", () => {
    expect(streakRankTitle(0)).toBe("尚无连心");
    expect(streakRankTitle(2)).toBe("微微连心");
    expect(streakRankTitle(6)).toBe("心流不息");
    expect(formatStreakLine(4)).toContain("连心正旺");
    expect(nextStreakThreshold(0)).toBe(1);
    expect(nextStreakThreshold(6)).toBeNull();
    expect(formatStreakEncourage(0)).toContain("点燃");
    expect(formatStreakEncourage(3)).toContain("再连");
  });
});
