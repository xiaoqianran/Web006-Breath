/**
 * 珠宝钳与斜口剪叙事（纯函数，可单测）
 * 夹一下：不是急着完工，是「让难握的细节也能被温柔地稳住」。
 */

export function formatJewelryPliersLine(day: number): string {
  if (day % 3 === 0) return "珠宝钳静放：钳口还带着一点金属的凉。";
  if (day % 2 === 0) return "钳很稳：只夹一下，不硬拧。";
  return "珠宝钳安静：专门给愿意把难握的细节也轻轻稳住的人。";
}

export function formatFlushCuttersLine(warmth: number): string {
  if (warmth <= 0) return "斜口剪还合：等第一份温存再剪第一截。";
  if (warmth < 12) return "刃微亮：像轻轻说「剪一下就好」。";
  if (warmth < 24) return "剪口贴着线：像店把多余也温柔收掉。";
  return "剪与温存同软：剪到了，也不伤手。";
}

export function formatSoftpliersAside(historyCount: number): string {
  if (historyCount <= 0) return "钳还空：第一笔流通会留下第一下被夹过的痕。";
  if (historyCount < 20) return `约夹过 ${historyCount} 次：每一次都是愿意被温柔稳住的许可。`;
  return `逾 ${historyCount} 次轻夹：钳口叠着被温柔剪过的线。`;
}

export function formatSoftpliersEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好珠宝钳与斜口剪：今天从愿意稳住一点细节开始。";
  if (circulationsToday < 3) return "取钳、轻夹、细剪：流通也是一种轻轻的收尾。";
  return "忙完把钳放好——夹完了，人也要松一松腕。";
}

export function formatSoftpliersPair(day: number, warmth: number): string {
  return `${formatJewelryPliersLine(day)} ${formatFlushCuttersLine(warmth)}`;
}
