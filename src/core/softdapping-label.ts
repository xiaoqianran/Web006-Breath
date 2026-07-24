/**
 * 拱形垫与冲头叙事（纯函数，可单测）
 * 冲一弧：不是急着鼓起，是「让平面也能被温柔地冲成弧」。
 */

export function formatDappingBlockLine(day: number): string {
  if (day % 3 === 0) return "拱形垫静放：窝沿还带着一点木的温。";
  if (day % 2 === 0) return "垫很稳：只冲一弧，不硬砸。";
  return "拱形垫安静：专门给愿意把平面也轻轻冲成弧的人。";
}

export function formatDappingPunchLine(warmth: number): string {
  if (warmth <= 0) return "冲头还齐：等第一份温存再选第一号。";
  if (warmth < 12) return "头微圆：像轻轻说「冲一下就好」。";
  if (warmth < 24) return "头贴着窝：像店把平面也冲成弧。";
  return "头与温存同软：冲到了，也不伤面。";
}

export function formatSoftdappingAside(historyCount: number): string {
  if (historyCount <= 0) return "垫还空：第一笔流通会留下第一弧被冲过的形。";
  if (historyCount < 20) return `约冲过 ${historyCount} 次：每一次都是愿意被温柔成形的许可。`;
  return `逾 ${historyCount} 次轻冲：窝沿叠着被温柔落过的弧。`;
}

export function formatSoftdappingEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好拱形垫与冲头：今天从愿意冲一点平面开始。";
  if (circulationsToday < 3) return "取垫、选头、轻冲：流通也是一种轻轻的成形。";
  return "忙完把头收好——冲完了，人也要松一松腕。";
}

export function formatSoftdappingPair(day: number, warmth: number): string {
  return `${formatDappingBlockLine(day)} ${formatDappingPunchLine(warmth)}`;
}
