/**
 * 木质书立与页镇叙事（纯函数，可单测）
 * 把翻开的页轻轻按住：不是强迫读完，是「让温柔停在这里一会儿」。
 */

export function formatWoodenBookendLine(day: number): string {
  if (day % 3 === 0) return "木质书立靠着柜角：木纹还带着一点午后的暖。";
  if (day % 2 === 0) return "书立很稳：只扶住书脊，不扶住心事。";
  return "书立安静：专门给愿意让书也站一会儿的人。";
}

export function formatPageWeightLine(warmth: number): string {
  if (warmth <= 0) return "页镇还凉：等第一份温存再压第一页。";
  if (warmth < 12) return "镇面微沉：像轻轻说「先读到这里」。";
  if (warmth < 24) return "页镇压住翻开的角：像店把想停留的段落留住。";
  return "镇与温存同沉：压住了页，也不压住呼吸。";
}

export function formatBookendAside(historyCount: number): string {
  if (historyCount <= 0) return "书立还闲着：第一笔流通会留下第一段停住的读。";
  if (historyCount < 20) return `约扶过 ${historyCount} 次翻开：每一次都是愿意被温柔留住的许可。`;
  return `逾 ${historyCount} 次页停：柜角叠着被温柔压过的段落。`;
}

export function formatBookendEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好书立与页镇：今天从愿意让温柔停一会儿开始。";
  if (circulationsToday < 3) return "扶书、压页、停读：流通也是一种轻轻的停留。";
  return "忙完把页镇归位——停完了，人也要松一松肩。";
}

export function formatBookendPair(day: number, warmth: number): string {
  return `${formatWoodenBookendLine(day)} ${formatPageWeightLine(warmth)}`;
}
