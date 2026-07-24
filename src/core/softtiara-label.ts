/**
 * 头冠与梳座叙事（纯函数，可单测）
 * 戴一下：不是硬压紧，是「让发间也能被温柔地托住」。
 */

export function formatSoftTiaraLine(day: number): string {
  if (day % 3 === 0) return "头冠静放：冠沿还带着一点细的光。";
  if (day % 2 === 0) return "冠很轻：只托一点，不硬压。";
  return "头冠安静：专门给愿意把发间也温柔托住的人。";
}

export function formatTiaraCombLine(warmth: number): string {
  if (warmth <= 0) return "梳座还空：等第一份温存再轻轻插上。";
  if (warmth < 12) return "座微稳：像轻轻说「戴一下就好」。";
  if (warmth < 24) return "座带着冠：像店把散的发也托成安。";
  return "座与温存同软：戴到了，也不沉。";
}

export function formatSofttiaraAside(historyCount: number): string {
  if (historyCount <= 0) return "冠还齐：第一笔流通会留下第一记被温柔托过的光。";
  if (historyCount < 20) return `约戴过 ${historyCount} 次：每一次都是愿意被温柔托住的许可。`;
  return `逾 ${historyCount} 次轻戴：冠沿叠着被温柔插过的光。`;
}

export function formatSofttiaraEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好头冠与梳座：今天从愿意轻轻托一下开始。";
  if (circulationsToday < 3) return "插座、扶冠、轻戴：流通也是一种轻轻的托住。";
  return "忙完把冠放好——戴完了，人也要松一松肩。";
}

export function formatSofttiaraPair(day: number, warmth: number): string {
  return `${formatSoftTiaraLine(day)} ${formatTiaraCombLine(warmth)}`;
}
