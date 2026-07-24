/**
 * 胸针与别扣叙事（纯函数，可单测）
 * 别一下：不是硬扎紧，是「让想留的也能被温柔地固定」。
 */

export function formatBroochPinLine(day: number): string {
  if (day % 3 === 0) return "胸针静放：针尖还带着一点细的光。";
  if (day % 2 === 0) return "针很稳：只别一点，不硬扎。";
  return "胸针安静：专门给愿意把想留的也温柔固定的人。";
}

export function formatPinCatchLine(warmth: number): string {
  if (warmth <= 0) return "别扣还开：等第一份温存再轻轻扣上。";
  if (warmth < 12) return "扣微合：像轻轻说「别一下就好」。";
  if (warmth < 24) return "扣带着针：像店把想留的也固定成安。";
  return "扣与温存同软：别到了，也不刺。";
}

export function formatSoftbroochAside(historyCount: number): string {
  if (historyCount <= 0) return "针还齐：第一笔流通会留下第一记被温柔别过的稳。";
  if (historyCount < 20) return `约别过 ${historyCount} 次：每一次都是愿意被温柔固定的许可。`;
  return `逾 ${historyCount} 次轻别：扣口叠着被温柔合过的光。`;
}

export function formatSoftbroochEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好胸针与别扣：今天从愿意轻轻别一下开始。";
  if (circulationsToday < 3) return "穿针、入扣、轻别：流通也是一种轻轻的固定。";
  return "忙完把扣合好——别完了，人也要松一松肩。";
}

export function formatSoftbroochPair(day: number, warmth: number): string {
  return `${formatBroochPinLine(day)} ${formatPinCatchLine(warmth)}`;
}
