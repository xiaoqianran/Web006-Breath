import { lastOf } from "./pick";
import { isBetterQuality } from "./quality-rank";
import { QUALITY_LABELS, VESSEL_LABELS } from "./types";
import type { CirculationRecord, GameState, Quality, VesselKind } from "./types";

export function countByVessel(history: CirculationRecord[], vessel: VesselKind): number {
  return history.filter((h) => h.item.vessel === vessel).length;
}

export function countByQuality(history: CirculationRecord[], quality: Quality): number {
  return history.filter((h) => h.item.quality === quality).length;
}

export function lastCirculation(state: GameState): CirculationRecord | null {
  return lastOf(state.history) ?? null;
}

export function totalWarmthFromHistory(history: CirculationRecord[]): number {
  return history.reduce((sum, h) => sum + h.warmthGained, 0);
}

export function bestQualityInHistory(history: CirculationRecord[]): Quality | null {
  if (history.length === 0) return null;
  let best: Quality = history[0]!.item.quality;
  for (const h of history) {
    if (isBetterQuality(h.item.quality, best)) best = h.item.quality;
  }
  return best;
}

/** 图鉴/历史摘要叙事 */
export function formatCodexSummary(history: CirculationRecord[]): string {
  if (history.length === 0) {
    return "图鉴还是空白页：完成流通后，瞬间会在此留下痕迹。";
  }
  const gifts = history.filter((h) => h.action === "gift").length;
  const displays = history.length - gifts;
  const best = bestQualityInHistory(history);
  const bestLabel = best ? QUALITY_LABELS[best] : "—";
  const warmth = totalWarmthFromHistory(history);
  return `已记录 ${history.length} 次流通（赠予 ${gifts} / 上架 ${displays}），最高品质「${bestLabel}」，累计温存 +${warmth}。`;
}

/** 最常选用的形态（并列取字典序靠前） */
export function mostUsedVessel(history: CirculationRecord[]): VesselKind | null {
  if (history.length === 0) return null;
  const counts: Partial<Record<VesselKind, number>> = {};
  for (const h of history) {
    const v = h.item.vessel;
    counts[v] = (counts[v] ?? 0) + 1;
  }
  let best: VesselKind | null = null;
  let n = -1;
  for (const v of Object.keys(VESSEL_LABELS) as VesselKind[]) {
    const c = counts[v] ?? 0;
    if (c > n) {
      n = c;
      best = v;
    }
  }
  return best;
}

export function formatFavoriteVesselLine(history: CirculationRecord[]): string {
  const v = mostUsedVessel(history);
  if (!v) return "还没有最爱的形态。";
  const n = countByVessel(history, v);
  return `最常选用：${VESSEL_LABELS[v]}（${n} 次）— 像店里的签名笔触。`;
}
