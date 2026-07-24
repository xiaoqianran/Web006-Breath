/**
 * 干草药束与挂绳叙事（纯函数，可单测）
 * 吊在梁下慢慢干：不是收纳堆砌，是「让时间也参与温柔的制作」。
 */

export function formatHerbBundleLine(day: number): string {
  if (day % 3 === 0) return "干草药束绑好：叶尖还带着一点干后的脆。";
  if (day % 2 === 0) return "束很轻：只记季节，不记急用。";
  return "草药束安静：专门给愿意让时间也帮忙的人。";
}

export function formatHangTwineLine(warmth: number): string {
  if (warmth <= 0) return "挂绳还松：等第一份温存再吊第一束。";
  if (warmth < 12) return "绳结微紧：像轻轻说「挂高一点风就到」。";
  if (warmth < 24) return "挂绳绕过梁钉：像店把等待也吊成风景。";
  return "绳与温存同轻：吊住了，也不勒住叶。";
}

export function formatHerbhangAside(historyCount: number): string {
  if (historyCount <= 0) return "梁下还空：第一笔流通会留下第一束被风干的香。";
  if (historyCount < 20) return `约吊过 ${historyCount} 束：每一束都是愿意被温柔等待的许可。`;
  return `逾 ${historyCount} 束风干：绳上叠着被温柔吊过的季节。`;
}

export function formatHerbhangEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好草药束与挂绳：今天从愿意吊一束开始。";
  if (circulationsToday < 3) return "绑束、上绳、吊起：流通也是一种轻轻的风干。";
  return "忙完把绳理顺——吊完了，人也要松一松肩。";
}

export function formatHerbhangPair(day: number, warmth: number): string {
  return `${formatHerbBundleLine(day)} ${formatHangTwineLine(warmth)}`;
}
