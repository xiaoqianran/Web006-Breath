/**
 * 吊坠与丝绳叙事（纯函数，可单测）
 * 挂一下：不是硬垂着，是「让心意也能被温柔地贴在心口」。
 */

export function formatSoftPendantLine(day: number): string {
  if (day % 3 === 0) return "吊坠静放：坠面还带着一点细的光。";
  if (day % 2 === 0) return "坠很轻：只挂一点，不硬垂。";
  return "吊坠安静：专门给愿意把心意也温柔贴在心口的人。";
}

export function formatPendantCordLine(warmth: number): string {
  if (warmth <= 0) return "丝绳还松：等第一份温存再轻轻穿上。";
  if (warmth < 12) return "绳微软：像轻轻说「挂一下就好」。";
  if (warmth < 24) return "绳带着坠：像店把心意也贴成近。";
  return "绳与温存同软：挂到了，也不勒。";
}

export function formatSoftpendantAside(historyCount: number): string {
  if (historyCount <= 0) return "坠还齐：第一笔流通会留下第一记被温柔挂过的光。";
  if (historyCount < 20) return `约挂过 ${historyCount} 次：每一次都是愿意被温柔贴近的许可。`;
  return `逾 ${historyCount} 次轻挂：绳沿叠着被温柔穿过的光。`;
}

export function formatSoftpendantEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好吊坠与丝绳：今天从愿意轻轻挂一下开始。";
  if (circulationsToday < 3) return "穿绳、挂坠、轻贴：流通也是一种轻轻的贴近。";
  return "忙完把坠放好——挂完了，人也要松一松肩。";
}

export function formatSoftpendantPair(day: number, warmth: number): string {
  return `${formatSoftPendantLine(day)} ${formatPendantCordLine(warmth)}`;
}
