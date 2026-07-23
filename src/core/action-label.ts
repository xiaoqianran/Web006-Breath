/**
 * 流通动作叙事文案（纯函数，可单测）
 */
import type { CirculationAction } from "./types";

export function actionLabel(action: CirculationAction): string {
  return action === "gift" ? "赠予" : "上架";
}

export function actionNarrative(action: CirculationAction): string {
  if (action === "gift") {
    return "直接交到需要的人手上，心意先一步抵达。";
  }
  return "摆上货架，等待知音轻轻带走。";
}

export function formatActionLine(action: CirculationAction): string {
  return `${actionLabel(action)} · ${actionNarrative(action)}`;
}

/** 流通完成后的结果短句 */
export function formatCirculationResultLine(
  action: CirculationAction,
  warmthGained: number,
): string {
  return `${actionLabel(action)}完成，温存 +${warmthGained}。${actionNarrative(action)}`;
}
