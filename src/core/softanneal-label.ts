/**
 * 退火盘与退火钳叙事（纯函数，可单测）
 * 热一软：不是急着淬火，是「让硬丝也能被温柔地热软」。
 */

export function formatAnnealPanLine(day: number): string {
  if (day % 3 === 0) return "退火盘静放：盘沿还带着一点暖的痕。";
  if (day % 2 === 0) return "盘很稳：只热一软，不硬烧。";
  return "退火盘安静：专门给愿意把硬丝也轻轻热软的人。";
}

export function formatAnnealTongsLine(warmth: number): string {
  if (warmth <= 0) return "退火钳还合：等第一份温存再夹第一段。";
  if (warmth < 12) return "钳微暖：像轻轻说「热一下就好」。";
  if (warmth < 24) return "钳夹着丝：像店把硬丝也热成软。";
  return "钳与温存同软：热到了，也不烫手。";
}

export function formatSoftannealAside(historyCount: number): string {
  if (historyCount <= 0) return "盘还空：第一笔流通会留下第一段被热过的软。";
  if (historyCount < 20) return `约热过 ${historyCount} 次：每一次都是愿意被温柔变软的许可。`;
  return `逾 ${historyCount} 次轻热：盘沿叠着被温柔夹过的丝。`;
}

export function formatSoftannealEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好退火盘与退火钳：今天从愿意热一点硬丝开始。";
  if (circulationsToday < 3) return "取盘、夹丝、轻热：流通也是一种轻轻的变软。";
  return "忙完把钳放好——热完了，人也要松一松腕。";
}

export function formatSoftannealPair(day: number, warmth: number): string {
  return `${formatAnnealPanLine(day)} ${formatAnnealTongsLine(warmth)}`;
}
