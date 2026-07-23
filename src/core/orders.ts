/**
 * M2 随机订单骨架：客人委托「想要某种形态/品质」的温柔瞬间。
 * 纯函数；不强制打断核心循环——履约为可选奖励。
 */

import { pickGuestName } from "./guest-names";
import { qualityAtLeast, qualityRank } from "./quality-rank";
import type {
  CraftedItem,
  GameState,
  Quality,
  VesselKind,
} from "./types";
import { QUALITY_LABELS, VESSEL_LABELS } from "./types";

export interface ShopOrder {
  id: string;
  day: number;
  guestName: string;
  preferredVessel: VesselKind;
  minQuality: Quality;
  bonusWarmth: number;
  /** 完成口碑奖励 */
  bonusReputation: number;
  blurb: string;
}

const VESSELS: VesselKind[] = ["flower", "tea", "art", "music", "object"];

const BLURBS: Record<VesselKind, string[]> = {
  flower: ["想要一束能放在窗台的想念。", "请把今天的心情折进花瓣里。"],
  tea: ["一杯能让人坐下来的茶。", "要一口温热，不要太甜。"],
  art: ["希望墙上多一块安静的颜色。", "把说不出口的话画下来。"],
  music: ["想听见一段可以走路听的旋律。", "低一点，像傍晚的风。"],
  object: ["一只口袋大小的小安慰。", "可以握在手心的物件就好。"],
};

function mulberry(seed: number): number {
  let t = (seed + 0x6d2b79f5) | 0;
  t = Math.imul(t ^ (t >>> 15), t | 1);
  t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
}

/** 按日确定性生成当日订单（可单测） */
export function rollDailyOrder(day: number, salt = 0): ShopOrder {
  const seed = day * 9973 + salt * 131;
  const r1 = mulberry(seed);
  const r2 = mulberry(seed + 1);
  const r3 = mulberry(seed + 2);
  const vessel = VESSELS[Math.floor(r1 * VESSELS.length)]!;
  const minQuality: Quality = r2 < 0.55 ? "simple" : r2 < 0.88 ? "fine" : "rare";
  const guest = pickGuestName(Math.floor(r3 * 10000) + day * 17);
  const blurbs = BLURBS[vessel];
  const blurb = blurbs[Math.floor(mulberry(seed + 3) * blurbs.length)]!;
  const bonusWarmth =
    minQuality === "rare" ? 4 : minQuality === "fine" ? 3 : 2;
  const bonusReputation = minQuality === "rare" ? 2 : minQuality === "fine" ? 1 : 0;
  return {
    id: `order_d${day}_${vessel}_${minQuality}`,
    day,
    guestName: guest,
    preferredVessel: vessel,
    minQuality,
    bonusWarmth,
    bonusReputation,
    blurb,
  };
}

/** 成品是否满足订单 */
export function orderMatches(order: ShopOrder, item: CraftedItem): boolean {
  if (item.vessel !== order.preferredVessel) return false;
  return qualityAtLeast(item.quality, order.minQuality);
}

export function formatOrderLine(order: ShopOrder): string {
  const v = VESSEL_LABELS[order.preferredVessel];
  const q =
    order.minQuality === "simple"
      ? "任意品质"
      : `至少${QUALITY_LABELS[order.minQuality]}`;
  return `${order.guestName}委托：${v}（${q}）— ${order.blurb}`;
}

export function formatOrderShort(order: ShopOrder): string {
  return `${order.guestName}·${VESSEL_LABELS[order.preferredVessel]}·${
    order.minQuality === "simple" ? "任意" : QUALITY_LABELS[order.minQuality]
  }`;
}

/** 确保 state 有当日 activeOrder（缺省或过期则重 roll） */
export function ensureActiveOrder(state: GameState): GameState {
  const cur = state.activeOrder;
  if (cur && cur.day === state.day) return state;
  return {
    ...state,
    activeOrder: rollDailyOrder(state.day, state.ordersFulfilled ?? 0),
  };
}

/**
 * 尝试用刚流通的成品履约。
 * 成功则清空 activeOrder、累加 fulfilled，并追加奖励。
 */
export function tryFulfillOrder(
  state: GameState,
  item: CraftedItem,
): GameState {
  const order = state.activeOrder;
  if (!order || order.day !== state.day) return state;
  if (!orderMatches(order, item)) return state;
  const fulfilled = (state.ordersFulfilled ?? 0) + 1;
  return {
    ...state,
    activeOrder: null,
    ordersFulfilled: fulfilled,
    warmth: state.warmth + order.bonusWarmth,
    reputation: state.reputation + order.bonusReputation,
    message: `${state.message} 【委托完成】${order.guestName}满意地收下了（温存 +${order.bonusWarmth}${
      order.bonusReputation ? `，口碑 +${order.bonusReputation}` : ""
    }）。`,
  };
}

