/**
 * 香蕉夹与齿排叙事（纯函数，可单测）
 * 别一下：不是硬卡住，是「让长发也能被温柔地别住」。
 */

export function formatSoftBananaLine(day: number): string {
  if (day % 3 === 0) return "香蕉夹静放：弧沿还带着一点细的光。";
  if (day % 2 === 0) return "夹很弯：只别一点，不硬卡。";
  return "香蕉夹安静：专门给愿意把长发也温柔别住的人。";
}

export function formatBananaTeethLine(warmth: number): string {
  if (warmth <= 0) return "齿排还空：等第一份温存再轻轻扣上。";
  if (warmth < 12) return "齿微合：像轻轻说「别一下就好」。";
  if (warmth < 24) return "齿带着夹：像店把散的长发也别成安。";
  return "齿与温存同软：别到了，也不紧。";
}

export function formatSoftbananaAside(historyCount: number): string {
  if (historyCount <= 0) return "夹还齐：第一笔流通会留下第一记被温柔别过的光。";
  if (historyCount < 20) return `约别过 ${historyCount} 次：每一次都是愿意被温柔别住的许可。`;
  return `逾 ${historyCount} 次轻别：弧沿叠着被温柔别过的光。`;
}

export function formatSoftbananaEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好香蕉夹与齿排：今天从愿意轻轻别一下开始。";
  if (circulationsToday < 3) return "开齿、拢发、轻别：流通也是一种轻轻的别住。";
  return "忙完把夹取下——别完了，人也要松一松肩。";
}

export function formatSoftbananaPair(day: number, warmth: number): string {
  return `${formatSoftBananaLine(day)} ${formatBananaTeethLine(warmth)}`;
}
