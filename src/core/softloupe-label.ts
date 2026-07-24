/**
 * 放大镜与戒夹叙事（纯函数，可单测）
 * 看清楚：不是挑剔细节，是「让微小的温柔也能被看见」。
 */

export function formatLoupeLine(day: number): string {
  if (day % 3 === 0) return "放大镜静放：镜片还带着一点清的光。";
  if (day % 2 === 0) return "镜很近：只看一点，不硬找。";
  return "放大镜安静：专门给愿意把微小也温柔看见的人。";
}

export function formatRingClampLine(warmth: number): string {
  if (warmth <= 0) return "戒夹还松：等第一份温存再轻轻夹一下。";
  if (warmth < 12) return "夹微稳：像轻轻说「看一下就好」。";
  if (warmth < 24) return "夹带着镜：像店把微小也托成清。";
  return "夹与温存同软：看清楚了，也不紧。";
}

export function formatSoftloupeAside(historyCount: number): string {
  if (historyCount <= 0) return "镜还净：第一笔流通会留下第一圈被温柔看见的细节。";
  if (historyCount < 20) return `约看过 ${historyCount} 次：每一次都是愿意被温柔看见的许可。`;
  return `逾 ${historyCount} 次轻看：镜片叠着被温柔对过的光。`;
}

export function formatSoftloupeEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好放大镜与戒夹：今天从愿意轻轻看清楚开始。";
  if (circulationsToday < 3) return "夹稳、凑近、轻看：流通也是一种轻轻的看见。";
  return "忙完把镜放下——看完了，人也要松一松眉。";
}

export function formatSoftloupePair(day: number, warmth: number): string {
  return `${formatLoupeLine(day)} ${formatRingClampLine(warmth)}`;
}
