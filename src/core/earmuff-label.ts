/**
 * 软织耳罩与挂钉叙事（纯函数，可单测）
 * 戴一副：不是怕风说教，是「让耳边的凉也能被温柔地捂住」。
 */

export function formatSoftEarmuffLine(day: number): string {
  if (day % 3 === 0) return "软织耳罩并放：罩面还带着一点暖的绒。";
  if (day % 2 === 0) return "罩很软：只捂一副，不勒头。";
  return "耳罩安静：专门给愿意把耳边也轻轻捂住的人。";
}

export function formatEarmuffPegLine(warmth: number): string {
  if (warmth <= 0) return "耳罩挂钉还空：等第一份温存再挂第一副。";
  if (warmth < 12) return "钉头微亮：像轻轻说「挂这里就好」。";
  if (warmth < 24) return "耳罩挂上木钉：像店把耳边的暖也留给出门的人。";
  return "钉与温存同稳：挂到了，也不滑落。";
}

export function formatEarmuffAside(historyCount: number): string {
  if (historyCount <= 0) return "罩还并着：第一笔流通会留下第一副被戴过的暖。";
  if (historyCount < 20) return `约递过 ${historyCount} 次：每一次都是愿意被温柔捂耳的许可。`;
  return `逾 ${historyCount} 次轻递：钉沿叠着被温柔戴过的绒。`;
}

export function formatEarmuffEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好耳罩与挂钉：今天从愿意捂一点耳边开始。";
  if (circulationsToday < 3) return "取罩、轻戴、挂好：流通也是一种轻轻的护暖。";
  return "忙完把钉理齐——递完了，人也要松一松肩。";
}

export function formatEarmuffPair(day: number, warmth: number): string {
  return `${formatSoftEarmuffLine(day)} ${formatEarmuffPegLine(warmth)}`;
}
