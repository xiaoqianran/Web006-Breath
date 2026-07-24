/**
 * 小铁砧与尼龙锤叙事（纯函数，可单测）
 * 敲一下：不是急着定形，是「让金属也能被温柔地敲软」。
 */

export function formatMiniAnvilLine(day: number): string {
  if (day % 3 === 0) return "小铁砧静放：砧面还带着一点凉的稳。";
  if (day % 2 === 0) return "砧很稳：只敲一下，不硬砸。";
  return "小铁砧安静：专门给愿意把硬边也轻轻敲软的人。";
}

export function formatNylonHammerLine(warmth: number): string {
  if (warmth <= 0) return "尼龙锤还放：等第一份温存再敲第一下。";
  if (warmth < 12) return "锤头微软：像轻轻说「敲一下就好」。";
  if (warmth < 24) return "锤落在砧上：像店把硬边也敲成柔软。";
  return "锤与温存同软：敲到了，也不伤面。";
}

export function formatSoftanvilAside(historyCount: number): string {
  if (historyCount <= 0) return "砧还净：第一笔流通会留下第一下被敲过的声。";
  if (historyCount < 20) return `约敲过 ${historyCount} 次：每一次都是愿意被温柔定形的许可。`;
  return `逾 ${historyCount} 次轻敲：砧面叠着被温柔落过的痕。`;
}

export function formatSoftanvilEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好小铁砧与尼龙锤：今天从愿意敲一点硬边开始。";
  if (circulationsToday < 3) return "取锤、轻敲、定形：流通也是一种轻轻的成形。";
  return "忙完把锤放好——敲完了，人也要松一松腕。";
}

export function formatSoftanvilPair(day: number, warmth: number): string {
  return `${formatMiniAnvilLine(day)} ${formatNylonHammerLine(warmth)}`;
}
