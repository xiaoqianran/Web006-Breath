/**
 * 戳戳针与羊毛条叙事（纯函数，可单测）
 * 戳一下：不是急着成形，是「让蓬松也能被温柔地戳成形状」。
 */

export function formatFeltingNeedleLine(day: number): string {
  if (day % 3 === 0) return "戳戳针静放：针尖还带着一点细的光。";
  if (day % 2 === 0) return "针很细：只戳一下，不赶工。";
  return "戳戳针安静：专门给愿意把蓬松也轻轻戳满的人。";
}

export function formatWoolRovingLine(warmth: number): string {
  if (warmth <= 0) return "羊毛条还整：等第一份温存再扯第一缕。";
  if (warmth < 12) return "毛条微松：像轻轻说「戳一下就好」。";
  if (warmth < 24) return "毛在指间蓬起：像店把蓬松也戳成形状。";
  return "毛与温存同软：戳到了，也不刺手。";
}

export function formatSoftfeltingAside(historyCount: number): string {
  if (historyCount <= 0) return "针还净：第一笔流通会留下第一下被戳过的形。";
  if (historyCount < 20) return `约戳过 ${historyCount} 次：每一次都是愿意被温柔成形的许可。`;
  return `逾 ${historyCount} 次轻戳：针沿叠着被温柔绕过的毛。`;
}

export function formatSoftfeltingEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好戳戳针与羊毛条：今天从愿意戳一点蓬松开始。";
  if (circulationsToday < 3) return "取针、扯毛、轻戳：流通也是一种轻轻的成形。";
  return "忙完把针收好——戳完了，人也要松一松腕。";
}

export function formatSoftfeltingPair(day: number, warmth: number): string {
  return `${formatFeltingNeedleLine(day)} ${formatWoolRovingLine(warmth)}`;
}
