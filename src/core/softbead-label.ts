/**
 * 串珠针与米珠叙事（纯函数，可单测）
 * 串一颗：不是急着完工，是「让散落也能被温柔地串成柔软」。
 */

export function formatBeadingNeedleLine(day: number): string {
  if (day % 3 === 0) return "串珠针静放：针尖还带着一点细的光。";
  if (day % 2 === 0) return "针很细：只串一颗，不赶工。";
  return "串珠针安静：专门给愿意把散落也轻轻串满的人。";
}

export function formatSeedBeadsLine(warmth: number): string {
  if (warmth <= 0) return "米珠还散：等第一份温存再拣第一颗。";
  if (warmth < 12) return "珠微亮：像轻轻说「串一颗就好」。";
  if (warmth < 24) return "珠沿着线走：像店把散落也串成柔软。";
  return "珠与温存同软：串到了，也不勒线。";
}

export function formatSoftbeadAside(historyCount: number): string {
  if (historyCount <= 0) return "针还空着：第一笔流通会留下第一颗被串过的光。";
  if (historyCount < 20) return `约串过 ${historyCount} 次：每一次都是愿意被温柔成形的许可。`;
  return `逾 ${historyCount} 次轻串：针沿叠着被温柔穿过的珠。`;
}

export function formatSoftbeadEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好串珠针与米珠：今天从愿意串一点散落开始。";
  if (circulationsToday < 3) return "取针、拣珠、轻串：流通也是一种轻轻的成形。";
  return "忙完把珠收好——串完了，人也要松一松腕。";
}

export function formatSoftbeadPair(day: number, warmth: number): string {
  return `${formatBeadingNeedleLine(day)} ${formatSeedBeadsLine(warmth)}`;
}
