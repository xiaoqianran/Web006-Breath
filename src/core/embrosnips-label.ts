/**
 * 绣花剪与皮套叙事（纯函数，可单测）
 * 剪一线：不是粗暴切断，是「让多余也能被温柔地松开」。
 * 与 shears-label 区分命名。
 */

export function formatEmbroSnipsLine(day: number): string {
  if (day % 3 === 0) return "绣花剪静放：刀尖还亮着一点细的光。";
  if (day % 2 === 0) return "剪很轻：只剪一缕，不撕线。";
  return "绣花剪安静：专门给愿意把多余也轻轻松开的人。";
}

export function formatSnipsSheathLine(warmth: number): string {
  if (warmth <= 0) return "皮套还空：等第一份温存再收第一把。";
  if (warmth < 12) return "套口微合：像轻轻说「收这里就好」。";
  if (warmth < 24) return "剪尖滑入皮套：像店把锋利也温柔地收住。";
  return "套与温存同软：收到了，也不磕响。";
}

export function formatEmbrosnipsAside(historyCount: number): string {
  if (historyCount <= 0) return "剪还合着：第一笔流通会留下第一缕被剪过的线。";
  if (historyCount < 20) return `约剪过 ${historyCount} 次：每一次都是愿意被温柔松开的许可。`;
  return `逾 ${historyCount} 次轻剪：套沿叠着被温柔剪过的线。`;
}

export function formatEmbrosnipsEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好绣花剪与皮套：今天从愿意松开一点多余开始。";
  if (circulationsToday < 3) return "取剪、轻剪、收套：流通也是一种轻轻的收拾。";
  return "忙完把套系好——剪完了，人也要松一松腕。";
}

export function formatEmbrosnipsPair(day: number, warmth: number): string {
  return `${formatEmbroSnipsLine(day)} ${formatSnipsSheathLine(warmth)}`;
}
