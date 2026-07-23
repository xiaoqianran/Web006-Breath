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

/**
 * 再访条件：
 * - 偶数日；或
 * - 任意日但最高好感 ≥ 5
 * 且存在赠予历史。
 */
export function maybeAppendRevisit(state: GameState, queue: Emotion[]): Emotion[] {
  const gifted = [...state.history].reverse().find((h) => h.action === "gift");
  if (!gifted) return queue;
  const favors = rebuildFavorMap(state.history);
  const values = Object.values(favors);
  const topFavor = values.length ? Math.max(...values) : 0;
  const allow = state.day % 2 === 0 || topFavor >= 5;
  if (!allow) return queue;
  const guest = buildRevisitGuest(gifted);
  const topName = Object.entries(favors).sort((a, b) => b[1] - a[1])[0]?.[0];
  if (topName && topFavor >= 5) {
    guest.guestName = topName;
  }
  if (queue.some((e) => e.id === guest.id)) return queue;
  return [...queue, guest];
}
