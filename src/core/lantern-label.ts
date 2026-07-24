/**
 * 纸灯笼与灯罩叙事（纯函数，可单测）
 * 三百轮：点一盏纸灯，不是喧哗庆祝，是「让路也接到可慢慢照亮的温柔」。
 */

export function formatPaperLanternLine(day: number): string {
  if (day % 3 === 0) return "纸灯笼亮着：灯面还透着一点暖的金。";
  if (day % 2 === 0) return "光很柔：只铺一路，不刺眼。";
  return "纸灯安静：专门给愿意把路也轻轻照亮的人。";
}

export function formatLanternShadeLine(warmth: number): string {
  if (warmth <= 0) return "灯罩还暗：等第一份温存再透第一层光。";
  if (warmth < 12) return "罩面微亮：像轻轻说「照着就好」。";
  if (warmth < 24) return "光从纸罩里漫出：像店把三百轮的温柔也递给路。";
  return "罩与温存同柔：照到了，也不灼人。";
}

export function formatPaperLanternAside(historyCount: number): string {
  if (historyCount <= 0) return "灯还新：第一笔流通会留下第一圈被照亮的路。";
  if (historyCount < 20) return `约点过 ${historyCount} 次：每一次都是愿意被温柔引路的许可。`;
  return `逾 ${historyCount} 次轻点：罩沿叠着被温柔照过的光。`;
}

export function formatPaperLanternEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好纸灯与灯罩：今天从愿意照一点路开始。";
  if (circulationsToday < 3) return "点灯、罩光、挂好：流通也是一种轻轻的引路。";
  return "忙完把灯芯理一理——照完了，人也要松一松肩。";
}

export function formatPaperLanternPair(day: number, warmth: number): string {
  return `${formatPaperLanternLine(day)} ${formatLanternShadeLine(warmth)}`;
}
