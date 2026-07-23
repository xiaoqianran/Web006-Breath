import { describe, it, expect } from "vitest";
import {
  rollDailyOrder,
  orderMatches,
  formatOrderLine,
  formatOrderShort,
  tryFulfillOrder,
  ensureActiveOrder,
  orderDifficulty,
  preferredVesselFromOrder,
  isOrderPreferredVessel,
  rollSecondaryOrder,
  listVisibleOrders,
  ensurePendingSecondary,
  tryFulfillAnyOrder,
  orderVesselHintLine,
  vesselHelpsAnyOrder,
  createGameState,
  acceptNextEmotion,
  chooseVessel,
  circulate,
  qualityAtLeast,
  VESSEL_LABELS,
  type CraftedItem,
  type ShopOrder,
} from "../src/core";
import { SAMPLE_EMOTIONS } from "../src/data/emotions";

function fakeItem(
  vessel: CraftedItem["vessel"],
  quality: CraftedItem["quality"],
): CraftedItem {
  return {
    id: "c1",
    emotionId: "e1",
    vessel,
    quality,
    matchScore: 80,
    circulationValue: 3,
    label: "测试成品",
  };
}

describe("M2 shop orders", () => {
  it("同日 roll 确定性，跨日不同", () => {
    const a = rollDailyOrder(3, 0);
    const b = rollDailyOrder(3, 0);
    const c = rollDailyOrder(4, 0);
    expect(a).toEqual(b);
    expect(a.id).not.toBe(c.id);
    expect(a.preferredVessel in VESSEL_LABELS).toBe(true);
    expect(formatOrderLine(a)).toContain(a.guestName);
    expect(formatOrderShort(a).length).toBeGreaterThan(3);
    expect(orderDifficulty(a)).toBeGreaterThanOrEqual(1);
  });

  it("orderMatches 检查形态与最低品质", () => {
    const order: ShopOrder = {
      id: "o1",
      day: 1,
      guestName: "测",
      preferredVessel: "tea",
      minQuality: "fine",
      bonusWarmth: 3,
      bonusReputation: 1,
      blurb: "测试",
    };
    expect(orderMatches(order, fakeItem("tea", "simple"))).toBe(false);
    expect(orderMatches(order, fakeItem("tea", "fine"))).toBe(true);
    expect(orderMatches(order, fakeItem("tea", "rare"))).toBe(true);
    expect(orderMatches(order, fakeItem("flower", "rare"))).toBe(false);
    expect(qualityAtLeast("rare", "fine")).toBe(true);
  });

  it("tryFulfillOrder 成功后清空订单并加奖励", () => {
    const order = rollDailyOrder(1, 0);
    let state = createGameState(SAMPLE_EMOTIONS.slice(0, 2));
    state = {
      ...state,
      activeOrder: order,
      warmth: 0,
      ordersFulfilled: 0,
    };
    const item = fakeItem(order.preferredVessel, order.minQuality);
    const next = tryFulfillOrder(state, item);
    expect(next.activeOrder).toBeNull();
    expect(next.ordersFulfilled).toBe(1);
    expect(next.warmth).toBe(order.bonusWarmth);
    expect(next.message).toContain("委托完成");
  });

  it("ensureActiveOrder 补齐缺失订单", () => {
    let state = createGameState(SAMPLE_EMOTIONS.slice(0, 1));
    state = { ...state, activeOrder: null };
    const next = ensureActiveOrder(state);
    expect(next.activeOrder).not.toBeNull();
    expect(next.activeOrder!.day).toBe(1);
  });

  it("第二委托槽与可见列表", () => {
    const primary = rollDailyOrder(7, 0);
    const secondary = rollSecondaryOrder(7, primary);
    expect(secondary.id).toContain("order_sec");
    expect(secondary.day).toBe(7);
    let state = createGameState(SAMPLE_EMOTIONS.slice(0, 1));
    state = { ...state, activeOrder: primary, pendingOrders: [] };
    state = ensurePendingSecondary(state);
    expect(state.pendingOrders!.length).toBe(1);
    const visible = listVisibleOrders(state);
    expect(visible.length).toBe(2);
    // 候补履约
    const item = fakeItem(
      state.pendingOrders![0]!.preferredVessel,
      state.pendingOrders![0]!.minQuality,
    );
    // 先清空 active 以免主单先吃掉
    state = { ...state, activeOrder: null };
    const next = tryFulfillAnyOrder(state, item);
    expect(next.ordersFulfilled).toBe(1);
    expect(next.pendingOrders ?? []).toHaveLength(0);
  });

  it("委托偏好形态纯函数", () => {
    const order = rollDailyOrder(2, 0);
    const state = { activeOrder: order };
    expect(preferredVesselFromOrder(state)).toBe(order.preferredVessel);
    expect(isOrderPreferredVessel(state, order.preferredVessel)).toBe(true);
    expect(isOrderPreferredVessel({ activeOrder: null }, "tea")).toBe(false);
  });

  it("委托形态提示行与 helps 判定", () => {
    const order = rollDailyOrder(5, 0);
    const line = orderVesselHintLine({ activeOrder: order, pendingOrders: [] });
    expect(line).toContain("委托偏好");
    expect(line).toContain(VESSEL_LABELS[order.preferredVessel]);
    expect(vesselHelpsAnyOrder({ activeOrder: order }, order.preferredVessel)).toBe(true);
    expect(vesselHelpsAnyOrder({ activeOrder: null, pendingOrders: [] }, "tea")).toBe(false);
    expect(orderVesselHintLine({ activeOrder: null, pendingOrders: [] })).toBe("");
  });

  it("核心循环赠予可触发履约（真实 game API）", () => {
    // 构造：找到能匹配订单 vessel 的情绪路径较复杂，直接注入订单与强制 vessel
    const order = rollDailyOrder(1, 0);
    let s = createGameState(SAMPLE_EMOTIONS.slice(0, 3));
    s = { ...s, activeOrder: { ...order, preferredVessel: "flower", minQuality: "simple" } };
    s = acceptNextEmotion(s);
    s = chooseVessel(s, "flower");
    expect(s.crafted).not.toBeNull();
    const warmthBefore = s.warmth;
    s = circulate(s, "gift");
    // 赠予 flower+任意品质应履约
    expect(s.ordersFulfilled).toBeGreaterThanOrEqual(1);
    expect(s.warmth).toBeGreaterThan(warmthBefore);
    expect(s.history.length).toBe(1);
  });
});
