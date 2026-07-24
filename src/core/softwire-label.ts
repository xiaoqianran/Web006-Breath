/**
 * 串珠软线与压接珠叙事（纯函数，可单测）
 * 压一颗：不是急着收尾，是「让线端也能被温柔地固定住」。
 */

export function formatBeadingWireLine(day: number): string {
  if (day % 3 === 0) return "串珠软线静放：线身还带着一点柔的光。";
  if (day % 2 === 0) return "线很韧：只穿一截，不硬拽。";
  return "串珠软线安静：专门给愿意把线端也轻轻收住的人。";
}

export function formatCrimpBeadLine(warmth: number): string {
  if (warmth <= 0) return "压接珠还散：等第一份温存再压第一颗。";
  if (warmth < 12) return "珠微亮：像轻轻说「压一下就好」。";
  if (warmth < 24) return "珠扣住线端：像店把线端也温柔固定。";
  return "珠与温存同软：压到了，也不伤线。";
}

export function formatSoftwireAside(historyCount: number): string {
  if (historyCount <= 0) return "线还松：第一笔流通会留下第一颗被压过的结。";
  if (historyCount < 20) return `约压过 ${historyCount} 次：每一次都是愿意被温柔收尾的许可。`;
  return `逾 ${historyCount} 次轻压：线端叠着被温柔扣过的珠。`;
}

export function formatSoftwireEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好串珠软线与压接珠：今天从愿意收一点线端开始。";
  if (circulationsToday < 3) return "取线、穿珠、轻压：流通也是一种轻轻的收尾。";
  return "忙完把珠收好——压完了，人也要松一松腕。";
}

export function formatSoftwirePair(day: number, warmth: number): string {
  return `${formatBeadingWireLine(day)} ${formatCrimpBeadLine(warmth)}`;
}
