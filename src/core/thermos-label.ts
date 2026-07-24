/**
 * 保温瓷壶与羊毛套叙事（纯函数，可单测）
 * 灌一壶：不是催着喝完，是「让热也能被温柔地留住一路」。
 * 与 kettle-label 区分命名。
 */

export function formatThermosFlaskLine(day: number): string {
  if (day % 3 === 0) return "保温瓷壶立稳：壶身还带着一点温的釉。";
  if (day % 2 === 0) return "壶很轻：只装一程的热，不压肩。";
  return "保温壶安静：专门给愿意把热也带走一段的人。";
}

export function formatWoolSleeveLine(warmth: number): string {
  if (warmth <= 0) return "羊毛壶套还松：等第一份温存再套第一圈。";
  if (warmth < 12) return "套口微暖：像轻轻说「套上就好」。";
  if (warmth < 24) return "羊毛套裹住壶身：像店把掌心的暖也借给路上。";
  return "套与温存同软：裹到了，也不烫手。";
}

export function formatThermosAside(historyCount: number): string {
  if (historyCount <= 0) return "壶还空着：第一笔流通会留下第一壶被灌过的热。";
  if (historyCount < 20) return `约灌过 ${historyCount} 次：每一次都是愿意被温柔保温的许可。`;
  return `逾 ${historyCount} 次轻灌：套沿叠着被温柔留过的热。`;
}

export function formatThermosEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好保温壶与羊毛套：今天从愿意留一点热开始。";
  if (circulationsToday < 3) return "开盖、轻灌、套好：流通也是一种轻轻的送暖。";
  return "忙完把套晾一晾——灌完了，人也要松一松肩。";
}

export function formatThermosPair(day: number, warmth: number): string {
  return `${formatThermosFlaskLine(day)} ${formatWoolSleeveLine(warmth)}`;
}
