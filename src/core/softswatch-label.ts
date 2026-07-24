/**
 * 色卡样片与行数计数器叙事（纯函数，可单测）
 * 试织一块：不是急着定型，是「让不确定也能被温柔地试成柔软」。
 */

export function formatYarnSwatchLine(day: number): string {
  if (day % 3 === 0) return "样片静放：边沿还带着一点试织的毛边。";
  if (day % 2 === 0) return "色很柔：只试一小块，不定论。";
  return "样片安静：专门给愿意把不确定也轻轻试过的人。";
}

export function formatRowCounterLine(warmth: number): string {
  if (warmth <= 0) return "计数器还零：等第一份温存再拨第一格。";
  if (warmth < 12) return "拨轮微动：像轻轻说「织到这里就好」。";
  if (warmth < 24) return "数字缓缓走：像店把耐心也递给不确定。";
  return "计数与温存同软：试到了，也不逼自己。";
}

export function formatSoftswatchAside(historyCount: number): string {
  if (historyCount <= 0) return "卡还空着：第一笔流通会留下第一块被试过的色。";
  if (historyCount < 20) return `约试过 ${historyCount} 次：每一次都是愿意被温柔确认的许可。`;
  return `逾 ${historyCount} 次轻试：边沿叠着被温柔拨过的行。`;
}

export function formatSoftswatchEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好样片与计数器：今天从愿意试一点不确定开始。";
  if (circulationsToday < 3) return "取片、拨格、轻试：流通也是一种轻轻的确认。";
  return "忙完把拨轮归零——试完了，人也要松一松肩。";
}

export function formatSoftswatchPair(day: number, warmth: number): string {
  return `${formatYarnSwatchLine(day)} ${formatRowCounterLine(warmth)}`;
}
