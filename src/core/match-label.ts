/**
 * 匹配分 / 品质叙事文案（纯函数，可单测）
 */
import type { Quality } from "./types";
import { QUALITY_LABELS } from "./types";

/** 匹配分档位称号 */
export function matchScoreRankTitle(matchScore: number): string {
  if (matchScore >= 5) return "心有灵犀";
  if (matchScore >= 4) return "贴合得很";
  if (matchScore >= 2) return "大致对味";
  if (matchScore >= 1) return "略有共鸣";
  return "尚在试探";
}

export function formatMatchScoreLine(matchScore: number): string {
  return `匹配 ${matchScore} · ${matchScoreRankTitle(matchScore)}`;
}

export function formatQualityLine(quality: Quality): string {
  const q = QUALITY_LABELS[quality] ?? quality;
  if (quality === "rare") return `品质 ${q} · 珍藏一念`;
  if (quality === "fine") return `品质 ${q} · 细心成器`;
  return `品质 ${q} · 朴素成章`;
}

/** 转化台综合短句 */
export function formatCraftSummary(matchScore: number, quality: Quality): string {
  return `${formatMatchScoreLine(matchScore)}；${formatQualityLine(quality)}`;
}
