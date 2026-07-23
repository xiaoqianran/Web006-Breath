import type { GamePhase } from "./types";

const LABELS: Record<GamePhase, string> = {
  awaiting_emotion: "等候接待",
  awaiting_vessel: "选择容器",
  awaiting_circulation: "完成流通",
  result: "流通结果",
  day_complete: "今日打烊",
};

export function phaseLabel(phase: GamePhase): string {
  return LABELS[phase] ?? phase;
}
