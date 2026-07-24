/**
 * 牙钻头与手持机叙事（纯函数，可单测）
 * 磨一点：不是急着削掉，是「让多余也能被温柔地磨开」。
 */

export function formatBurSetLine(day: number): string {
  if (day % 3 === 0) return "牙钻头静放：盒沿还带着一点细的光。";
  if (day % 2 === 0) return "头很细：只磨一点，不硬削。";
  return "牙钻头安静：专门给愿意把多余也轻轻磨开的人。";
}

export function formatHandpieceLine(warmth: number): string {
  if (warmth <= 0) return "手持机还停：等第一份温存再转第一圈。";
  if (warmth < 12) return "机微震：像轻轻说「磨一下就好」。";
  if (warmth < 24) return "机带着头：像店把多余也磨成净。";
  return "机与温存同软：磨到了，也不伤手。";
}

export function formatSoftburAside(historyCount: number): string {
  if (historyCount <= 0) return "盒还齐：第一笔流通会留下第一点被磨过的净。";
  if (historyCount < 20) return `约磨过 ${historyCount} 次：每一次都是愿意被温柔修开的许可。`;
  return `逾 ${historyCount} 次轻磨：盒沿叠着被温柔换过的头。`;
}

export function formatSoftburEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好牙钻头与手持机：今天从愿意磨一点多余开始。";
  if (circulationsToday < 3) return "取头、装机、轻磨：流通也是一种轻轻的修开。";
  return "忙完把机停好——磨完了，人也要松一松腕。";
}

export function formatSoftburPair(day: number, warmth: number): string {
  return `${formatBurSetLine(day)} ${formatHandpieceLine(warmth)}`;
}
