/**
 * 补衣木菇与补线团叙事（纯函数，可单测）
 * 补一处：不是遮丑说教，是「让破口也能被温柔地织回」。
 * 与 darn-label 区分命名。
 */

export function formatMendMushroomLine(day: number): string {
  if (day % 3 === 0) return "补衣木菇静放：菇面还带着一点木的润。";
  if (day % 2 === 0) return "菇很圆：只托一处，不撑破。";
  return "木菇安静：专门给愿意把破口也轻轻织回的人。";
}

export function formatMendYarnLine(warmth: number): string {
  if (warmth <= 0) return "补线团还整：等第一份温存再抽第一缕。";
  if (warmth < 12) return "线头微松：像轻轻说「织一下就好」。";
  if (warmth < 24) return "线绕过木菇：像店把完整也递给破口。";
  return "线与温存同细：织到了，也不打结。";
}

export function formatSoftmendAside(historyCount: number): string {
  if (historyCount <= 0) return "菇还闲着：第一笔流通会留下第一处被织回的口。";
  if (historyCount < 20) return `约补过 ${historyCount} 次：每一次都是愿意被温柔织回的许可。`;
  return `逾 ${historyCount} 次轻补：菇沿叠着被温柔织过的线。`;
}

export function formatSoftmendEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好木菇与补线：今天从愿意织回一点破口开始。";
  if (circulationsToday < 3) return "托菇、穿线、轻织：流通也是一种轻轻的修补。";
  return "忙完把线绕好——补完了，人也要松一松腕。";
}

export function formatSoftmendPair(day: number, warmth: number): string {
  return `${formatMendMushroomLine(day)} ${formatMendYarnLine(warmth)}`;
}
