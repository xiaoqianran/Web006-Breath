import type { GameState, VesselKind } from "./types";

export interface UnlockDef {
  id: string;
  title: string;
  description: string;
  /** 需要口碑 */
  minReputation: number;
  /** 需要累计流通次数（history.length） */
  minCirculations: number;
}

export const UNLOCKS: UnlockDef[] = [
  {
    id: "hint_mastery",
    title: "心耳微启",
    description: "气息提示解读更清晰（叙事解锁）",
    minReputation: 2,
    minCirculations: 2,
  },
  {
    id: "gift_ribbon",
    title: "赠予丝带",
    description: "赠予时额外 +1 温存叙事加成已始终生效；此为图鉴纪念",
    minReputation: 3,
    minCirculations: 3,
  },
  {
    id: "rare_shelf",
    title: "珍稀货架",
    description: "完成一次珍稀品质流通后解锁的店面传说",
    minReputation: 4,
    minCirculations: 4,
  },
  {
    id: "week_keeper",
    title: "七日守店人",
    description: "跨越多日经营的口碑徽记",
    minReputation: 6,
    minCirculations: 8,
  },
  {
    id: "fortnight",
    title: "半月掌灯",
    description: "经营满 15 日的纪念",
    minReputation: 8,
    minCirculations: 12,
  },
  {
    id: "gift_heart",
    title: "赠予之心",
    description: "累计赠予满 5 次的纪念",
    minReputation: 0,
    minCirculations: 5,
  },
  {
    id: "order_keeper",
    title: "委托守约",
    description: "累计完成 3 笔客人委托的纪念",
    minReputation: 0,
    minCirculations: 0,
  },
];

export function isUnlockEarned(state: GameState, unlock: UnlockDef): boolean {
  const rareDone = state.history.some((h) => h.item.quality === "rare");
  if (unlock.id === "rare_shelf" && !rareDone) return false;
  if (unlock.id === "week_keeper" && state.day < 2) return false;
  if (unlock.id === "fortnight" && state.day < 15) return false;
  if (unlock.id === "gift_heart") {
    const gifts = state.history.filter((h) => h.action === "gift").length;
    return gifts >= 5;
  }
  if (unlock.id === "order_keeper") {
    return (state.ordersFulfilled ?? 0) >= 3;
  }
  return (
    state.reputation >= unlock.minReputation &&
    state.history.length >= unlock.minCirculations
  );
}

export function listEarnedUnlocks(state: GameState): UnlockDef[] {
  return UNLOCKS.filter((u) => isUnlockEarned(state, u));
}

export function listLockedUnlocks(state: GameState): UnlockDef[] {
  return UNLOCKS.filter((u) => !isUnlockEarned(state, u));
}

/** 形态图鉴：用于展示擅长标签（非玩法作弊面板） */
export function vesselAffinityLines(): { vessel: VesselKind; line: string }[] {
  return [
    { vessel: "flower", line: "花 · 想念 / 温柔 / 期待" },
    { vessel: "tea", line: "茶 · 疲惫 / 安心 / 释然" },
    { vessel: "art", line: "画 · 遗憾 / 孤独 / 悸动" },
    { vessel: "music", line: "音乐 · 孤独 / 想念 / 勇气" },
    { vessel: "object", line: "小物件 · 安心 / 期待 / 温柔" },
  ];
}
