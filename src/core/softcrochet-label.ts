/**
 * 钩针与线团叙事（纯函数，可单测）
 * 钩一圈：不是急着完工，是「让空洞也能被温柔地钩成形状」。
 */

export function formatCrochetHookLine(day: number): string {
  if (day % 3 === 0) return "钩针静放：针柄还带着一点木的温。";
  if (day % 2 === 0) return "针很细：只钩一圈，不勒紧。";
  return "钩针安静：专门给愿意把空洞也轻轻钩满的人。";
}

export function formatSoftYarnBallLine(warmth: number): string {
  if (warmth <= 0) return "线团还整：等第一份温存再抽第一缕。";
  if (warmth < 12) return "线头微松：像轻轻说「钩一下就好」。";
  if (warmth < 24) return "线绕过钩针：像店把形状也递给空洞。";
  return "线与温存同软：钩到了，也不打结。";
}

export function formatSoftcrochetAside(historyCount: number): string {
  if (historyCount <= 0) return "团还满着：第一笔流通会留下第一圈被钩过的形。";
  if (historyCount < 20) return `约钩过 ${historyCount} 次：每一次都是愿意被温柔成形的许可。`;
  return `逾 ${historyCount} 次轻钩：针沿叠着被温柔绕过的线。`;
}

export function formatSoftcrochetEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好钩针与线团：今天从愿意钩一点空洞开始。";
  if (circulationsToday < 3) return "取针、抽线、轻钩：流通也是一种轻轻的成形。";
  return "忙完把线绕好——钩完了，人也要松一松腕。";
}

export function formatSoftcrochetPair(day: number, warmth: number): string {
  return `${formatCrochetHookLine(day)} ${formatSoftYarnBallLine(warmth)}`;
}
