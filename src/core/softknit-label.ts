/**
 * 棒针与记号扣叙事（纯函数，可单测）
 * 织一行：不是急着完工，是「让空白也能被温柔地织成柔软」。
 */

export function formatKnitNeedlesLine(day: number): string {
  if (day % 3 === 0) return "棒针静放：针身还带着一点木的温。";
  if (day % 2 === 0) return "针很匀：只织一行，不赶工。";
  return "棒针安静：专门给愿意把空白也轻轻织满的人。";
}

export function formatStitchMarkersLine(warmth: number): string {
  if (warmth <= 0) return "记号扣还齐：等第一份温存再夹第一针。";
  if (warmth < 12) return "扣环微亮：像轻轻说「织到这里就好」。";
  if (warmth < 24) return "扣夹在行间：像店把节奏也递给空白。";
  return "扣与温存同软：织到了，也不勒线。";
}

export function formatSoftknitAside(historyCount: number): string {
  if (historyCount <= 0) return "针还空着：第一笔流通会留下第一行被织过的纹。";
  if (historyCount < 20) return `约织过 ${historyCount} 次：每一次都是愿意被温柔成形的许可。`;
  return `逾 ${historyCount} 次轻织：针沿叠着被温柔夹过的行。`;
}

export function formatSoftknitEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好棒针与记号扣：今天从愿意织一点空白开始。";
  if (circulationsToday < 3) return "取针、夹扣、轻织：流通也是一种轻轻的成形。";
  return "忙完把针并好——织完了，人也要松一松腕。";
}

export function formatSoftknitPair(day: number, warmth: number): string {
  return `${formatKnitNeedlesLine(day)} ${formatStitchMarkersLine(warmth)}`;
}
