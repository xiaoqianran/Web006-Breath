import type { GameState } from "./types";

export interface ShopEvent {
  id: string;
  title: string;
  description: string;
  warmthDelta: number;
  reputationDelta: number;
}

const POOL: Omit<ShopEvent, "id">[] = [
  {
    title: "路过的风铃",
    description: "一阵风把风铃吹响，店里的人都轻轻笑了。",
    warmthDelta: 1,
    reputationDelta: 0,
  },
  {
    title: "匿名供花",
    description: "门口多了一小束不用署名的花。",
    warmthDelta: 2,
    reputationDelta: 0,
  },
  {
    title: "旧客留言",
    description: "便签写着：上次的茶，让我睡得很好。",
    warmthDelta: 1,
    reputationDelta: 1,
  },
  {
    title: "阴天滞销",
    description: "今天脚步声少了些，货架上的东西多看了一眼窗外。",
    warmthDelta: 0,
    reputationDelta: 0,
  },
  {
    title: "窗座有人",
    description: "窗边薄毯上坐过一位客人，留下半杯还温的茶。",
    warmthDelta: 1,
    reputationDelta: 0,
  },
  {
    title: "徽章闪光",
    description: "抽屉里的纪念徽章碰出一声轻响，像在提醒你还在。",
    warmthDelta: 0,
    reputationDelta: 1,
  },
  {
    title: "雨停开门",
    description: "雨停后第一位推门的人，鞋底还带着浅浅的水痕。",
    warmthDelta: 1,
    reputationDelta: 0,
  },
];

/** 店事标题气质短句 */
export function formatShopEventLine(event: ShopEvent): string {
  return `【店事】${event.title}：${event.description}`;
}

export function formatShopEventReward(event: ShopEvent): string {
  const parts: string[] = [];
  if (event.warmthDelta) parts.push(`温存 ${event.warmthDelta > 0 ? "+" : ""}${event.warmthDelta}`);
  if (event.reputationDelta) parts.push(`口碑 +${event.reputationDelta}`);
  if (parts.length === 0) return "无数值波动，只是店里多了一点故事。";
  return parts.join(" · ");
}

/** 纯函数：用 day+history 长度做确定性「随机」 */
export function rollShopEvent(state: GameState): ShopEvent | null {
  // 约 40% 概率有事件
  const seed = state.day * 17 + state.history.length * 3 + state.warmth;
  if (seed % 5 > 1) return null;
  const idx = seed % POOL.length;
  const base = POOL[idx]!;
  return {
    id: `shop_ev_${state.day}_${state.history.length}_${idx}`,
    ...base,
  };
}

export function applyShopEvent(state: GameState, event: ShopEvent): GameState {
  return {
    ...state,
    warmth: Math.max(0, state.warmth + event.warmthDelta),
    reputation: Math.max(0, state.reputation + event.reputationDelta),
    message: `【店事】${event.title}：${event.description}${
      event.warmthDelta || event.reputationDelta
        ? `（温存 ${event.warmthDelta >= 0 ? "+" : ""}${event.warmthDelta || 0}` +
          (event.reputationDelta ? `，口碑 +${event.reputationDelta}` : "") +
          "）"
        : ""
    }`,
  };
}
