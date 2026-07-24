/**
 * 链条与链嘴钳叙事（纯函数，可单测）
 * 连一环：不是硬扣死，是「让远的也能被温柔地接上」。
 */

export function formatSoftChainLine(day: number): string {
  if (day % 3 === 0) return "链条静绕：环环还带着一点细的光。";
  if (day % 2 === 0) return "链很软：只连一点，不硬扣。";
  return "链条安静：专门给愿意把远的也温柔接上的人。";
}

export function formatChainNoseLine(warmth: number): string {
  if (warmth <= 0) return "链嘴钳还合：等第一份温存再轻轻夹一下。";
  if (warmth < 12) return "钳微张：像轻轻说「接一下就好」。";
  if (warmth < 24) return "钳带着链：像店把断的也接成整。";
  return "钳与温存同软：接到了，也不伤环。";
}

export function formatSoftchainAside(historyCount: number): string {
  if (historyCount <= 0) return "链还齐：第一笔流通会留下第一记被温柔接过的环。";
  if (historyCount < 20) return `约接过 ${historyCount} 次：每一次都是愿意被温柔接上的许可。`;
  return `逾 ${historyCount} 次轻接：环环叠着被温柔扣过的光。`;
}

export function formatSoftchainEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好链条与链嘴钳：今天从愿意轻轻接一下开始。";
  if (circulationsToday < 3) return "夹环、开口、轻接：流通也是一种轻轻的连上。";
  return "忙完把钳合上——接完了，人也要松一松腕。";
}

export function formatSoftchainPair(day: number, warmth: number): string {
  return `${formatSoftChainLine(day)} ${formatChainNoseLine(warmth)}`;
}
