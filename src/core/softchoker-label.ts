/**
 * 颈圈与丝带扣叙事（纯函数，可单测）
 * 系一下：不是硬勒紧，是「让颈间也能被温柔地绕住」。
 */

export function formatSoftChokerLine(day: number): string {
  if (day % 3 === 0) return "颈圈静放：圈沿还带着一点细的光。";
  if (day % 2 === 0) return "圈很软：只绕一点，不硬勒。";
  return "颈圈安静：专门给愿意把颈间也温柔绕住的人。";
}

export function formatChokerRibbonLine(warmth: number): string {
  if (warmth <= 0) return "丝带扣还松：等第一份温存再轻轻系上。";
  if (warmth < 12) return "带微垂：像轻轻说「系一下就好」。";
  if (warmth < 24) return "带带着圈：像店把散的也系成安。";
  return "带与温存同软：系到了，也不紧。";
}

export function formatSoftchokerAside(historyCount: number): string {
  if (historyCount <= 0) return "圈还齐：第一笔流通会留下第一圈被温柔绕过的光。";
  if (historyCount < 20) return `约系过 ${historyCount} 次：每一次都是愿意被温柔绕住的许可。`;
  return `逾 ${historyCount} 次轻系：带沿叠着被温柔绕过的弧。`;
}

export function formatSoftchokerEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好颈圈与丝带扣：今天从愿意轻轻系一下开始。";
  if (circulationsToday < 3) return "绕圈、系带、轻扣：流通也是一种轻轻的绕住。";
  return "忙完把带松开——系完了，人也要松一松肩。";
}

export function formatSoftchokerPair(day: number, warmth: number): string {
  return `${formatSoftChokerLine(day)} ${formatChokerRibbonLine(warmth)}`;
}
