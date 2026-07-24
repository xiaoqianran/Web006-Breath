import { describe, it, expect } from "vitest";
import {
  guestbookNoteForFavor,
  buildGuestbookEntries,
  formatGuestbookLine,
  formatGuestbookBoardSummary,
  formatGuestbookEncourage,
  formatLanternAside,
} from "../src/core";

describe("guestbook-label", () => {
  it("按好感生成留言并汇总", () => {
    expect(guestbookNoteForFavor("阿初", 0)).toContain("空白");
    expect(guestbookNoteForFavor("阿初", 8)).toContain("熟客");
    expect(guestbookNoteForFavor("林晚", 12)).toContain("知心故人");
    const built = buildGuestbookEntries(
      [
        { name: "乙", favor: 2 },
        { name: "甲", favor: 9 },
      ],
      2,
    );
    expect(built[0]!.name).toBe("甲");
    expect(formatGuestbookLine(built[0]!)).toContain("甲");
    expect(formatGuestbookBoardSummary([])).toContain("空白");
    expect(formatGuestbookBoardSummary(built)).toContain("甲");
    expect(formatGuestbookEncourage(0)).toContain("接待");
    expect(formatGuestbookEncourage(5)).toContain("满");
    expect(formatLanternAside(0)).toContain("待点燃");
    expect(formatLanternAside(15)).toContain("常亮");
  });
});
