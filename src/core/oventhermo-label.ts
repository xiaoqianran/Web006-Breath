/**
 * 烤箱温度计与计时旋钮叙事（纯函数，可单测）
 * 看着热度与时间：不是监控焦虑，是「让火候也温柔可感」。
 */

export function formatOvenThermoLine(day: number): string {
  if (day % 3 === 0) return "烤箱温度计立着：表盘还带着一点玻璃的亮。";
  if (day % 2 === 0) return "针很稳：只报温度，不报慌张。";
  return "温度计安静：专门给愿意把火候也看清的人。";
}

export function formatTimerDialLine(warmth: number): string {
  if (warmth <= 0) return "计时旋钮还零：等第一份温存再拧第一格。";
  if (warmth < 12) return "旋钮微响：像轻轻说「再等一会儿」。";
  if (warmth < 24) return "计时旋钮转到中间：像店把等待也拧成可听见的刻度。";
  return "钮与温存同准：到点了，也不吓到人。";
}

export function formatOventhermoAside(historyCount: number): string {
  if (historyCount <= 0) return "表还静着：第一笔流通会留下第一段被看清的火候。";
  if (historyCount < 20) return `约看过 ${historyCount} 次表：每一次都是愿意被温柔校对的许可。`;
  return `逾 ${historyCount} 次拧钮：表沿叠着被温柔等过的热。`;
}

export function formatOventhermoEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好温度计与旋钮：今天从愿意看清火候开始。";
  if (circulationsToday < 3) return "立表、拧钮、等待：流通也是一种轻轻的校准。";
  return "忙完把旋钮归零——等完了，人也要松一松肩。";
}

export function formatOventhermoPair(day: number, warmth: number): string {
  return `${formatOvenThermoLine(day)} ${formatTimerDialLine(warmth)}`;
}
