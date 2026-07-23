import type { Emotion, GameState, VesselKind } from "./types";

/**
 * 客人对特定形态的隐式偏好：基于其 tags 与 VESSEL 擅长的重合。
 * 返回 0–1 归一化「默契度」，供 UI 弱展示或日后 AI 对话。
 */
import { VESSEL_AFFINITY } from "./types";
import { evaluateMatch } from "./matching";

export function guestVesselAffinity(emotion: Emotion, vessel: VesselKind): number {
  const maxPossible = Math.min(3, emotion.tags.length) * 2 + (emotion.intensity >= 4 ? 1 : 0);
  if (maxPossible <= 0) return 0;
  const score = evaluateMatch(emotion, vessel).matchScore;
  return Math.min(1, score / maxPossible);
}

export function bestVesselForGuest(emotion: Emotion): VesselKind {
  const vessels = Object.keys(VESSEL_AFFINITY) as VesselKind[];
  let best: VesselKind = vessels[0]!;
  let bestScore = -1;
  for (const v of vessels) {
    const s = evaluateMatch(emotion, v).matchScore;
    if (s > bestScore) {
      bestScore = s;
      best = v;
    }
  }
  return best;
}

/** 本局平均匹配分（展示经营用心程度） */
export function averageMatchScore(state: GameState): number {
  if (state.history.length === 0) return 0;
  const sum = state.history.reduce((a, h) => a + h.item.matchScore, 0);
  return sum / state.history.length;
}
