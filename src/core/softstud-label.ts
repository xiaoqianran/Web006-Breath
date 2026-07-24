/**
 * 耳钉与蝶扣叙事（纯函数，可单测）
 * 戴一下：不是硬卡死，是「让耳垂也能被温柔地点亮」。
 */

export function formatSoftStudLine(day: number): string {
  if (day % 3 === 0) return "耳钉静放：钉面还带着一点细的光。";
  if (day % 2 === 0) return "钉很轻：只点一点，不硬卡。";
  return "耳钉安静：专门给愿意把耳垂也温柔点亮的人。";
}

export function formatButterflyBackLine(warmth: number): string {
  if (warmth <= 0) return "蝶扣还松：等第一份温存再轻轻扣上。";
  if (warmth < 12) return "扣微合：像轻轻说「戴一下就好」。";
  if (warmth < 24) return "扣带着钉：像店把散的也点成亮。";
  return "扣与温存同软：戴到了，也不紧。";
}

export function formatSoftstudAside(historyCount: number): string {
  if (historyCount <= 0) return "钉还齐：第一笔流通会留下第一记被温柔点过的光。";
  if (historyCount < 20) return `约戴过 ${historyCount} 次：每一次都是愿意被温柔点亮的许可。`;
  return `逾 ${historyCount} 次轻戴：扣口叠着被温柔合过的光。`;
}

export function formatSoftstudEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好耳钉与蝶扣：今天从愿意轻轻点亮一下开始。";
  if (circulationsToday < 3) return "穿钉、合扣、轻戴：流通也是一种轻轻的点亮。";
  return "忙完把扣收好——戴完了，人也要松一松肩。";
}

export function formatSoftstudPair(day: number, warmth: number): string {
  return `${formatSoftStudLine(day)} ${formatButterflyBackLine(warmth)}`;
}
