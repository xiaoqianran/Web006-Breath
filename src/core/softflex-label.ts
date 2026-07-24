/**
 * 软轴与脚踏叙事（纯函数，可单测）
 * 转一圈：不是催着赶，是「让力量也轻轻传到指尖」。
 */

export function formatFlexShaftLine(day: number): string {
  if (day % 3 === 0) return "软轴静绕：套管还带着一点温的弧。";
  if (day % 2 === 0) return "轴很软：只转一点，不硬扯。";
  return "软轴安静：专门给愿意把力量也轻轻传过去的人。";
}

export function formatFootPedalLine(warmth: number): string {
  if (warmth <= 0) return "脚踏还停：等第一份温存再轻轻踩一下。";
  if (warmth < 12) return "踏微响：像轻轻说「转一下就好」。";
  if (warmth < 24) return "踏带着轴：像店把力气也调成软。";
  return "踏与温存同软：转到位了，也不急。";
}

export function formatSoftflexAside(historyCount: number): string {
  if (historyCount <= 0) return "轴还松：第一笔流通会留下第一圈被传过的力。";
  if (historyCount < 20) return `约传过 ${historyCount} 次：每一次都是愿意被温柔传到的许可。`;
  return `逾 ${historyCount} 次轻传：套管叠着被温柔绕过的弧。`;
}

export function formatSoftflexEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好软轴与脚踏：今天从愿意轻轻转一圈开始。";
  if (circulationsToday < 3) return "绕轴、踩踏、轻转：流通也是一种轻轻的传力。";
  return "忙完把踏松开——转完了，人也要松一松脚。";
}

export function formatSoftflexPair(day: number, warmth: number): string {
  return `${formatFlexShaftLine(day)} ${formatFootPedalLine(warmth)}`;
}
