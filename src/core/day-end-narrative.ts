/**
 * 打烊叙事文案（纯函数，可单测）
 * 把温存、口碑、赠予比例、再访线索收成几句文艺短句。
 */
import { formatWarmthLine, warmthRankTitle } from "./warmth-label";
import { formatReputationLine, reputationRankTitle } from "./reputation";
import { topFavoredGuests } from "./favor";
import { computeSessionStats, type SessionStats } from "./stats";
import type { GameState } from "./types";

export interface DayEndNarrative {
  warmthLine: string;
  reputationLine: string;
  circulationLine: string;
  favorLine: string;
  closingLine: string;
}

export function buildDayEndNarrative(state: GameState): DayEndNarrative {
  const stats = computeSessionStats(state);
  return narrativeFromStats(state, stats);
}

export function narrativeFromStats(
  state: Pick<GameState, "warmth" | "reputation" | "history" | "circulationsToday">,
  stats: SessionStats,
): DayEndNarrative {
  const warmthLine = formatWarmthLine(state.warmth);
  const reputationLine = formatReputationLine(state.reputation);
  const giftRatio =
    stats.circulations > 0 ? stats.gifts / stats.circulations : 0;
  let circulationLine: string;
  if (stats.circulations === 0) {
    circulationLine = "今天几乎没有流通，店里安静得像在等第一位客人。";
  } else if (giftRatio >= 0.66) {
    circulationLine = `今日流通 ${stats.circulations} 次，多半直接赠予——心意走得快。`;
  } else if (giftRatio <= 0.33 && stats.displays > 0) {
    circulationLine = `今日流通 ${stats.circulations} 次，多半上架静候——货架在替你守夜。`;
  } else {
    circulationLine = `今日流通 ${stats.circulations} 次（赠予 ${stats.gifts} / 上架 ${stats.displays}），节奏刚好。`;
  }

  const top = topFavoredGuests(state as GameState, 1)[0];
  const favorLine = top
    ? `最记得你的人是${top.name}（好感 ${top.favor}），门会为故人留一盏灯。`
    : "还没有常客的名字刻在柜台上，明天会有人留下脚印。";

  const closingLine = formatDayEndClosing(
    state.warmth,
    state.reputation,
    stats.circulations,
  );

  return { warmthLine, reputationLine, circulationLine, favorLine, closingLine };
}

/** 打烊收束短句 */
export function formatDayEndClosing(
  warmth: number,
  reputation: number,
  circulations: number,
): string {
  if (circulations === 0) {
    return "把灯拧到最暗，明天再推开窗帘。";
  }
  if (warmth >= 24 && reputation >= 12) {
    return `「${warmthRankTitle(warmth)}」又兼「${reputationRankTitle(reputation)}」——这间铺子被记得了。`;
  }
  if (warmth >= 12) {
    return `掌心的暖还在（${warmthRankTitle(warmth)}），可以安心打烊了。`;
  }
  if (reputation >= 6) {
    return `街角有人提起这间店（${reputationRankTitle(reputation)}），门帘可以轻轻放下。`;
  }
  return "一天的情绪都安放好了，门帘可以轻轻放下。";
}

/** 打烊页综合摘要（一行串起来也可拆开展示） */
export function formatDayEndNarrativeBlock(n: DayEndNarrative): string {
  return [n.warmthLine, n.reputationLine, n.circulationLine, n.favorLine, n.closingLine].join(
    " ",
  );
}
