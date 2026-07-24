/**
 * 发夹与弹簧扣叙事（纯函数，可单测）
 * 夹一下：不是硬夹紧，是「让碎发也能被温柔地拢住」。
 */

export function formatSoftBarretteLine(day: number): string {
  if (day % 3 === 0) return "发夹静放：夹沿还带着一点细的光。";
  if (day % 2 === 0) return "夹很轻：只拢一点，不硬卡。";
  return "发夹安静：专门给愿意把碎发也温柔拢住的人。";
}

export function formatBarretteSpringLine(warmth: number): string {
  if (warmth <= 0) return "弹簧扣还松：等第一份温存再轻轻扣上。";
  if (warmth < 12) return "簧微紧：像轻轻说「夹一下就好」。";
  if (warmth < 24) return "簧带着夹：像店把散的发也拢成安。";
  return "簧与温存同软：夹到了，也不疼。";
}

export function formatSoftbarretteAside(historyCount: number): string {
  if (historyCount <= 0) return "夹还齐：第一笔流通会留下第一记被温柔拢过的光。";
  if (historyCount < 20) return `约夹过 ${historyCount} 次：每一次都是愿意被温柔拢住的许可。`;
  return `逾 ${historyCount} 次轻夹：夹沿叠着被温柔拢过的弧。`;
}

export function formatSoftbarretteEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好发夹与弹簧扣：今天从愿意轻轻拢一下开始。";
  if (circulationsToday < 3) return "开簧、拢发、轻扣：流通也是一种轻轻的拢住。";
  return "忙完把夹摘下——夹完了，人也要松一松肩。";
}

export function formatSoftbarrettePair(day: number, warmth: number): string {
  return `${formatSoftBarretteLine(day)} ${formatBarretteSpringLine(warmth)}`;
}
