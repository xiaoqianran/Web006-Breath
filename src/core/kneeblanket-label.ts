/**
 * 膝上小毯与木托板叙事（纯函数，可单测）
 * 盖一角：不是怕冷说教，是「让膝上的凉也能被温柔地捂住」。
 */

export function formatKneeBlanketLine(day: number): string {
  if (day % 3 === 0) return "膝上小毯叠好：边角还带着一点暖的绒。";
  if (day % 2 === 0) return "毯很轻：只盖一角，不压腿。";
  return "膝毯安静：专门给愿意把膝上也轻轻捂住的人。";
}

export function formatBlanketBoardLine(warmth: number): string {
  if (warmth <= 0) return "木托板还空：等第一份温存再托第一叠。";
  if (warmth < 12) return "板面微平：像轻轻说「放这里就好」。";
  if (warmth < 24) return "小毯落在木板上：像店把膝上的暖也留给坐着的人。";
  return "板与温存同稳：托住了，也不滑落。";
}

export function formatKneeblanketAside(historyCount: number): string {
  if (historyCount <= 0) return "毯还叠着：第一笔流通会留下第一角被盖过的暖。";
  if (historyCount < 20) return `约递过 ${historyCount} 次：每一次都是愿意被温柔捂膝的许可。`;
  return `逾 ${historyCount} 次轻递：板沿叠着被温柔盖过的绒。`;
}

export function formatKneeblanketEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好膝毯与木托板：今天从愿意捂一点膝暖开始。";
  if (circulationsToday < 3) return "取毯、轻盖、叠好：流通也是一种轻轻的护暖。";
  return "忙完把板理齐——递完了，人也要松一松肩。";
}

export function formatKneeblanketPair(day: number, warmth: number): string {
  return `${formatKneeBlanketLine(day)} ${formatBlanketBoardLine(warmth)}`;
}
