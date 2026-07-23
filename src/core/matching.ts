import { sanitizeDisplayText } from "./text-sanitize";
import {
  type Emotion,
  type EmotionTag,
  type Quality,
  type VesselKind,
  VESSEL_AFFINITY,
  VESSEL_LABELS,
} from "./types";

export interface MatchResult {
  matchScore: number;
  quality: Quality;
  circulationValue: number;
  matchedTags: EmotionTag[];
}

/**
 * 计算情绪与容器形态的匹配结果（纯函数，可单测）。
 * 规则见 docs/GDD.md §3.3
 */
export function evaluateMatch(emotion: Emotion, vessel: VesselKind): MatchResult {
  const affinity = VESSEL_AFFINITY[vessel];
  const matchedTags = emotion.tags.filter((t) => affinity.includes(t));
  let matchScore = matchedTags.length * 2;

  if (emotion.intensity >= 4 && matchedTags.length >= 1) {
    matchScore += 1;
  }

  let quality: Quality = "simple";
  if (matchScore >= 4) {
    quality = "rare";
  } else if (matchScore >= 2) {
    quality = "fine";
  }

  const qualityBonus = quality === "rare" ? 3 : quality === "fine" ? 1 : 0;
  const circulationValue = 1 + matchScore + qualityBonus;

  return { matchScore, quality, circulationValue, matchedTags };
}

export function craftLabel(emotion: Emotion, vessel: VesselKind, quality: Quality): string {
  const vesselName = VESSEL_LABELS[vessel];
  const tagHint = emotion.tags[0] ?? "心绪";
  if (quality === "rare") {
    return `「${tagHint}」之${vesselName}·珍藏`;
  }
  if (quality === "fine") {
    return `细诉的${vesselName}`;
  }
  return `一缕${vesselName}`;
}

/** 温存获取：流通价值为主，赠予额外 +1 心意 */
export function warmthFromCirculation(
  circulationValue: number,
  action: "display" | "gift",
): number {
  return circulationValue + (action === "gift" ? 1 : 0);
}

export function buildMomentCard(
  emotion: Emotion,
  vessel: VesselKind,
  quality: Quality,
  action: "display" | "gift",
): string {
  const vesselName = VESSEL_LABELS[vessel];
  const verb = action === "gift" ? "被轻轻送出" : "在货架上等候知音";
  const qualityHint =
    quality === "rare" ? "几乎能听见呼吸" : quality === "fine" ? "带着清晰的温度" : "朴素而真实";
  return `${sanitizeDisplayText(emotion.guestName, 32)}的心情，化作${qualityHint}的${vesselName}，${verb}。原文：「${sanitizeDisplayText(emotion.text, 120)}」`;
}
