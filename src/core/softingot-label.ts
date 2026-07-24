/**
 * 铸锭模与熔金碗叙事（纯函数，可单测）
 * 倒一锭：不是急着成形，是「让流金也能被温柔地收成锭」。
 */

export function formatIngotMoldLine(day: number): string {
  if (day % 3 === 0) return "铸锭模静放：槽沿还带着一点金属的凉。";
  if (day % 2 === 0) return "模很稳：只倒一锭，不硬冲。";
  return "铸锭模安静：专门给愿意把流金也轻轻收成锭的人。";
}

export function formatMeltingDishLine(warmth: number): string {
  if (warmth <= 0) return "熔金碗还空：等第一份温存再盛第一勺。";
  if (warmth < 12) return "碗微暖：像轻轻说「倒一下就好」。";
  if (warmth < 24) return "金在碗中流：像店把流金也收成锭。";
  return "碗与温存同软：倒到了，也不烫手。";
}

export function formatSoftingotAside(historyCount: number): string {
  if (historyCount <= 0) return "模还空：第一笔流通会留下第一锭被收过的形。";
  if (historyCount < 20) return `约倒过 ${historyCount} 次：每一次都是愿意被温柔成形的许可。`;
  return `逾 ${historyCount} 次轻倒：槽沿叠着被温柔收过的锭。`;
}

export function formatSoftingotEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好铸锭模与熔金碗：今天从愿意收一点流金开始。";
  if (circulationsToday < 3) return "取碗、轻倒、收锭：流通也是一种轻轻的成形。";
  return "忙完把碗放好——倒完了，人也要松一松腕。";
}

export function formatSoftingotPair(day: number, warmth: number): string {
  return `${formatIngotMoldLine(day)} ${formatMeltingDishLine(warmth)}`;
}
