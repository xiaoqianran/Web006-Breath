/**
 * 生皮锤与尼龙锤叙事（纯函数，可单测）
 * 轻敲：不是硬砸，是「让形状也能被温柔地敲醒」。
 */

export function formatRawhideMalletLine(day: number): string {
  if (day % 3 === 0) return "生皮锤静放：锤面还带着一点软的痕。";
  if (day % 2 === 0) return "锤很软：只敲一点，不硬砸。";
  return "生皮锤安静：专门给愿意把形状也温柔敲醒的人。";
}

export function formatSoftNylonHammerLine(warmth: number): string {
  if (warmth <= 0) return "尼龙锤还停：等第一份温存再轻敲第一下。";
  if (warmth < 12) return "锤微响：像轻轻说「敲一下就好」。";
  if (warmth < 24) return "锤带着手：像店把硬处也敲成软。";
  return "锤与温存同软：敲到了，也不震。";
}

export function formatSoftmalletAside(historyCount: number): string {
  if (historyCount <= 0) return "面还新：第一笔流通会留下第一记被温柔敲过的软。";
  if (historyCount < 20) return `约敲过 ${historyCount} 次：每一次都是愿意被温柔敲醒的许可。`;
  return `逾 ${historyCount} 次轻敲：锤面叠着被温柔醒过的形。`;
}

export function formatSoftmalletEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好生皮锤与尼龙锤：今天从愿意轻轻敲一下开始。";
  if (circulationsToday < 3) return "握柄、落点、轻敲：流通也是一种轻轻的成形。";
  return "忙完把锤放好——敲完了，人也要松一松腕。";
}

export function formatSoftmalletPair(day: number, warmth: number): string {
  return `${formatRawhideMalletLine(day)} ${formatSoftNylonHammerLine(warmth)}`;
}
