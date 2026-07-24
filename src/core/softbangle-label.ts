/**
 * 手镯与镯芯叙事（纯函数，可单测）
 * 圈一下：不是硬箍紧，是「让手腕也能被温柔地环住」。
 */

export function formatSoftBangleLine(day: number): string {
  if (day % 3 === 0) return "手镯静放：圈沿还带着一点细的光。";
  if (day % 2 === 0) return "圈很圆：只环一点，不硬箍。";
  return "手镯安静：专门给愿意把手腕也温柔环住的人。";
}

export function formatBangleCoreLine(warmth: number): string {
  if (warmth <= 0) return "镯芯还空：等第一份温存再轻轻套上。";
  if (warmth < 12) return "芯微稳：像轻轻说「环一下就好」。";
  if (warmth < 24) return "芯带着镯：像店把散的也收成圆。";
  return "芯与温存同软：环到了，也不紧。";
}

export function formatSoftbangleAside(historyCount: number): string {
  if (historyCount <= 0) return "镯还新：第一笔流通会留下第一圈被温柔环过的光。";
  if (historyCount < 20) return `约环过 ${historyCount} 次：每一次都是愿意被温柔环住的许可。`;
  return `逾 ${historyCount} 次轻环：圈沿叠着被温柔套过的圆。`;
}

export function formatSoftbangleEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好手镯与镯芯：今天从愿意轻轻环一下开始。";
  if (circulationsToday < 3) return "选镯、入芯、轻环：流通也是一种轻轻的环住。";
  return "忙完把镯放好——环完了，人也要松一松腕。";
}

export function formatSoftbanglePair(day: number, warmth: number): string {
  return `${formatSoftBangleLine(day)} ${formatBangleCoreLine(warmth)}`;
}
