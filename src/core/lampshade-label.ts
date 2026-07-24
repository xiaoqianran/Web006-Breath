/**
 * 纸灯罩与灯绳开关叙事（纯函数，可单测）
 * 光线收窄一点：不是关灯睡觉，是「把温柔聚在可读的一圈里」。
 */

export function formatPaperShadeLine(day: number): string {
  if (day % 3 === 0) return "纸灯罩罩住灯芯：光边还带着一点柔晕。";
  if (day % 2 === 0) return "罩很轻：只收拢光线，不收拢呼吸。";
  return "灯罩安静：专门给愿意把光聚成一圈的人。";
}

export function formatCordSwitchLine(warmth: number): string {
  if (warmth <= 0) return "灯绳开关还垂着：等第一份温存再拉第一下。";
  if (warmth < 12) return "绳结微晃：像轻轻说「先亮这一角」。";
  if (warmth < 24) return "灯绳一拉：像店把桌面轻轻圈进暖光。";
  return "绳与温存同轻：亮了灯，也不刺到眼。";
}

export function formatLampshadeAside(historyCount: number): string {
  if (historyCount <= 0) return "灯还没亮：第一笔流通会留下第一圈暖光。";
  if (historyCount < 20) return `约亮过 ${historyCount} 次桌灯：每一次都是愿意被温柔照见的许可。`;
  return `逾 ${historyCount} 次拉绳：罩下叠着被温柔聚过的光圈。`;
}

export function formatLampshadeEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好灯罩与绳开关：今天从愿意聚一圈光开始。";
  if (circulationsToday < 3) return "罩灯、拉绳、落光：流通也是一种轻轻的照见。";
  return "忙完把绳放回垂落——亮完了，人也要松一松肩。";
}

export function formatLampshadePair(day: number, warmth: number): string {
  return `${formatPaperShadeLine(day)} ${formatCordSwitchLine(warmth)}`;
}
