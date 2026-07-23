/**
 * 队列状态文案（纯函数）
 */
import type { GameState } from "./types";

export function formatQueueStatus(state: Pick<GameState, "queue" | "phase" | "day">): string {
  const n = state.queue.length;
  if (n === 0) {
    if (state.phase === "day_complete") return "今日客人已散，可以打烊休息。";
    return "暂无新客人在等候，可以整理货架或打烊。";
  }
  if (n === 1) return "门口还站着一位，带着未说完的心情。";
  return `等候 ${n} 位客人，店铃可能还会再响。`;
}

export function hasWaitingGuests(state: Pick<GameState, "queue">): boolean {
  return (state.queue?.length ?? 0) > 0;
}
