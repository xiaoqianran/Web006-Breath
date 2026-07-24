/**
 * 小奶盅与奶油勺叙事（纯函数，可单测）
 * 茶里加一点白：不是冲淡，是「让烫也温柔一点」。
 */

export function formatMilkJugLine(day: number): string {
  if (day % 3 === 0) return "小奶盅倾一点：盅口还带着一点凉的白。";
  if (day % 2 === 0) return "奶很轻：只软化烫，不盖过茶香。";
  return "奶盅安静：专门给愿意让烫也软一点的人。";
}

export function formatCreamSpoonLine(warmth: number): string {
  if (warmth <= 0) return "奶油勺还闲：等第一份温存再搅第一圈。";
  if (warmth < 12) return "勺面微润：像轻轻说「再转一圈就好」。";
  if (warmth < 24) return "奶油勺在杯里画圆：像店把急也搅慢了。";
  return "勺与温存同圆：搅匀了，也不打散香。";
}

export function formatMilkjugAside(historyCount: number): string {
  if (historyCount <= 0) return "奶盅还满着：第一笔流通会留下第一圈软化。";
  if (historyCount < 20) return `约倾过 ${historyCount} 次奶：每一次都是愿意被温柔冲淡急的许可。`;
  return `逾 ${historyCount} 次搅软：盅沿叠着被温柔圆过的烫。`;
}

export function formatMilkjugEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好奶盅与奶油勺：今天从愿意软化一口烫开始。";
  if (circulationsToday < 3) return "倾奶、搅圆、递杯：流通也是一种轻轻的降温。";
  return "忙完把勺搁回盅边——软完了，人也要松一松腕。";
}

export function formatMilkjugPair(day: number, warmth: number): string {
  return `${formatMilkJugLine(day)} ${formatCreamSpoonLine(warmth)}`;
}
