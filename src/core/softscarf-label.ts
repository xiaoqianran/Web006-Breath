/**
 * 软羊毛围巾与木衣钉叙事（纯函数，可单测）
 * 挂一条：不是赶客出门，是「让肩上的凉也能被温柔地捂住」。
 */

export function formatSoftWoolScarfLine(day: number): string {
  if (day % 3 === 0) return "软羊毛围巾叠好：毛边还带着一点暖的绒。";
  if (day % 2 === 0) return "巾很软：只围一圈，不勒颈。";
  return "围巾安静：专门给愿意把凉也轻轻捂住的人。";
}

export function formatWoodCoatPegLine(warmth: number): string {
  if (warmth <= 0) return "木衣钉还空：等第一份温存再挂第一条。";
  if (warmth < 12) return "钉头微亮：像轻轻说「挂这里就好」。";
  if (warmth < 24) return "围巾搭上木钉：像店把肩上的暖也留给出门的人。";
  return "钉与温存同稳：挂到了，也不滑落。";
}

export function formatSoftscarfAside(historyCount: number): string {
  if (historyCount <= 0) return "巾还叠着：第一笔流通会留下第一圈被围过的暖。";
  if (historyCount < 20) return `约挂过 ${historyCount} 次：每一次都是愿意被温柔捂住的许可。`;
  return `逾 ${historyCount} 次轻挂：钉沿叠着被温柔围过的绒。`;
}

export function formatSoftscarfEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好围巾与木钉：今天从愿意捂一点暖开始。";
  if (circulationsToday < 3) return "取巾、轻围、挂好：流通也是一种轻轻的送暖。";
  return "忙完把巾叠好——围完了，人也要松一松肩。";
}

export function formatSoftscarfPair(day: number, warmth: number): string {
  return `${formatSoftWoolScarfLine(day)} ${formatWoodCoatPegLine(warmth)}`;
}
