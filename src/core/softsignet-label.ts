/**
 * 印戒与火漆叙事（纯函数，可单测）
 * 印一下：不是硬盖死，是「让心意也能被温柔地封住」。
 */

export function formatSignetRingLine(day: number): string {
  if (day % 3 === 0) return "印戒静放：戒面还带着一点细的光。";
  if (day % 2 === 0) return "面很稳：只印一点，不硬盖。";
  return "印戒安静：专门给愿意把心意也温柔封住的人。";
}

export function formatWaxStickLine(warmth: number): string {
  if (warmth <= 0) return "火漆还冷：等第一份温存再轻轻熔一下。";
  if (warmth < 12) return "蜡微软：像轻轻说「封一下就好」。";
  if (warmth < 24) return "蜡带着戒：像店把心意也封成安。";
  return "蜡与温存同软：封到了，也不烫。";
}

export function formatSoftsignetAside(historyCount: number): string {
  if (historyCount <= 0) return "戒还净：第一笔流通会留下第一记被温柔印过的封。";
  if (historyCount < 20) return `约印过 ${historyCount} 次：每一次都是愿意被温柔封住的许可。`;
  return `逾 ${historyCount} 次轻印：戒面叠着被温柔盖过的光。`;
}

export function formatSoftsignetEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好印戒与火漆：今天从愿意轻轻封一下开始。";
  if (circulationsToday < 3) return "熔蜡、落戒、轻印：流通也是一种轻轻的封住。";
  return "忙完把戒收好——印完了，人也要松一松腕。";
}

export function formatSoftsignetPair(day: number, warmth: number): string {
  return `${formatSignetRingLine(day)} ${formatWaxStickLine(warmth)}`;
}
