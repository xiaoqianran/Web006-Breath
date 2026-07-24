/**
 * 抓夹与铰链叙事（纯函数，可单测）
 * 夹一下：不是硬咬紧，是「让发束也能被温柔地收住」。
 */

export function formatSoftClawLine(day: number): string {
  if (day % 3 === 0) return "抓夹静放：齿沿还带着一点细的光。";
  if (day % 2 === 0) return "夹很轻：只收一点，不硬咬。";
  return "抓夹安静：专门给愿意把发束也温柔收住的人。";
}

export function formatClawHingeLine(warmth: number): string {
  if (warmth <= 0) return "铰链还松：等第一份温存再轻轻合上。";
  if (warmth < 12) return "链微合：像轻轻说「夹一下就好」。";
  if (warmth < 24) return "链带着夹：像店把散的发也收成安。";
  return "链与温存同软：夹到了，也不疼。";
}

export function formatSoftclawAside(historyCount: number): string {
  if (historyCount <= 0) return "夹还齐：第一笔流通会留下第一记被温柔收过的光。";
  if (historyCount < 20) return `约夹过 ${historyCount} 次：每一次都是愿意被温柔收住的许可。`;
  return `逾 ${historyCount} 次轻夹：齿沿叠着被温柔收过的弧。`;
}

export function formatSoftclawEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好抓夹与铰链：今天从愿意轻轻收一下开始。";
  if (circulationsToday < 3) return "开链、拢发、轻合：流通也是一种轻轻的收住。";
  return "忙完把夹打开——夹完了，人也要松一松肩。";
}

export function formatSoftclawPair(day: number, warmth: number): string {
  return `${formatSoftClawLine(day)} ${formatClawHingeLine(warmth)}`;
}
