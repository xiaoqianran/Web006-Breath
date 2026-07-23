import { describe, it, expect } from "vitest";
import {
  recommendVesselForEmotion,
  formatVesselRecommendLine,
  listVesselHotkeyHints,
  rollDailyOrder,
  VESSEL_LABELS,
  type Emotion,
} from "../src/core";

const e: Emotion = {
  id: "vr1",
  guestName: "测",
  text: "想念一个人。",
  tags: ["想念", "温柔"],
  intensity: 4,
};

describe("vessel recommend", () => {
  it("推荐形态与热键提示", () => {
    const v = recommendVesselForEmotion(e);
    expect(v in VESSEL_LABELS).toBe(true);
    expect(listVesselHotkeyHints()).toContain("1=");
    const line = formatVesselRecommendLine(e, { activeOrder: null, pendingOrders: [] });
    expect(line).toContain(VESSEL_LABELS[v]);
  });

  it("委托并存时文案有内容", () => {
    const order = rollDailyOrder(3, 0);
    const line = formatVesselRecommendLine(e, { activeOrder: order, pendingOrders: [] });
    expect(line.length).toBeGreaterThan(4);
    expect(formatVesselRecommendLine(null, { activeOrder: null })).toContain("接待");
  });
});
