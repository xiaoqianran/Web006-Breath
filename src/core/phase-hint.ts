/**
 * 阶段操作提示（纯函数，可单测）
 */
import type { GamePhase } from "./types";
import { phaseLabel } from "./phase-label";

const HINTS: Record<GamePhase, string> = {
  awaiting_emotion: "可以接待下一位，听听今天的故事。",
  awaiting_vessel: "为这份心情选一种容器形态（花/茶/画/音乐/小物件）。",
  awaiting_circulation: "上架等待知音，或直接赠予需要的人。",
  result: "流通已完成，可以继续接待或查看货架。",
  day_complete: "今日目标已达成，可以进入下一日或回主菜单。",
};

export function phaseHint(phase: GamePhase): string {
  return HINTS[phase] ?? "店内暂时无事。";
}

export function formatPhaseHintLine(phase: GamePhase): string {
  return `${phaseLabel(phase)}：${phaseHint(phase)}`;
}
