/**
 * 细锉与抛光布叙事（纯函数，可单测）
 * 锉一下：不是急着磨平，是「让毛边也能被温柔地收顺」。
 */

export function formatNeedleFileLine(day: number): string {
  if (day % 3 === 0) return "细锉静放：锉身还带着一点金属的凉。";
  if (day % 2 === 0) return "锉很细：只锉一下，不硬磨。";
  return "细锉安静：专门给愿意把毛边也轻轻收顺的人。";
}

export function formatPolishClothLine(warmth: number): string {
  if (warmth <= 0) return "抛光布还叠：等第一份温存再擦第一下。";
  if (warmth < 12) return "布微软：像轻轻说「擦一下就好」。";
  if (warmth < 24) return "布贴着面：像店把毛边也收成光。";
  return "布与温存同软：擦到了，也不伤面。";
}

export function formatSoftfileAside(historyCount: number): string {
  if (historyCount <= 0) return "锉还净：第一笔流通会留下第一下被锉过的痕。";
  if (historyCount < 20) return `约锉过 ${historyCount} 次：每一次都是愿意被温柔收顺的许可。`;
  return `逾 ${historyCount} 次轻锉：锉沿叠着被温柔擦过的光。`;
}

export function formatSoftfileEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好细锉与抛光布：今天从愿意收一点毛边开始。";
  if (circulationsToday < 3) return "取锉、轻锉、再擦：流通也是一种轻轻的收尾。";
  return "忙完把布叠好——锉完了，人也要松一松腕。";
}

export function formatSoftfilePair(day: number, warmth: number): string {
  return `${formatNeedleFileLine(day)} ${formatPolishClothLine(warmth)}`;
}
