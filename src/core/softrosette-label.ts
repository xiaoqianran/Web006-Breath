/**
 * 玫瑰结与丝心叙事（纯函数，可单测）
 * 别一下：不是硬扎紧，是「让衣襟也能被温柔地点亮」。
 */

export function formatSoftRosetteLine(day: number): string {
  if (day % 3 === 0) return "玫瑰结静放：瓣沿还带着一点细的光。";
  if (day % 2 === 0) return "结很软：只点一点，不硬扎。";
  return "玫瑰结安静：专门给愿意把衣襟也温柔点亮的人。";
}

export function formatRosetteCoreLine(warmth: number): string {
  if (warmth <= 0) return "丝心还空：等第一份温存再轻轻收拢。";
  if (warmth < 12) return "心微拢：像轻轻说「别一下就好」。";
  if (warmth < 24) return "心带着结：像店把散的丝也点成安。";
  return "心与温存同软：别到了，也不紧。";
}

export function formatSoftrosetteAside(historyCount: number): string {
  if (historyCount <= 0) return "结还齐：第一笔流通会留下第一记被温柔点过的光。";
  if (historyCount < 20) return `约别过 ${historyCount} 次：每一次都是愿意被温柔点亮的许可。`;
  return `逾 ${historyCount} 次轻别：瓣沿叠着被温柔点过的光。`;
}

export function formatSoftrosetteEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好玫瑰结与丝心：今天从愿意轻轻点一下开始。";
  if (circulationsToday < 3) return "叠瓣、收心、轻别：流通也是一种轻轻的点亮。";
  return "忙完把结摘下——别完了，人也要松一松肩。";
}

export function formatSoftrosettePair(day: number, warmth: number): string {
  return `${formatSoftRosetteLine(day)} ${formatRosetteCoreLine(warmth)}`;
}
