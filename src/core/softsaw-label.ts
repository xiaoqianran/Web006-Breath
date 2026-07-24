/**
 * 金工锯与锯条叙事（纯函数，可单测）
 * 锯一缝：不是急着切开，是「让硬边也能被温柔地锯开缝」。
 */

export function formatJewelerSawLine(day: number): string {
  if (day % 3 === 0) return "金工锯静放：框沿还带着一点木的温。";
  if (day % 2 === 0) return "锯很轻：只锯一缝，不硬推。";
  return "金工锯安静：专门给愿意把硬边也轻轻锯开的人。";
}

export function formatSawBladeLine(warmth: number): string {
  if (warmth <= 0) return "锯条还新：等第一份温存再装第一根。";
  if (warmth < 12) return "条微紧：像轻轻说「锯一下就好」。";
  if (warmth < 24) return "条穿过金属：像店把硬边也锯成缝。";
  return "条与温存同软：锯到了，也不伤手。";
}

export function formatSoftsawAside(historyCount: number): string {
  if (historyCount <= 0) return "锯还空：第一笔流通会留下第一缝被锯过的线。";
  if (historyCount < 20) return `约锯过 ${historyCount} 次：每一次都是愿意被温柔开缝的许可。`;
  return `逾 ${historyCount} 次轻锯：框沿叠着被温柔装过的条。`;
}

export function formatSoftsawEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好金工锯与锯条：今天从愿意锯一点硬边开始。";
  if (circulationsToday < 3) return "取锯、装条、轻推：流通也是一种轻轻的开缝。";
  return "忙完把条收好——锯完了，人也要松一松腕。";
}

export function formatSoftsawPair(day: number, warmth: number): string {
  return `${formatJewelerSawLine(day)} ${formatSawBladeLine(warmth)}`;
}
