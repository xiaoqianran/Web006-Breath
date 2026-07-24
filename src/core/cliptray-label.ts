/**
 * 回形针与小托盘叙事（纯函数，可单测）
 * 把散落的纸页轻轻拢住：不是归档强迫症，是「别让温柔飞散」。
 */

export function formatPaperClipLine(day: number): string {
  if (day % 3 === 0) return "回形针别住一角：金属还带着指尖的凉。";
  if (day % 2 === 0) return "夹很轻：只拢住纸页，不拢住呼吸。";
  return "回形针安静：专门给愿意把散页轻轻归拢的人。";
}

export function formatMiniTrayLine(warmth: number): string {
  if (warmth <= 0) return "小托盘还空：等第一份温存再盛第一叠。";
  if (warmth < 12) return "盘沿微亮：像轻轻说「放这里就好」。";
  if (warmth < 24) return "小托盘接住夹好的页：像店把散落的话收成一摞。";
  return "盘与温存同浅：盛住了，也不压扁纸的空。";
}

export function formatCliptrayAside(historyCount: number): string {
  if (historyCount <= 0) return "夹与盘还闲着：第一笔流通会留下第一叠归拢。";
  if (historyCount < 20) return `约拢过 ${historyCount} 叠纸页：每一叠都是愿意被好好收着的许可。`;
  return `逾 ${historyCount} 次归拢：托盘叠着被温柔夹过的散落。`;
}

export function formatCliptrayEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好回形针与小托盘：今天从愿意归拢散页开始。";
  if (circulationsToday < 3) return "别夹、入盘、放稳：流通也是一种轻轻的收纳。";
  return "忙完把回形针放回盘角——拢完了，人也要松一松指尖。";
}

export function formatCliptrayPair(day: number, warmth: number): string {
  return `${formatPaperClipLine(day)} ${formatMiniTrayLine(warmth)}`;
}
