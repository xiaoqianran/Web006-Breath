/**
 * 发簪与滑座叙事（纯函数，可单测）
 * 插一下：不是硬顶住，是「让盘发也能被温柔地定住」。
 */

export function formatSoftSlideLine(day: number): string {
  if (day % 3 === 0) return "发簪静放：簪尖还带着一点细的光。";
  if (day % 2 === 0) return "簪很细：只定一点，不硬顶。";
  return "发簪安静：专门给愿意把盘发也温柔定住的人。";
}

export function formatSlideRestLine(warmth: number): string {
  if (warmth <= 0) return "滑座还空：等第一份温存再轻轻搁上。";
  if (warmth < 12) return "座微稳：像轻轻说「插一下就好」。";
  if (warmth < 24) return "座带着簪：像店把散的盘发也定成安。";
  return "座与温存同软：插到了，也不沉。";
}

export function formatSoftslideAside(historyCount: number): string {
  if (historyCount <= 0) return "簪还齐：第一笔流通会留下第一记被温柔定过的光。";
  if (historyCount < 20) return `约插过 ${historyCount} 次：每一次都是愿意被温柔定住的许可。`;
  return `逾 ${historyCount} 次轻插：簪沿叠着被温柔定过的光。`;
}

export function formatSoftslideEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好发簪与滑座：今天从愿意轻轻定一下开始。";
  if (circulationsToday < 3) return "扶簪、对座、轻插：流通也是一种轻轻的定住。";
  return "忙完把簪抽出——插完了，人也要松一松肩。";
}

export function formatSoftslidePair(day: number, warmth: number): string {
  return `${formatSoftSlideLine(day)} ${formatSlideRestLine(warmth)}`;
}
