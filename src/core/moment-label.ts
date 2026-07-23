/**
 * 瞬间卡片旁白（纯函数，可单测）
 * 在既有 momentCard 文本外，补一行气质说明。
 */
import type { CirculationAction, CirculationRecord, Quality, VesselKind } from "./types";
import { QUALITY_LABELS, VESSEL_LABELS } from "./types";
import { actionLabel } from "./action-label";

export function formatMomentWarmthLine(warmthGained: number): string {
  if (warmthGained >= 6) return `温存 +${warmthGained} · 这一记很沉，也很暖。`;
  if (warmthGained >= 3) return `温存 +${warmthGained} · 刚好够把灯再拧亮一点。`;
  return `温存 +${warmthGained} · 轻，却确实留下了。`;
}

export function formatMomentAside(
  vessel: VesselKind,
  quality: Quality,
  action: CirculationAction,
): string {
  const v = VESSEL_LABELS[vessel];
  const q = QUALITY_LABELS[quality];
  const a = actionLabel(action);
  if (action === "gift") {
    return `以「${v}」之形（${q}）${a}——心意先一步抵达。`;
  }
  return `以「${v}」之形（${q}）${a}——货架会替你守一会儿。`;
}

export function formatMomentCardHeader(record: CirculationRecord): string {
  return `瞬间卡片 · ${formatMomentWarmthLine(record.warmthGained)}`;
}

export function formatMomentCardFooter(record: CirculationRecord): string {
  return formatMomentAside(
    record.item.vessel,
    record.item.quality,
    record.action,
  );
}

/** 读屏：完整瞬间播报 */
export function announceMomentCard(record: CirculationRecord): string {
  return [
    formatMomentCardHeader(record),
    record.momentCard,
    formatMomentCardFooter(record),
  ].join("。");
}
