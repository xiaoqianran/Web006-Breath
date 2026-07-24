/**
 * 爪撬与石座叙事（纯函数，可单测）
 * 张开一点：不是硬扳，是「让托住的也能被温柔地留住」。
 */

export function formatProngOpenerLine(day: number): string {
  if (day % 3 === 0) return "爪撬静放：尖端还带着一点细的光。";
  if (day % 2 === 0) return "撬很稳：只张一点，不硬扳。";
  return "爪撬安静：专门给愿意把托住的也温柔留住的人。";
}

export function formatStoneSeatLine(warmth: number): string {
  if (warmth <= 0) return "石座还空：等第一份温存再轻轻坐上。";
  if (warmth < 12) return "座微稳：像轻轻说「托一下就好」。";
  if (warmth < 24) return "座带着爪：像店把闪亮的也托成安。";
  return "座与温存同软：托到了，也不松。";
}

export function formatSoftprongAside(historyCount: number): string {
  if (historyCount <= 0) return "爪还齐：第一笔流通会留下第一记被温柔张开的托。";
  if (historyCount < 20) return `约托过 ${historyCount} 次：每一次都是愿意被温柔留住的许可。`;
  return `逾 ${historyCount} 次轻托：座沿叠着被温柔张过的爪。`;
}

export function formatSoftprongEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好爪撬与石座：今天从愿意轻轻托一下开始。";
  if (circulationsToday < 3) return "张爪、落座、轻托：流通也是一种轻轻的留住。";
  return "忙完把撬放好——托完了，人也要松一松指。";
}

export function formatSoftprongPair(day: number, warmth: number): string {
  return `${formatProngOpenerLine(day)} ${formatStoneSeatLine(warmth)}`;
}
