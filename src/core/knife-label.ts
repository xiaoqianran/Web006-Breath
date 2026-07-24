/**
 * 裁纸刀与安全尺叙事（纯函数，可单测）
 * 下刀要稳：保护手，也保护那条刚好的边。
 */

export function formatCraftKnifeLine(day: number): string {
  if (day % 3 === 0) return "裁纸刀刃口换新：今天的切口会更干净。";
  if (day % 2 === 0) return "刀柄握着温：下刀时不抖，边才直。";
  return "裁纸刀安静：需要时再切开那层多余。";
}

export function formatSafetyRulerLine(warmth: number): string {
  if (warmth <= 0) return "安全尺还凉：等第一份温存再压住第一边。";
  if (warmth < 12) return "尺背有防滑：手不会轻易滑向刃口。";
  if (warmth < 24) return "尺压稳了：刀沿着边缘走，心也跟着稳。";
  return "尺与温存同稳：裁完边，手也还在。";
}

export function formatKnifeAside(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先检查刃口：今天也可能需要裁齐一张纸。";
  if (circulationsToday < 3) return "压尺、下刀、收刃：流通也需要清楚的边界。";
  return "忙完把刀收回套——边裁完了，刃也要休息。";
}

export function formatKnifeEncourage(queueLength: number): string {
  if (queueLength <= 0) return "店暂时静：可以裁一块样纸，或只擦擦尺背。";
  if (queueLength === 1) return "有一位在等：刀可以后收，人先接住。";
  return `门外约有 ${queueLength} 位——每位都值得一次稳而干净的边。`;
}

export function formatKnifePair(day: number, warmth: number): string {
  return `${formatCraftKnifeLine(day)} ${formatSafetyRulerLine(warmth)}`;
}
