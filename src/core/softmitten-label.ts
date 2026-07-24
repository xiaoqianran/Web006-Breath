/**
 * 软织连指手套与柳编筐叙事（纯函数，可单测）
 * 戴一双：不是怕冷说教，是「让手心的凉也能被温柔地捂住」。
 */

export function formatSoftMittenLine(day: number): string {
  if (day % 3 === 0) return "软织连指手套叠好：毛圈还带着一点暖的绒。";
  if (day % 2 === 0) return "套很软：只捂一掌，不勒腕。";
  return "连指手套安静：专门给愿意把手心也轻轻捂住的人。";
}

export function formatMittenBasketLine(warmth: number): string {
  if (warmth <= 0) return "柳编手套筐还空：等第一份温存再放第一双。";
  if (warmth < 12) return "筐沿微软：像轻轻说「放这里就好」。";
  if (warmth < 24) return "手套落入筐里：像店把掌心的暖也留给出门的人。";
  return "筐与温存同浅：接住了，也不压扁绒。";
}

export function formatSoftmittenAside(historyCount: number): string {
  if (historyCount <= 0) return "套还叠着：第一笔流通会留下第一双被捂过的暖。";
  if (historyCount < 20) return `约递过 ${historyCount} 次：每一次都是愿意被温柔捂手的许可。`;
  return `逾 ${historyCount} 次轻递：筐沿叠着被温柔戴过的绒。`;
}

export function formatSoftmittenEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好连指手套与柳筐：今天从愿意捂一点手暖开始。";
  if (circulationsToday < 3) return "取套、轻戴、放回：流通也是一种轻轻的护手。";
  return "忙完把筐理齐——递完了，人也要松一松腕。";
}

export function formatSoftmittenPair(day: number, warmth: number): string {
  return `${formatSoftMittenLine(day)} ${formatMittenBasketLine(warmth)}`;
}
