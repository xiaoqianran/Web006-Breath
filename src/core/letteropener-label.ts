/**
 * 奶油信封与拆信刀叙事（纯函数，可单测）
 * 拆一封：不是窥探，是「让被封住的心情也能被温柔地打开」。
 */

export function formatCreamEnvelopeLine(day: number): string {
  if (day % 3 === 0) return "奶油信封静放：封口还带着一点未拆的折。";
  if (day % 2 === 0) return "信很轻：只装几行，不压手。";
  return "信封安静：专门给愿意把话也轻轻拆开的人。";
}

export function formatLetterOpenerLine(warmth: number): string {
  if (warmth <= 0) return "拆信刀还收着：等第一份温存再划第一道口。";
  if (warmth < 12) return "刀刃微亮：像轻轻说「从边缝进去就好」。";
  if (warmth < 24) return "刀沿信封边划过：像店把被封住的温柔也打开。";
  return "刀与温存同细：拆到了，也不伤字。";
}

export function formatLetteropenerAside(historyCount: number): string {
  if (historyCount <= 0) return "信还封着：第一笔流通会留下第一封被拆开的话。";
  if (historyCount < 20) return `约拆过 ${historyCount} 次：每一次都是愿意被温柔打开的许可。`;
  return `逾 ${historyCount} 次轻拆：刀沿叠着被温柔拆过的口。`;
}

export function formatLetteropenerEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好信封与拆信刀：今天从愿意打开一封开始。";
  if (circulationsToday < 3) return "取信、轻拆、展开：流通也是一种轻轻的倾听。";
  return "忙完把刀擦净——拆完了，人也要松一松肩。";
}

export function formatLetteropenerPair(day: number, warmth: number): string {
  return `${formatCreamEnvelopeLine(day)} ${formatLetterOpenerLine(warmth)}`;
}
