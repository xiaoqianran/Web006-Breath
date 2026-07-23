/**
 * 赠予包装叙事（纯函数，可单测）
 */
import type { CirculationAction, Quality, VesselKind } from "./types";
import { QUALITY_LABELS, VESSEL_LABELS } from "./types";

export function formatGiftWrapLine(vessel: VesselKind, quality: Quality): string {
  const v = VESSEL_LABELS[vessel];
  const q = QUALITY_LABELS[quality];
  if (quality === "rare") {
    return `珍稀「${v}」已轻轻包好——丝带系紧，心口先松。`;
  }
  if (quality === "fine") {
    return `精致「${v}」包进纸盒，像把一句好话折好。`;
  }
  return `素简「${v}」也郑重：薄纸一裹，${q}就够温柔。`;
}

export function formatDisplayWrapLine(vessel: VesselKind, quality: Quality): string {
  const v = VESSEL_LABELS[vessel];
  const q = QUALITY_LABELS[quality];
  return `「${v}」（${q}）摆上货架，等知音的目光先到来。`;
}

export function formatCirculationChoiceHint(action: CirculationAction): string {
  if (action === "gift") {
    return "赠予：当面交到需要的人手上，好感往往更暖。";
  }
  return "上架：让温柔在货架上静候，被买走也算流通。";
}

export function formatGiftBoxAside(action: CirculationAction): string {
  if (action === "gift") return "礼物盒已合上，只差对方的一双眼睛。";
  return "陈列卡写好了，货架会替你守夜。";
}
