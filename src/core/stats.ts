import { groupByKey } from "./group-by";
import { averageNumbers } from "./sum";
import type { CraftedItem, GameState, Quality, VesselKind } from "./types";

export interface SessionStats {
  circulations: number;
  gifts: number;
  displays: number;
  warmth: number;
  reputation: number;
  byVessel: Partial<Record<VesselKind, number>>;
  byQuality: Partial<Record<Quality, number>>;
  avgMatch: number;
  /** 累计完成委托数 */
  ordersFulfilled: number;
}

/** 从 history 汇总本局统计（纯函数，可单测） */
export function computeSessionStats(state: GameState): SessionStats {
  const byVessel: Partial<Record<VesselKind, number>> = {};
  const byQuality: Partial<Record<Quality, number>> = {};
  const matchScores: number[] = [];
  let gifts = 0;
  let displays = 0;
  const items: CraftedItem[] = state.history.map((h) => h.item);
  const vesselGroups = groupByKey(items, (it) => it.vessel);
  for (const [k, list] of Object.entries(vesselGroups)) {
    byVessel[k as VesselKind] = list.length;
  }
  for (const h of state.history) {
    const q = h.item.quality;
    byQuality[q] = (byQuality[q] ?? 0) + 1;
    matchScores.push(h.item.matchScore);
    if (h.action === "gift") gifts += 1;
    else displays += 1;
  }
  const n = state.history.length;
  return {
    circulations: n,
    gifts,
    displays,
    warmth: state.warmth,
    reputation: state.reputation,
    byVessel,
    byQuality,
    avgMatch: averageNumbers(matchScores),
    ordersFulfilled: state.ordersFulfilled ?? 0,
  };
}

export function formatStatsSummary(stats: SessionStats): string {
  if (stats.circulations === 0) {
    return stats.ordersFulfilled > 0
      ? `尚未完成流通，已履约委托 ${stats.ordersFulfilled} 笔。`
      : "尚未完成流通。";
  }
  const orderPart =
    stats.ordersFulfilled > 0 ? `，委托 ${stats.ordersFulfilled} 笔` : "";
  return `流通 ${stats.circulations} 次（赠予 ${stats.gifts} / 上架 ${stats.displays}），平均匹配 ${stats.avgMatch.toFixed(1)}，温存 ${stats.warmth}${orderPart}。`;
}

/** 打烊页委托摘要（纯函数） */
export function formatOrderDayEndLine(state: GameState): string {
  const n = state.ordersFulfilled ?? 0;
  if (n <= 0) {
    return state.activeOrder
      ? `今日委托尚未履约（${state.activeOrder.guestName} 仍在等）。`
      : "今日没有完成委托，明天告示板还会再写新的。";
  }
  return `今日履约委托 ${n} 笔，告示板上的心愿被轻轻接住了。`;
}
