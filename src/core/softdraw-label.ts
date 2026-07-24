/**
 * 抽丝板与抽丝钳叙事（纯函数，可单测）
 * 抽一孔：不是急着变细，是「让粗丝也能被温柔地抽成细」。
 */

export function formatDrawPlateLine(day: number): string {
  if (day % 3 === 0) return "抽丝板静放：孔沿还带着一点金属的凉。";
  if (day % 2 === 0) return "孔很匀：只抽一孔，不硬拽。";
  return "抽丝板安静：专门给愿意把粗丝也轻轻抽细的人。";
}

export function formatDrawTongsLine(warmth: number): string {
  if (warmth <= 0) return "抽丝钳还合：等第一份温存再夹第一截。";
  if (warmth < 12) return "钳微紧：像轻轻说「抽一下就好」。";
  if (warmth < 24) return "钳咬住丝端：像店把粗丝也抽成细。";
  return "钳与温存同软：抽到了，也不伤丝。";
}

export function formatSoftdrawAside(historyCount: number): string {
  if (historyCount <= 0) return "板还净：第一笔流通会留下第一孔被抽过的痕。";
  if (historyCount < 20) return `约抽过 ${historyCount} 次：每一次都是愿意被温柔变细的许可。`;
  return `逾 ${historyCount} 次轻抽：孔沿叠着被温柔拽过的丝。`;
}

export function formatSoftdrawEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好抽丝板与抽丝钳：今天从愿意抽一点粗丝开始。";
  if (circulationsToday < 3) return "取板、夹丝、轻抽：流通也是一种轻轻的变细。";
  return "忙完把钳放好——抽完了，人也要松一松腕。";
}

export function formatSoftdrawPair(day: number, warmth: number): string {
  return `${formatDrawPlateLine(day)} ${formatDrawTongsLine(warmth)}`;
}
