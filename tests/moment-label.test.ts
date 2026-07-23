import { describe, it, expect } from "vitest";
import {
  formatMomentWarmthLine,
  formatMomentAside,
  formatMomentCardHeader,
  formatMomentCardFooter,
  announceMomentCard,
  type CirculationRecord,
} from "../src/core";

const rec: CirculationRecord = {
  item: {
    id: "m1",
    emotionId: "e",
    vessel: "flower",
    quality: "fine",
    matchScore: 3,
    circulationValue: 4,
    label: "测试花",
  },
  action: "gift",
  warmthGained: 5,
  momentCard: "阿初的心情，折进花瓣。",
  at: 0,
};

describe("moment-label", () => {
  it("温存与旁白文案", () => {
    expect(formatMomentWarmthLine(5)).toContain("+5");
    expect(formatMomentWarmthLine(1)).toContain("轻");
    expect(formatMomentAside("flower", "fine", "gift")).toContain("赠予");
    expect(formatMomentAside("tea", "simple", "display")).toContain("货架");
    expect(formatMomentCardHeader(rec)).toContain("瞬间卡片");
    expect(formatMomentCardFooter(rec)).toContain("花");
    expect(announceMomentCard(rec)).toContain("阿初");
  });
});
