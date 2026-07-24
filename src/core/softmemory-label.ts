/**
 * 记忆丝与剪线钳叙事（纯函数，可单测）
 * 记一下：不是硬绷着，是「让形状也能被温柔地记住」。
 */

export function formatMemoryWireLine(day: number): string {
  if (day % 3 === 0) return "记忆丝静绕：丝圈还带着一点温的弧。";
  if (day % 2 === 0) return "丝很韧：只记一点，不硬绷。";
  return "记忆丝安静：专门给愿意把形状也温柔记住的人。";
}

export function formatFlushCutterLine(warmth: number): string {
  if (warmth <= 0) return "剪线钳还合：等第一份温存再轻轻剪一下。";
  if (warmth < 12) return "钳微响：像轻轻说「剪一下就好」。";
  if (warmth < 24) return "钳带着丝：像店把多余的也剪成净。";
  return "钳与温存同软：剪到了，也不伤手。";
}

export function formatSoftmemoryAside(historyCount: number): string {
  if (historyCount <= 0) return "丝还新：第一笔流通会留下第一圈被温柔记过的形。";
  if (historyCount < 20) return `约记过 ${historyCount} 次：每一次都是愿意被温柔记住的许可。`;
  return `逾 ${historyCount} 次轻记：丝圈叠着被温柔弯过的弧。`;
}

export function formatSoftmemoryEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好记忆丝与剪线钳：今天从愿意轻轻记一下开始。";
  if (circulationsToday < 3) return "绕丝、剪口、轻记：流通也是一种轻轻的成形。";
  return "忙完把钳合上——记完了，人也要松一松肩。";
}

export function formatSoftmemoryPair(day: number, warmth: number): string {
  return `${formatMemoryWireLine(day)} ${formatFlushCutterLine(warmth)}`;
}
