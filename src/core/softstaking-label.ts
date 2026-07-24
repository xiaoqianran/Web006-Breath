/**
 * 冲具组与冲台叙事（纯函数，可单测）
 * 冲一下：不是硬打，是「让形状也能被温柔地定住」。
 */

export function formatStakingSetLine(day: number): string {
  if (day % 3 === 0) return "冲具静排：杆身还带着一点细的光。";
  if (day % 2 === 0) return "冲很稳：只定一点，不硬砸。";
  return "冲具安静：专门给愿意把形状也温柔定住的人。";
}

export function formatStakingBaseLine(warmth: number): string {
  if (warmth <= 0) return "冲台还空：等第一份温存再垫第一冲。";
  if (warmth < 12) return "台微稳：像轻轻说「定一下就好」。";
  if (warmth < 24) return "台带着冲：像店把散的也定成形。";
  return "台与温存同软：定到了，也不震手。";
}

export function formatSoftstakingAside(historyCount: number): string {
  if (historyCount <= 0) return "杆还齐：第一笔流通会留下第一记被温柔定过的形。";
  if (historyCount < 20) return `约定过 ${historyCount} 次：每一次都是愿意被温柔定住的许可。`;
  return `逾 ${historyCount} 次轻定：台面叠着被温柔垫过的稳。`;
}

export function formatSoftstakingEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好冲具与冲台：今天从愿意轻轻定一下开始。";
  if (circulationsToday < 3) return "选冲、垫台、轻定：流通也是一种轻轻的成形。";
  return "忙完把冲收好——定完了，人也要松一松腕。";
}

export function formatSoftstakingPair(day: number, warmth: number): string {
  return `${formatStakingSetLine(day)} ${formatStakingBaseLine(warmth)}`;
}
