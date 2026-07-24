/**
 * 软扫帚与簸箕叙事（纯函数，可单测）
 * 打烊前扫一扫：把碎屑收走，也把心里的刺收拾一下。
 */

export function formatSoftBroomLine(day: number): string {
  if (day % 3 === 0) return "软扫帚靠在门后：今天的碎屑会轻轻被收走。";
  if (day % 2 === 0) return "帚毛有一点弯：扫过很多个黄昏。";
  return "扫帚不响：只把今天的尘推到一处。";
}

export function formatDustpanLine(circulationsToday: number): string {
  if (circulationsToday <= 0) return "簸箕还空：第一天的屑会先落在这里。";
  if (circulationsToday < 3) return "簸箕里有花瓣与线头：说明手在忙、心也在。";
  return `收过 ${circulationsToday} 回流通的余屑：簸箕知道店的节奏。`;
}

export function formatBroomAside(warmth: number): string {
  if (warmth <= 0) return "地面还凉：温存起来后再扫也不迟。";
  if (warmth < 12) return "扫过的地方更亮一点：光也愿意留下来。";
  return "扫帚与温存同在：干净，是给下一位的欢迎。";
}

export function formatBroomEncourage(queueLength: number): string {
  if (queueLength <= 0) return "店暂时静：可以慢慢扫，把一天收个口。";
  if (queueLength === 1) return "有一位在等：先迎人，扫可以稍后。";
  return `门外约有 ${queueLength} 位——人接完，屑再收，顺序别反。`;
}

export function formatBroomPair(day: number, circulationsToday: number): string {
  return `${formatSoftBroomLine(day)} ${formatDustpanLine(circulationsToday)}`;
}
