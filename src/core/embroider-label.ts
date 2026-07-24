/**
 * 绣绷与绣线叙事（纯函数，可单测）
 * 绷一圈：不是苛刻手艺，是「让布面上的空白也能被温柔地绣满」。
 */

export function formatEmbroideryHoopLine(day: number): string {
  if (day % 3 === 0) return "绣绷圈好：绷布还透着一点亚麻的白。";
  if (day % 2 === 0) return "圈很稳：只绷一寸，不勒破。";
  return "绣绷安静：专门给愿意把空白也轻轻绣满的人。";
}

export function formatEmbroideryFlossLine(warmth: number): string {
  if (warmth <= 0) return "绣线还绞着：等第一份温存再拆第一缕。";
  if (warmth < 12) return "线束微松：像轻轻说「抽一缕就好」。";
  if (warmth < 24) return "绣线穿过布面：像店把颜色也递给空白。";
  return "线与温存同细：绣到了，也不打结。";
}

export function formatEmbroiderAside(historyCount: number): string {
  if (historyCount <= 0) return "绷还空着：第一笔流通会留下第一针被绣过的白。";
  if (historyCount < 20) return `约绣过 ${historyCount} 次：每一次都是愿意被温柔填满的许可。`;
  return `逾 ${historyCount} 次轻绣：圈沿叠着被温柔绣过的线。`;
}

export function formatEmbroiderEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好绣绷与绣线：今天从愿意绣一点空白开始。";
  if (circulationsToday < 3) return "绷布、穿线、轻绣：流通也是一种轻轻的填补。";
  return "忙完把线理顺——绣完了，人也要松一松腕。";
}

export function formatEmbroiderPair(day: number, warmth: number): string {
  return `${formatEmbroideryHoopLine(day)} ${formatEmbroideryFlossLine(warmth)}`;
}
