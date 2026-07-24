/**
 * 石臼与木杵叙事（纯函数，可单测）
 * 把香料研开：不是用力碾碎，是「让气味慢慢醒来」。
 */

export function formatStoneMortarLine(day: number): string {
  if (day % 3 === 0) return "石臼稳在台心：内壁还带着一点干香的痕。";
  if (day % 2 === 0) return "臼很沉：只托住研，不托住急躁。";
  return "石臼安静：专门给愿意把香也慢慢唤醒的人。";
}

export function formatWoodPestleLine(warmth: number): string {
  if (warmth <= 0) return "木杵还靠着：等第一份温存再研第一下。";
  if (warmth < 12) return "杵端微香：像轻轻说「慢一点压」。";
  if (warmth < 24) return "木杵在臼里画圈：像店把沉睡的香也叫醒了。";
  return "杵与温存同圆：研开了，也不研碎心。";
}

export function formatMortarAside(historyCount: number): string {
  if (historyCount <= 0) return "臼还空着：第一笔流通会留下第一撮被唤醒的香。";
  if (historyCount < 20) return `约研过 ${historyCount} 次：每一次都是愿意被温柔唤醒的许可。`;
  return `逾 ${historyCount} 次轻研：臼底叠着被温柔醒过的香。`;
}

export function formatMortarEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好石臼与木杵：今天从愿意唤醒一撮香开始。";
  if (circulationsToday < 3) return "入臼、轻研、闻香：流通也是一种轻轻的苏醒。";
  return "忙完把杵靠好——研完了，人也要松一松腕。";
}

export function formatMortarPair(day: number, warmth: number): string {
  return `${formatStoneMortarLine(day)} ${formatWoodPestleLine(warmth)}`;
}
