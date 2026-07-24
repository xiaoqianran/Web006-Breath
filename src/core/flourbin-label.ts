/**
 * 面粉罐与量杯叙事（纯函数，可单测）
 * 量一点白：不是精确到苛刻，是「让动手也有温柔的刻度」。
 */

export function formatFlourBinLine(day: number): string {
  if (day % 3 === 0) return "面粉罐揭盖：罐口还飘着一点白的香。";
  if (day % 2 === 0) return "粉很软：只记分量，不记完美。";
  return "面粉罐安静：专门给愿意动手揉一揉的人。";
}

export function formatMeasureCupLine(warmth: number): string {
  if (warmth <= 0) return "量杯还空：等第一份温存再舀第一杯。";
  if (warmth < 12) return "杯壁微粉：像轻轻说「大概就好」。";
  if (warmth < 24) return "量杯沿有刻度：像店把分寸也画成可见的温柔。";
  return "杯与温存同准：量够了，也不苛求。";
}

export function formatFlourbinAside(historyCount: number): string {
  if (historyCount <= 0) return "罐还合着：第一笔流通会留下第一杯白粉。";
  if (historyCount < 20) return `约量过 ${historyCount} 杯粉：每一次都是愿意被温柔动手的许可。`;
  return `逾 ${historyCount} 次量粉：杯沿叠着被温柔刻过的白。`;
}

export function formatFlourbinEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好面粉罐与量杯：今天从愿意量一点白开始。";
  if (circulationsToday < 3) return "揭盖、量粉、入盆：流通也是一种轻轻的动手。";
  return "忙完把罐盖好——量完了，人也要松一松腕。";
}

export function formatFlourbinPair(day: number, warmth: number): string {
  return `${formatFlourBinLine(day)} ${formatMeasureCupLine(warmth)}`;
}
