import { describe, it, expect } from "vitest";
import {
  DAY_SCRIPTS,
  getDayScript,
  queueFromDayScript,
} from "../src/data/day-scripts";
import { goalsForDay, describeDayOpener } from "../src/data/emotions";
import { createGameState, runFullCirculation } from "../src/core";

describe("day scripts", () => {
  it("定义至少 84 日剧本", () => {
    expect(DAY_SCRIPTS.length).toBeGreaterThanOrEqual(84);
    for (const d of DAY_SCRIPTS) {
      expect(d.sampleIndexes.length).toBeGreaterThanOrEqual(3);
      expect(d.goalCirculations).toBeGreaterThan(0);
    }
  });

  it("queueFromDayScript 可被核心循环消化", () => {
    const q = queueFromDayScript(1);
    expect(q.length).toBeGreaterThanOrEqual(4);
    let state = createGameState(q, goalsForDay(1));
    state = runFullCirculation(state, "flower", "gift");
    expect(state.history).toHaveLength(1);
  });

  it("第 9 日使用具名剧本开场", () => {
    const d = getDayScript(9);
    expect(d.day).toBe(9);
    expect(d.title).toBe("薄雾");
    expect(describeDayOpener(9)).toContain("第九日");
  });

  it("超出定义日仍可延展生成", () => {
    const d = getDayScript(12);
    expect(d.day).toBe(12);
    expect(describeDayOpener(12).length).toBeGreaterThan(4);
  });

  it("第 18 日具名剧本", () => {
    const d = getDayScript(18);
    expect(d.day).toBe(18);
    expect(d.title).toBe("十八的窗口");
    expect(describeDayOpener(18)).toContain("第十八日");
    const q = queueFromDayScript(18);
    expect(q.length).toBeGreaterThanOrEqual(4);
  });

  it("第 20 日具名剧本", () => {
    const d = getDayScript(20);
    expect(d.day).toBe(20);
    expect(d.title).toBe("二十的铃");
    expect(describeDayOpener(20)).toContain("第二十日");
  });

  it("第 22 日具名剧本", () => {
    const d = getDayScript(22);
    expect(d.day).toBe(22);
    expect(d.title).toBe("双灯");
    expect(describeDayOpener(22)).toContain("第二十二日");
  });

  it("第 24 日具名剧本", () => {
    const d = getDayScript(24);
    expect(d.day).toBe(24);
    expect(d.title).toBe("廿四的露");
    expect(describeDayOpener(24)).toContain("第二十四日");
  });

  it("第 26 日具名剧本", () => {
    const d = getDayScript(26);
    expect(d.day).toBe(26);
    expect(d.title).toBe("廿六的茶");
    expect(describeDayOpener(26)).toContain("第二十六日");
  });

  it("第 28 日具名剧本", () => {
    const d = getDayScript(28);
    expect(d.day).toBe(28);
    expect(d.title).toBe("廿八的铃");
    expect(describeDayOpener(28)).toContain("第二十八日");
  });

  it("第 30 日具名剧本", () => {
    const d = getDayScript(30);
    expect(d.day).toBe(30);
    expect(d.title).toBe("三十的灯");
    expect(describeDayOpener(30)).toContain("第三十日");
  });

  it("第 32 日具名剧本", () => {
    const d = getDayScript(32);
    expect(d.day).toBe(32);
    expect(d.title).toBe("三二的风");
    expect(describeDayOpener(32)).toContain("第三十二日");
  });

  it("第 34 日具名剧本", () => {
    const d = getDayScript(34);
    expect(d.day).toBe(34);
    expect(d.title).toBe("三四的灯");
    expect(describeDayOpener(34)).toContain("第三十四日");
  });

  it("第 36 日具名剧本", () => {
    const d = getDayScript(36);
    expect(d.day).toBe(36);
    expect(d.title).toBe("三六的铃");
    expect(describeDayOpener(36)).toContain("第三十六日");
  });

  it("第 38 日具名剧本", () => {
    const d = getDayScript(38);
    expect(d.day).toBe(38);
    expect(d.title).toBe("三八的茶");
    expect(describeDayOpener(38)).toContain("第三十八日");
  });

  it("第 40 日具名剧本", () => {
    const d = getDayScript(40);
    expect(d.day).toBe(40);
    expect(d.title).toBe("四十的灯");
    expect(describeDayOpener(40)).toContain("第四十日");
  });

  it("第 42 日具名剧本", () => {
    const d = getDayScript(42);
    expect(d.day).toBe(42);
    expect(d.title).toBe("四二的铃");
    expect(describeDayOpener(42)).toContain("第四十二日");
  });

  it("第 44 日具名剧本", () => {
    const d = getDayScript(44);
    expect(d.day).toBe(44);
    expect(d.title).toBe("四四的风");
    expect(describeDayOpener(44)).toContain("第四十四日");
  });

  it("第 46 日具名剧本", () => {
    const d = getDayScript(46);
    expect(d.day).toBe(46);
    expect(d.title).toBe("四六的铃");
    expect(describeDayOpener(46)).toContain("第四十六日");
  });
});

