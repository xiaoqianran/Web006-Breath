import type { GameState, Quality, VesselKind } from "./types";

export interface SessionStats {
  circulations: number;
  gifts: number;
  displays: number;
  warmth: number;
  reputation: number;
  byVessel: Partial<Record<VesselKind, number>>;
  byQuality: Partial<Record<Quality, number>>;
  avgMatch: number;
}

/** 从 history 汇总本局统计（纯函数，可单测） */
export function computeSessionStats(state: GameState): SessionStats {
  const byVessel: Partial<Record<VesselKind, number>> = {};
  const byQuality: Partial<Record<Quality, number>> = {};
  let matchSum = 0;
  let gifts = 0;
  let displays = 0;
  for (const h of state.history) {
    const v = h.item.vessel;
    byVessel[v] = (byVessel[v] ?? 0) + 1;
    const q = h.item.quality;
    byQuality[q] = (byQuality[q] ?? 0) + 1;
    matchSum += h.item.matchScore;
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
    avgMatch: n ? matchSum / n : 0,
  };
}

export function formatStatsSummary(stats: SessionStats): string {
  if (stats.circulations === 0) return "尚未完成流通。";
  return `流通 ${stats.circulations} 次（赠予 ${stats.gifts} / 上架 ${stats.displays}），平均匹配 ${stats.avgMatch.toFixed(1)}，温存 ${stats.warmth}。`;
}
