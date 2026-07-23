import type { GameState } from "./types";

export interface StateIssues {
  ok: boolean;
  messages: string[];
}

/** 轻量运行时结构检查（非 zod，可单测） */
export function inspectGameState(state: unknown): StateIssues {
  const messages: string[] = [];
  if (!state || typeof state !== "object") {
    return { ok: false, messages: ["state 不是对象"] };
  }
  const s = state as Partial<GameState>;
  if (typeof s.day !== "number" || s.day < 1) messages.push("day 无效");
  if (typeof s.warmth !== "number" || s.warmth < 0) messages.push("warmth 无效");
  if (typeof s.reputation !== "number" || s.reputation < 0) messages.push("reputation 无效");
  if (!Array.isArray(s.queue)) messages.push("queue 非数组");
  if (!Array.isArray(s.history)) messages.push("history 非数组");
  if (!Array.isArray(s.shelf)) messages.push("shelf 非数组");
  if (!s.config || typeof s.config.dayGoalCirculations !== "number") {
    messages.push("config 无效");
  }
  return { ok: messages.length === 0, messages };
}
