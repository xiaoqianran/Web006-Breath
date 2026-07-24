/**
 * 发圈与弹力绳叙事（纯函数，可单测）
 * 束一下：不是硬勒发，是「让发尾也能被温柔地收住」。
 */

export function formatSoftScrunchieLine(day: number): string {
  if (day % 3 === 0) return "发圈静放：圈沿还带着一点细的光。";
  if (day % 2 === 0) return "圈很软：只束一点，不硬勒。";
  return "发圈安静：专门给愿意把发尾也温柔收住的人。";
}

export function formatScrunchieElasticLine(warmth: number): string {
  if (warmth <= 0) return "弹力绳还松：等第一份温存再轻轻绕上。";
  if (warmth < 12) return "绳微弹：像轻轻说「束一下就好」。";
  if (warmth < 24) return "绳带着圈：像店把散的发也收成安。";
  return "绳与温存同软：束到了，也不紧。";
}

export function formatSoftscrunchieAside(historyCount: number): string {
  if (historyCount <= 0) return "圈还齐：第一笔流通会留下第一圈被温柔收过的光。";
  if (historyCount < 20) return `约束过 ${historyCount} 次：每一次都是愿意被温柔收住的许可。`;
  return `逾 ${historyCount} 次轻束：圈沿叠着被温柔收过的弧。`;
}

export function formatSoftscrunchieEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好发圈与弹力绳：今天从愿意轻轻束一下开始。";
  if (circulationsToday < 3) return "绕绳、拢发、轻束：流通也是一种轻轻的收住。";
  return "忙完把圈摘下——束完了，人也要松一松肩。";
}

export function formatSoftscrunchiePair(day: number, warmth: number): string {
  return `${formatSoftScrunchieLine(day)} ${formatScrunchieElasticLine(warmth)}`;
}
