/**
 * 超声波清洗器与网篮叙事（纯函数，可单测）
 * 洗一下：不是冲掉一切，是「让积着的也能被温柔松开」。
 */

export function formatUltrasonicLine(day: number): string {
  if (day % 3 === 0) return "清洗器静放：水面还带着一点细的纹。";
  if (day % 2 === 0) return "波很轻：只洗一点，不硬冲。";
  return "清洗器安静：专门给愿意把积着的也温柔松开的人。";
}

export function formatMeshBasketLine(warmth: number): string {
  if (warmth <= 0) return "网篮还空：等第一份温存再轻轻托一下。";
  if (warmth < 12) return "篮微响：像轻轻说「洗一下就好」。";
  if (warmth < 24) return "篮带着器：像店把积着的也托成净。";
  return "篮与温存同软：洗到了，也不急。";
}

export function formatSoftultraAside(historyCount: number): string {
  if (historyCount <= 0) return "水还静：第一笔流通会留下第一圈被温柔洗过的纹。";
  if (historyCount < 20) return `约洗过 ${historyCount} 次：每一次都是愿意被温柔松开的许可。`;
  return `逾 ${historyCount} 次轻洗：网眼叠着被温柔托过的净。`;
}

export function formatSoftultraEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好清洗器与网篮：今天从愿意轻轻洗一下开始。";
  if (circulationsToday < 3) return "放篮、启波、轻洗：流通也是一种轻轻的松开。";
  return "忙完把水停好——洗完了，人也要松一松肩。";
}

export function formatSoftultraPair(day: number, warmth: number): string {
  return `${formatUltrasonicLine(day)} ${formatMeshBasketLine(warmth)}`;
}
