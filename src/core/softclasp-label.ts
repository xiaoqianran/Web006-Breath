/**
 * 龙虾扣与开口圈叙事（纯函数，可单测）
 * 扣一下：不是急着收尾，是「让开口也能被温柔地扣上」。
 */

export function formatLobsterClaspLine(day: number): string {
  if (day % 3 === 0) return "龙虾扣静放：扣身还带着一点金属的凉。";
  if (day % 2 === 0) return "扣很轻：只扣一下，不硬扳。";
  return "龙虾扣安静：专门给愿意把开口也轻轻扣上的人。";
}

export function formatJumpRingLine(warmth: number): string {
  if (warmth <= 0) return "开口圈还开：等第一份温存再合第一圈。";
  if (warmth < 12) return "圈微合：像轻轻说「扣一下就好」。";
  if (warmth < 24) return "圈连着扣：像店把开口也温柔合上。";
  return "圈与温存同软：扣到了，也不勒线。";
}

export function formatSoftclaspAside(historyCount: number): string {
  if (historyCount <= 0) return "扣还空：第一笔流通会留下第一下被扣过的声。";
  if (historyCount < 20) return `约扣过 ${historyCount} 次：每一次都是愿意被温柔收尾的许可。`;
  return `逾 ${historyCount} 次轻扣：扣沿叠着被温柔合过的圈。`;
}

export function formatSoftclaspEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好龙虾扣与开口圈：今天从愿意扣一点开口开始。";
  if (circulationsToday < 3) return "取扣、穿圈、轻合：流通也是一种轻轻的收尾。";
  return "忙完把扣放好——扣完了，人也要松一松腕。";
}

export function formatSoftclaspPair(day: number, warmth: number): string {
  return `${formatLobsterClaspLine(day)} ${formatJumpRingLine(warmth)}`;
}
