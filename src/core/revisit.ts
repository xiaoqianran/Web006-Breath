import type { CirculationRecord, Emotion, GameState } from "./types";
import { rebuildFavorMap } from "./favor";

/**
 * 根据历史流通生成「再访」客人：被赠予过的情绪可能以新文案回来道谢。
 */
export function buildRevisitGuest(record: CirculationRecord): Emotion {
  const actionWord = record.action === "gift" ? "收下" : "买走";
  return {
    id: `revisit_${record.item.id}`,
    guestName: extractGuestName(record.momentCard) ?? "故人",
    text: `上次那件被${actionWord}的东西，我一直带着。今天想再留下一点心情。`,
    tags: inferTagsFromLabel(record.item.label),
    intensity: Math.min(5, 2 + Math.floor(record.item.matchScore / 2)),
  };
}

function extractGuestName(momentCard: string): string | null {
  const m = momentCard.match(/^(.+?)的心情/);
  return m?.[1] ?? null;
}

function inferTagsFromLabel(label: string): Emotion["tags"] {
  if (label.includes("想念") || label.includes("温柔")) return ["想念", "温柔"];
  if (label.includes("珍藏")) return ["期待", "勇气"];
  return ["安心", "释然"];
}

/** 因高好感触发再访的最低好感阈值 */
export const REVISIT_FAVOR_THRESHOLD = 5;

export interface RevisitEligibility {
  allowed: boolean;
  reason: "no_gift" | "even_day" | "high_favor" | "blocked";
  topFavor: number;
  topName: string | null;
}

/** 纯函数：是否允许再访及原因（可单测） */
export function evaluateRevisitEligibility(state: GameState): RevisitEligibility {
  const gifted = [...state.history].reverse().find((h) => h.action === "gift");
  if (!gifted) {
    return { allowed: false, reason: "no_gift", topFavor: 0, topName: null };
  }
  const favors = rebuildFavorMap(state.history);
  const entries = Object.entries(favors);
  const topFavor = entries.length ? Math.max(...entries.map(([, v]) => v)) : 0;
  const topName =
    entries.length > 0
      ? entries.sort((a, b) => b[1] - a[1])[0]![0]
      : null;
  if (topFavor >= REVISIT_FAVOR_THRESHOLD) {
    return { allowed: true, reason: "high_favor", topFavor, topName };
  }
  if (state.day % 2 === 0) {
    return { allowed: true, reason: "even_day", topFavor, topName };
  }
  return { allowed: false, reason: "blocked", topFavor, topName };
}

/** 再访资格的 HUD/读屏提示（无则空串） */
export function formatRevisitHint(state: GameState): string {
  const e = evaluateRevisitEligibility(state);
  if (!e.allowed) {
    if (e.reason === "no_gift") return "尚未有赠予记录，故人还不会推门。";
    if (e.topFavor > 0) {
      return `最高好感 ${e.topFavor}/${REVISIT_FAVOR_THRESHOLD}，或等偶数日再访。`;
    }
    return "";
  }
  if (e.reason === "high_favor" && e.topName) {
    return `${e.topName} 好感已满 ${e.topFavor}，明日可能再访。`;
  }
  return "偶数日：曾受赠的客人可能回来道谢。";
}

/**
 * 再访条件：
 * - 偶数日；或
 * - 任意日但最高好感 ≥ REVISIT_FAVOR_THRESHOLD
 * 且存在赠予历史。
 */
export function maybeAppendRevisit(state: GameState, queue: Emotion[]): Emotion[] {
  const gifted = [...state.history].reverse().find((h) => h.action === "gift");
  if (!gifted) return queue;
  const elig = evaluateRevisitEligibility(state);
  if (!elig.allowed) return queue;
  const guest = buildRevisitGuest(gifted);
  if (elig.topName && elig.topFavor >= REVISIT_FAVOR_THRESHOLD) {
    guest.guestName = elig.topName;
  }
  if (queue.some((e) => e.id === guest.id)) return queue;
  return [...queue, guest];
}
