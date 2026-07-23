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
  {
    id: "month_keeper",
    title: "满月掌灯",
    description: "经营满 28 日的纪念",
    minReputation: 10,
    minCirculations: 16,
  },
];

export function isUnlockEarned(state: GameState, unlock: UnlockDef): boolean {
  const rareDone = state.history.some((h) => h.item.quality === "rare");
  if (unlock.id === "rare_shelf" && !rareDone) return false;
  if (unlock.id === "week_keeper" && state.day < 2) return false;
  if (unlock.id === "fortnight" && state.day < 15) return false;
  if (unlock.id === "month_keeper" && state.day < 28) return false;
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

export interface UnlockProgress {
  unlock: UnlockDef;
  earned: boolean;
  /** 0–1 粗略进度（多条件取最低完成度） */
  ratio: number;
  hint: string;
}

function clamp01(n: number): number {
  return Math.min(1, Math.max(0, n));
}

/**
 * 单个解锁的进度估算（纯函数，可单测）。
 * 特殊解锁会检查额外条件。
 */
export function unlockProgress(state: GameState, unlock: UnlockDef): UnlockProgress {
  if (isUnlockEarned(state, unlock)) {
    return { unlock, earned: true, ratio: 1, hint: `已解锁「${unlock.title}」` };
  }
  const ratios: number[] = [];
  if (unlock.minReputation > 0) {
    ratios.push(clamp01(state.reputation / unlock.minReputation));
  }
  if (unlock.minCirculations > 0) {
    ratios.push(clamp01(state.history.length / unlock.minCirculations));
  }
  if (unlock.id === "gift_heart") {
    const gifts = state.history.filter((h) => h.action === "gift").length;
    ratios.push(clamp01(gifts / 5));
  }
  if (unlock.id === "order_keeper") {
    ratios.push(clamp01((state.ordersFulfilled ?? 0) / 3));
  }
  if (unlock.id === "fortnight") {
    ratios.push(clamp01(state.day / 15));
  }
  if (unlock.id === "month_keeper") {
    ratios.push(clamp01(state.day / 28));
  }
  if (unlock.id === "week_keeper") {
    ratios.push(clamp01(state.day / 2));
  }
  if (unlock.id === "rare_shelf") {
    const rareDone = state.history.some((h) => h.item.quality === "rare");
    ratios.push(rareDone ? 1 : 0);
  }
  const ratio = ratios.length ? Math.min(...ratios) : 0;
  const pct = Math.round(ratio * 100);
  return {
    unlock,
    earned: false,
    ratio,
    hint: `「${unlock.title}」进度约 ${pct}%`,
  };
}

/** 所有锁定解锁的进度列表（按 ratio 升序，最近达成优先显示低进度） */
export function listUnlockProgress(state: GameState): UnlockProgress[] {
  return UNLOCKS.map((u) => unlockProgress(state, u)).sort((a, b) => {
    if (a.earned !== b.earned) return a.earned ? 1 : -1;
    return a.ratio - b.ratio;
  });
}

/** 下一枚最近可冲刺的锁定解锁（无则 null） */
export function nextUnlockTarget(state: GameState): UnlockProgress | null {
  const locked = listUnlockProgress(state).filter((p) => !p.earned);
  if (locked.length === 0) return null;
  // 优先 ratio 最高但仍未解锁
  return [...locked].sort((a, b) => b.ratio - a.ratio)[0] ?? null;
}

export function formatNextUnlockLine(state: GameState): string {
  const n = nextUnlockTarget(state);
  if (!n) return "店面纪念已齐，温柔仍在流通。";
  return `下一枚纪念：${n.hint}`;
}

/** 解锁进度鼓励（HUD / 图鉴 / 读屏） */
export function formatUnlockEncourage(state: GameState): string {
  const earned = listEarnedUnlocks(state).length;
  const total = UNLOCKS.length;
  const next = nextUnlockTarget(state);
  if (!next) {
    return `纪念已齐（${earned}/${total}）。流通本身仍是最好的奖章。`;
  }
  if (next.ratio >= 0.75) {
    return `「${next.unlock.title}」就差一点了（约 ${Math.round(next.ratio * 100)}%），再走几步温柔。`;
  }
  if (next.ratio >= 0.35) {
    return `往「${next.unlock.title}」走着：${next.unlock.description}`;
  }
  if (earned === 0) {
    return "第一枚纪念还在路上——先接待、再流通，口碑会慢慢亮。";
  }
  return `已收藏 ${earned}/${total} 枚纪念；下一目标「${next.unlock.title}」。`;
}

/** 解锁板摘要（已解锁标题列表） */
export function formatUnlockBoardSummary(state: GameState): string {
  const earned = listEarnedUnlocks(state);
  if (earned.length === 0) return "店面纪念仍是空的，完成流通后会亮起第一枚。";
  return `已解锁：${earned.map((u) => u.title).join("、")}`;
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
