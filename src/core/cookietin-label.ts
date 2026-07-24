/**
 * 饼干铁盒与扎带叙事（纯函数，可单测）
 * 装好带走：不是密封交易，是「让刚出炉的温柔也能上路」。
 */

export function formatCookieTinLine(day: number): string {
  if (day % 3 === 0) return "饼干铁盒打开：盒盖还带着一点金属的凉。";
  if (day % 2 === 0) return "盒很轻：只装香气，不装催促。";
  return "铁盒安静：专门给愿意把热香也带走的人。";
}

export function formatTwistTieLine(warmth: number): string {
  if (warmth <= 0) return "扎带还松：等第一份温存再系第一结。";
  if (warmth < 12) return "带身微弯：像轻轻说「系住就不洒」。";
  if (warmth < 24) return "扎带绕过盒口：像店把离店也系成妥帖。";
  return "带与温存同软：系住了，也不勒住香。";
}

export function formatCookietinAside(historyCount: number): string {
  if (historyCount <= 0) return "盒还空着：第一笔流通会留下第一盒可带走的香。";
  if (historyCount < 20) return `约装过 ${historyCount} 盒：每一盒都是愿意被温柔带走的许可。`;
  return `逾 ${historyCount} 盒上路：带结叠着被温柔系过的离店。`;
}

export function formatCookietinEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好铁盒与扎带：今天从愿意装走一份香开始。";
  if (circulationsToday < 3) return "入盒、系带、递出：流通也是一种轻轻的托付。";
  return "忙完把带理顺——装完了，人也要松一松指尖。";
}

export function formatCookietinPair(day: number, warmth: number): string {
  return `${formatCookieTinLine(day)} ${formatTwistTieLine(warmth)}`;
}
