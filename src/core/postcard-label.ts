/**
 * 明信片隐喻叙事（纯函数，可单测）
 * 把流通结果比作寄出的明信片，增强文艺感。
 */
import type { CirculationAction, Quality, VesselKind } from "./types";
import { QUALITY_LABELS, VESSEL_LABELS } from "./types";
import { actionLabel } from "./action-label";

export function formatPostcardStamp(quality: Quality): string {
  if (quality === "rare") return "珍稀邮戳 · 心口盖章";
  if (quality === "fine") return "精致邮戳 · 字迹端正";
  return "素简邮戳 · 轻轻一印";
}

export function formatPostcardAddress(action: CirculationAction): string {
  if (action === "gift") return "收件人：当面的你";
  return "收件人：未来的知音（货架代转）";
}

export function formatPostcardBody(
  vessel: VesselKind,
  quality: Quality,
  action: CirculationAction,
): string {
  const v = VESSEL_LABELS[vessel];
  const q = QUALITY_LABELS[quality];
  const a = actionLabel(action);
  return `以「${v}」为信纸（${q}），选择${a}——把一念寄出。`;
}

export function formatPostcardLine(
  vessel: VesselKind,
  quality: Quality,
  action: CirculationAction,
): string {
  return `${formatPostcardStamp(quality)} · ${formatPostcardAddress(action)} · ${formatPostcardBody(vessel, quality, action)}`;
}

export function formatPostcardStackAside(historyCount: number): string {
  if (historyCount <= 0) return "明信片叠还是空的：第一封会在流通后写下。";
  if (historyCount === 1) return "第一封明信片已寄出，柜台边多了一点回声。";
  return `已寄出 ${historyCount} 封温柔明信片，丝带捆着它们。`;
}
