/**
 * 裱花袋与糖粉筛叙事（纯函数，可单测）
 * 给成品一点装饰：不是炫耀，是「让完成也有可被看见的温柔」。
 */

export function formatIcingBagLine(day: number): string {
  if (day % 3 === 0) return "裱花袋捏住：袋口还带着一点甜的凉。";
  if (day % 2 === 0) return "袋很软：只画线条，不画催促。";
  return "裱花袋安静：专门给愿意把完成也写漂亮的人。";
}

export function formatSugarSieveLine(warmth: number): string {
  if (warmth <= 0) return "糖粉筛还静：等第一份温存再落第一层雪。";
  if (warmth < 12) return "筛网微响：像轻轻说「薄薄一层就好」。";
  if (warmth < 24) return "糖粉筛掠过成品：像店把完成也撒成可见的温柔。";
  return "粉与温存同细：盖住了，也不盖住香。";
}

export function formatIcingAside(historyCount: number): string {
  if (historyCount <= 0) return "袋还空着：第一笔流通会留下第一道甜线。";
  if (historyCount < 20) return `约裱过 ${historyCount} 次：每一次都是愿意被温柔装饰的许可。`;
  return `逾 ${historyCount} 次点缀：筛下叠着被温柔落过的白。`;
}

export function formatIcingEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好裱花袋与糖粉筛：今天从愿意点缀一笔开始。";
  if (circulationsToday < 3) return "装袋、挤线、筛粉：流通也是一种轻轻的完成。";
  return "忙完把筛洗净——点完了，人也要松一松腕。";
}

export function formatIcingPair(day: number, warmth: number): string {
  return `${formatIcingBagLine(day)} ${formatSugarSieveLine(warmth)}`;
}
