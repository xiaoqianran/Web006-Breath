/**
 * 戒指棒与指圈尺叙事（纯函数，可单测）
 * 量一圈：不是急着定号，是「让合适也能被温柔地量准」。
 */

export function formatRingMandrelLine(day: number): string {
  if (day % 3 === 0) return "戒指棒静放：棒身还带着一点木的温。";
  if (day % 2 === 0) return "棒很匀：只量一圈，不定论。";
  return "戒指棒安静：专门给愿意把合适也轻轻量准的人。";
}

export function formatRingSizerLine(warmth: number): string {
  if (warmth <= 0) return "指圈尺还齐：等第一份温存再试第一号。";
  if (warmth < 12) return "圈微合：像轻轻说「量一下就好」。";
  if (warmth < 24) return "圈套在指上：像店把合适也量成温柔。";
  return "圈与温存同软：量到了，也不勒指。";
}

export function formatSoftmandrelAside(historyCount: number): string {
  if (historyCount <= 0) return "棒还空：第一笔流通会留下第一圈被量过的痕。";
  if (historyCount < 20) return `约量过 ${historyCount} 次：每一次都是愿意被温柔确认的许可。`;
  return `逾 ${historyCount} 次轻量：棒沿叠着被温柔试过的号。`;
}

export function formatSoftmandrelEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好戒指棒与指圈尺：今天从愿意量一点合适开始。";
  if (circulationsToday < 3) return "取棒、试圈、轻量：流通也是一种轻轻的确认。";
  return "忙完把尺收好——量完了，人也要松一松腕。";
}

export function formatSoftmandrelPair(day: number, warmth: number): string {
  return `${formatRingMandrelLine(day)} ${formatRingSizerLine(warmth)}`;
}
