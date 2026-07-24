/**
 * 裁缝粉笔与粉笔托叙事（纯函数，可单测）
 * 画一痕：不是苛刻标记，是「让布上也留下可被温柔擦去的线」。
 * 与 pattern-label 的 formatChalkWheelLine 区分命名。
 */

export function formatSoftTailorChalkLine(day: number): string {
  if (day % 3 === 0) return "裁缝粉笔静放：棱边还带着一点白的粉。";
  if (day % 2 === 0) return "粉很轻：只画一痕，不伤布。";
  return "粉笔安静：专门给愿意把线也轻轻画上的人。";
}

export function formatChalkTrayLine(warmth: number): string {
  if (warmth <= 0) return "粉笔托还空：等第一份温存再放第一块。";
  if (warmth < 12) return "托沿微白：像轻轻说「放这里就好」。";
  if (warmth < 24) return "粉笔落在托里：像店把可擦的线也递给布面。";
  return "托与温存同浅：接住了，也不洒粉。";
}

export function formatSoftchalkAside(historyCount: number): string {
  if (historyCount <= 0) return "粉还整块：第一笔流通会留下第一痕被画过的线。";
  if (historyCount < 20) return `约画过 ${historyCount} 次：每一次都是愿意被温柔标记的许可。`;
  return `逾 ${historyCount} 次轻画：托沿叠着被温柔画过的粉。`;
}

export function formatSoftchalkEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好粉笔与托：今天从愿意画一点线开始。";
  if (circulationsToday < 3) return "取粉、轻画、收好：流通也是一种轻轻的标记。";
  return "忙完把托擦净——画完了，人也要松一松肩。";
}

export function formatSoftchalkPair(day: number, warmth: number): string {
  return `${formatSoftTailorChalkLine(day)} ${formatChalkTrayLine(warmth)}`;
}
