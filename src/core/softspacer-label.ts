/**
 * 隔珠与止珠器叙事（纯函数，可单测）
 * 隔一下：不是硬隔开，是「让拥挤的也能被温柔地留白」。
 */

export function formatSpacerBeadLine(day: number): string {
  if (day % 3 === 0) return "隔珠静散：珠沿还带着一点细的光。";
  if (day % 2 === 0) return "珠很轻：只隔一点，不硬挤。";
  return "隔珠安静：专门给愿意把拥挤也温柔留白的人。";
}

export function formatBeadStopperLine(warmth: number): string {
  if (warmth <= 0) return "止珠器还松：等第一份温存再轻轻夹一下。";
  if (warmth < 12) return "器微合：像轻轻说「留一下就好」。";
  if (warmth < 24) return "器带着珠：像店把挤的也隔成松。";
  return "器与温存同软：留到了，也不紧。";
}

export function formatSoftspacerAside(historyCount: number): string {
  if (historyCount <= 0) return "珠还齐：第一笔流通会留下第一记被温柔隔过的白。";
  if (historyCount < 20) return `约隔过 ${historyCount} 次：每一次都是愿意被温柔留白的许可。`;
  return `逾 ${historyCount} 次轻隔：珠沿叠着被温柔空过的缝。`;
}

export function formatSoftspacerEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好隔珠与止珠器：今天从愿意轻轻留一点白开始。";
  if (circulationsToday < 3) return "穿珠、夹止、轻隔：流通也是一种轻轻的留白。";
  return "忙完把器松开——隔完了，人也要松一松肩。";
}

export function formatSoftspacerPair(day: number, warmth: number): string {
  return `${formatSpacerBeadLine(day)} ${formatBeadStopperLine(warmth)}`;
}
