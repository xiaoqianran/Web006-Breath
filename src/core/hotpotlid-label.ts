/**
 * 小砂锅盖与木铲叙事（纯函数，可单测）
 * 盖住慢炖：不是催熟，是「让时间也温柔地盖着」。
 */

export function formatClayLidLine(day: number): string {
  if (day % 3 === 0) return "小砂锅盖盖上：盖沿还带着一点雾的温。";
  if (day % 2 === 0) return "盖很沉：只压住热气，不压住耐心。";
  return "砂锅盖安静：专门给愿意让时间慢炖的人。";
}

export function formatWoodPaddleLine(warmth: number): string {
  if (warmth <= 0) return "木铲还靠着：等第一份温存再搅第一圈。";
  if (warmth < 12) return "铲面微润：像轻轻说「别急着揭」。";
  if (warmth < 24) return "木铲沿边走一圈：像店把耐心也搅匀了。";
  return "铲与温存同木：搅开了，也不刮伤锅。";
}

export function formatHotpotlidAside(historyCount: number): string {
  if (historyCount <= 0) return "盖还敞着：第一笔流通会留下第一口慢炖。";
  if (historyCount < 20) return `约盖过 ${historyCount} 次慢炖：每一次都是愿意被温柔等待的许可。`;
  return `逾 ${historyCount} 次揭盖：铲沿叠着被温柔等过的香。`;
}

export function formatHotpotlidEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好砂锅盖与木铲：今天从愿意慢炖一口开始。";
  if (circulationsToday < 3) return "盖锅、轻搅、等待：流通也是一种轻轻的耐心。";
  return "忙完把铲靠好——炖完了，人也要松一松肩。";
}

export function formatHotpotlidPair(day: number, warmth: number): string {
  return `${formatClayLidLine(day)} ${formatWoodPaddleLine(warmth)}`;
}
