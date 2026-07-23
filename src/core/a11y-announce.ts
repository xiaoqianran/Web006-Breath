/**
 * 读屏播报文案（纯函数，无 DOM）。
 * UI 写入 aria-live 区域即可。
 */

import { phaseLabel } from "./phase-label";
import { phaseHint } from "./phase-hint";
import type { GamePhase } from "./types";

export type AppViewName =
  | "menu"
  | "shop"
  | "about"
  | "codex"
  | "settings"
  | "tutorial";

const VIEW_LABELS: Record<AppViewName, string> = {
  menu: "主菜单",
  shop: "店内经营",
  about: "关于",
  codex: "瞬间图鉴",
  settings: "设置",
  tutorial: "教程",
};

/** 阶段切换播报 */
export function announcePhaseChange(phase: GamePhase): string {
  return `阶段：${phaseLabel(phase)}`;
}

/** 解锁播报 */
export function announceUnlock(titles: readonly string[]): string {
  if (titles.length === 0) return "";
  return `解锁：${titles.join("、")}`;
}

/** 界面切换播报 */
export function announceViewChange(view: AppViewName): string {
  return `界面：${VIEW_LABELS[view] ?? view}`;
}

export function viewLabel(view: AppViewName): string {
  return VIEW_LABELS[view] ?? view;
}

/** 帮助对话框固定文案 */
export function helpDialogA11y(): {
  title: string;
  closeLabel: string;
  descriptionId: string;
} {
  return {
    title: "操作帮助",
    closeLabel: "关闭帮助",
    descriptionId: "help-dialog-desc",
  };
}

/** 合并多条播报，过滤空串 */
export function joinAnnouncements(...parts: Array<string | null | undefined>): string {
  return parts
    .map((p) => (p ?? "").trim())
    .filter(Boolean)
    .join("。");
}

/** 流通/打烊等状态句 */
export function announceDayComplete(day: number, warmth: number): string {
  return `第 ${day} 日打烊，温存 ${warmth}`;
}

export function announceCirculation(qualityLabel: string): string {
  return `流通完成，品质 ${qualityLabel}`;
}

/** 委托履约播报 */
export function announceOrderFulfilled(
  guestName: string,
  bonusWarmth: number,
): string {
  return `委托完成：${guestName}满意收下，温存加 ${bonusWarmth}`;
}

/** 好感榜首播报 */
export function announceFavorTop(name: string, favor: number, rankTitle: string): string {
  return `好感领先：${name}，${rankTitle}，好感 ${favor}`;
}

/** 阶段切换时附带操作提示 */
export function announcePhaseWithHint(phase: GamePhase): string {
  return `${announcePhaseChange(phase)}。${phaseHint(phase)}`;
}

