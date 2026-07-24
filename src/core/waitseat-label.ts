/**
 * 候座软垫与温水小杯叙事（纯函数，可单测）
 * 等候也是流通的一部分：不是催促，是「你可以先坐一会儿」。
 */

export function formatWaitCushionLine(day: number): string {
  if (day % 3 === 0) return "候座软垫拍松：布面还带着一点坐过的温。";
  if (day % 2 === 0) return "垫很软：只接住等待，不接住催促。";
  return "软垫安静：专门给愿意先坐一会儿的人。";
}

export function formatWarmWaterCupLine(warmth: number): string {
  if (warmth <= 0) return "温水小杯还凉：等第一份温存再倒第一杯。";
  if (warmth < 12) return "杯壁微温：像轻轻说「先喝一口」。";
  if (warmth < 24) return "小杯搁在垫旁：像店把等候也照顾进了手里。";
  return "水与温存同温：等着了，也不烫到心。";
}

export function formatWaitseatAside(historyCount: number): string {
  if (historyCount <= 0) return "垫还空着：第一笔流通会留下第一次等候的照顾。";
  if (historyCount < 20) return `约安顿过 ${historyCount} 次等候：每一次都是愿意被慢下来的许可。`;
  return `逾 ${historyCount} 次坐候：垫角叠着被温柔接住过的等待。`;
}

export function formatWaitseatEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好软垫与小杯：今天从愿意照顾等候开始。";
  if (circulationsToday < 3) return "拍垫、倒水、请坐：流通也是一种轻轻的安顿。";
  return "忙完把小杯洗净——安顿完了，人也要松一松肩。";
}

export function formatWaitseatPair(day: number, warmth: number): string {
  return `${formatWaitCushionLine(day)} ${formatWarmWaterCupLine(warmth)}`;
}