/** 订单难度分（展示/测试用） */
export function orderDifficulty(order: ShopOrder): number {
  return 1 + qualityRank(order.minQuality);
}

/** 选形态时：若有委托则返回偏好形态，否则 null */
export function preferredVesselFromOrder(
  state: Pick<GameState, "activeOrder">,
): VesselKind | null {
  return state.activeOrder?.preferredVessel ?? null;
}

/** 是否应高亮该形态按钮 */
export function isOrderPreferredVessel(
  state: Pick<GameState, "activeOrder">,
  vessel: VesselKind,
): boolean {
  return preferredVesselFromOrder(state) === vessel;
}

/**
 * 第二委托槽骨架：生成与主委托不同形态的候补订单。
 * 不自动写入 state；由 UI/后续系统挂载到 pendingOrders。
 */
export function rollSecondaryOrder(day: number, primary: ShopOrder): ShopOrder {
  let salt = 1;
  let candidate = rollDailyOrder(day, salt);
  // 最多尝试 8 次找不同形态
  while (candidate.preferredVessel === primary.preferredVessel && salt < 8) {
    salt += 1;
    candidate = rollDailyOrder(day, salt + primary.bonusWarmth);
  }
  return {
    ...candidate,
    id: `order_sec_d${day}_${candidate.preferredVessel}`,
  };
}

/** 列出当前可见委托（主 + 候补，去重 id） */
export function listVisibleOrders(
  state: Pick<GameState, "activeOrder" | "pendingOrders">,
): ShopOrder[] {
  const out: ShopOrder[] = [];
  const seen = new Set<string>();
  for (const o of [state.activeOrder, ...(state.pendingOrders ?? [])]) {
    if (!o) continue;
    if (seen.has(o.id)) continue;
    seen.add(o.id);
    out.push(o as ShopOrder);
  }
  return out;
}

/** 将第二委托挂到 state.pendingOrders（已有则保留） */
export function ensurePendingSecondary(state: GameState): GameState {
  if (!state.activeOrder) return state;
  const pending = state.pendingOrders ?? [];
  if (pending.length > 0) return { ...state, pendingOrders: pending };
  const secondary = rollSecondaryOrder(state.day, state.activeOrder as ShopOrder);
  return { ...state, pendingOrders: [secondary] };
}

/**
 * 选形态阶段：委托相关提示文案（纯函数）。
 * 若无委托返回空串。
 */
export function orderVesselHintLine(
  state: Pick<GameState, "activeOrder" | "pendingOrders">,
): string {
  const vessels: VesselKind[] = [];
  if (state.activeOrder) vessels.push(state.activeOrder.preferredVessel);
  for (const o of state.pendingOrders ?? []) {
    if (o && !vessels.includes(o.preferredVessel)) vessels.push(o.preferredVessel);
  }
  if (vessels.length === 0) return "";
  const names = vessels.map((v) => VESSEL_LABELS[v]).join("、");
  return `委托偏好形态：${names}（匹配更易履约）`;
}

/** 形态是否在任一可见委托偏好中 */
export function vesselHelpsAnyOrder(
  state: Pick<GameState, "activeOrder" | "pendingOrders">,
  vessel: VesselKind,
): boolean {
  if (state.activeOrder?.preferredVessel === vessel) return true;
  return (state.pendingOrders ?? []).some((o) => o?.preferredVessel === vessel);
}

/**
 * 履约时优先匹配 active，否则匹配 pending 中第一笔。
 * 保持 tryFulfillOrder 行为；本函数供扩展路径单测。
 */
export function tryFulfillAnyOrder(state: GameState, item: CraftedItem): GameState {
  const primary = tryFulfillOrder(state, item);
  if ((primary.ordersFulfilled ?? 0) > (state.ordersFulfilled ?? 0)) {
    return primary;
  }
  const pending = state.pendingOrders ?? [];
  for (let i = 0; i < pending.length; i++) {
    const order = pending[i]!;
    if (!orderMatches(order as ShopOrder, item)) continue;
    const rest = pending.filter((_, j) => j !== i);
    const fulfilled = (state.ordersFulfilled ?? 0) + 1;
    const o = order as ShopOrder;
    return {
      ...state,
      pendingOrders: rest,
      ordersFulfilled: fulfilled,
      warmth: state.warmth + o.bonusWarmth,
      reputation: state.reputation + o.bonusReputation,
      message: `${state.message} 【候补委托完成】${o.guestName}满意地收下了（温存 +${o.bonusWarmth}）。`,
    };
  }
  return state;
}
