/**
 * 脚链与细扣叙事（纯函数，可单测）
 * 绕一下：不是硬绑紧，是「让脚踝也能被温柔地绕住」。
 */

export function formatSoftAnkletLine(day: number): string {
  if (day % 3 === 0) return "脚链静放：链沿还带着一点细的光。";
  if (day % 2 === 0) return "链很轻：只绕一点，不硬绑。";
  return "脚链安静：专门给愿意把脚踝也温柔绕住的人。";
}

export function formatAnkletClaspLine(warmth: number): string {
  if (warmth <= 0) return "细扣还开：等第一份温存再轻轻扣上。";
  if (warmth < 12) return "扣微合：像轻轻说「绕一下就好」。";
  if (warmth < 24) return "扣带着链：像店把散的也绕成安。";
  return "扣与温存同软：绕到了，也不勒。";
}

export function formatSoftankletAside(historyCount: number): string {
  if (historyCount <= 0) return "链还齐：第一笔流通会留下第一圈被温柔绕过的光。";
  if (historyCount < 20) return `约绕过 ${historyCount} 次：每一次都是愿意被温柔绕住的许可。`;
  return `逾 ${historyCount} 次轻绕：链沿叠着被温柔扣过的光。`;
}

export function formatSoftankletEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好脚链与细扣：今天从愿意轻轻绕一下开始。";
  if (circulationsToday < 3) return "绕链、合扣、轻戴：流通也是一种轻轻的绕住。";
  return "忙完把扣合好——绕完了，人也要松一松脚。";
}

export function formatSoftankletPair(day: number, warmth: number): string {
  return `${formatSoftAnkletLine(day)} ${formatAnkletClaspLine(warmth)}`;
}
