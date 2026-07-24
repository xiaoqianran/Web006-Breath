/**
 * 梳毛刷与梳毛垫叙事（纯函数，可单测）
 * 梳一缕：不是急着顺齐，是「让纠结也能被温柔地梳开」。
 */

export function formatCardingBrushLine(day: number): string {
  if (day % 3 === 0) return "梳毛刷静放：齿沿还带着一点软的温。";
  if (day % 2 === 0) return "刷很轻：只梳一缕，不硬拽。";
  return "梳毛刷安静：专门给愿意把纠结也轻轻梳开的人。";
}

export function formatCardingPadLine(warmth: number): string {
  if (warmth <= 0) return "梳毛垫还净：等第一份温存再铺第一层。";
  if (warmth < 12) return "垫面微软：像轻轻说「梳一下就好」。";
  if (warmth < 24) return "毛在垫上铺开：像店把纠结也梳成顺。";
  return "垫与温存同软：梳到了，也不伤毛。";
}

export function formatSoftcarderAside(historyCount: number): string {
  if (historyCount <= 0) return "刷还净：第一笔流通会留下第一缕被梳过的纹。";
  if (historyCount < 20) return `约梳过 ${historyCount} 次：每一次都是愿意被温柔理顺的许可。`;
  return `逾 ${historyCount} 次轻梳：齿沿叠着被温柔铺过的毛。`;
}

export function formatSoftcarderEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好梳毛刷与梳毛垫：今天从愿意梳一点纠结开始。";
  if (circulationsToday < 3) return "取刷、铺垫、轻梳：流通也是一种轻轻的理顺。";
  return "忙完把刷放好——梳完了，人也要松一松腕。";
}

export function formatSoftcarderPair(day: number, warmth: number): string {
  return `${formatCardingBrushLine(day)} ${formatCardingPadLine(warmth)}`;
}
