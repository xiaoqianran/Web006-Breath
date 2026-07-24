/**
 * 薰衣草香囊与瓷碟叙事（纯函数，可单测）
 * 放一袋：不是浓香轰炸，是「让枕边的夜也能被温柔地安顿」。
 * 与 sachet-label 区分命名。
 */

export function formatLavenderSachetLine(day: number): string {
  if (day % 3 === 0) return "薰衣草香囊静放：布面还透着一点淡紫的绒。";
  if (day % 2 === 0) return "囊很轻：只润一角，不呛鼻。";
  return "香囊安静：专门给愿意把夜也轻轻安顿的人。";
}

export function formatSachetDishLine(warmth: number): string {
  if (warmth <= 0) return "瓷香囊碟还空：等第一份温存再放第一袋。";
  if (warmth < 12) return "碟沿微润：像轻轻说「放这里就好」。";
  if (warmth < 24) return "香囊落入瓷碟：像店把枕边的香也留给歇息的人。";
  return "碟与温存同浅：接住了，也不压扁绒。";
}

export function formatLavsachetAside(historyCount: number): string {
  if (historyCount <= 0) return "囊还新：第一笔流通会留下第一袋被安放的香。";
  if (historyCount < 20) return `约递过 ${historyCount} 次：每一次都是愿意被温柔安夜的许可。`;
  return `逾 ${historyCount} 次轻递：碟沿叠着被温柔放过的香。`;
}

export function formatLavsachetEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好香囊与瓷碟：今天从愿意安一点夜香开始。";
  if (circulationsToday < 3) return "取囊、轻放、理齐：流通也是一种轻轻的安顿。";
  return "忙完把碟擦净——递完了，人也要松一松肩。";
}

export function formatLavsachetPair(day: number, warmth: number): string {
  return `${formatLavenderSachetLine(day)} ${formatSachetDishLine(warmth)}`;
}
