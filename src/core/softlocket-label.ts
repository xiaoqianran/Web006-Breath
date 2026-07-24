/**
 * 盒式吊坠与开合页叙事（纯函数，可单测）
 * 打开一下：不是硬翻看，是「让藏着的也能被温柔地看见」。
 */

export function formatLocketShellLine(day: number): string {
  if (day % 3 === 0) return "盒式吊坠静放：盖沿还带着一点细的光。";
  if (day % 2 === 0) return "盒很轻：只开一点，不硬翻。";
  return "盒式吊坠安静：专门给愿意把藏着的也温柔看见的人。";
}

export function formatLocketHingeLine(warmth: number): string {
  if (warmth <= 0) return "合页还合：等第一份温存再轻轻打开。";
  if (warmth < 12) return "页微响：像轻轻说「看一下就好」。";
  if (warmth < 24) return "页带着盒：像店把藏的也开成光。";
  return "页与温存同软：看到了，也不急。";
}

export function formatSoftlocketAside(historyCount: number): string {
  if (historyCount <= 0) return "盒还闭：第一笔流通会留下第一记被温柔打开的光。";
  if (historyCount < 20) return `约开过 ${historyCount} 次：每一次都是愿意被温柔看见的许可。`;
  return `逾 ${historyCount} 次轻开：盖沿叠着被温柔合过的光。`;
}

export function formatSoftlocketEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好盒式吊坠与合页：今天从愿意轻轻打开一下开始。";
  if (circulationsToday < 3) return "轻掀、看一眼、合上：流通也是一种轻轻的看见。";
  return "忙完把盒合好——看完了，人也要松一松眉。";
}

export function formatSoftlocketPair(day: number, warmth: number): string {
  return `${formatLocketShellLine(day)} ${formatLocketHingeLine(warmth)}`;
}
