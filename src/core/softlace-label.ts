/**
 * 梭心与花边枕叙事（纯函数，可单测）
 * 绕一圈：不是急着完工，是「让空隙也能被温柔地编出花来」。
 * 与 lace-label（窗纱）区分命名。
 */

export function formatLaceBobbinLine(day: number): string {
  if (day % 3 === 0) return "梭心静放：轴上还绕着一点细的线。";
  if (day % 2 === 0) return "梭很轻：只绕一圈，不勒紧。";
  return "梭心安静：专门给愿意把空隙也轻轻编满的人。";
}

export function formatLacePillowLine(warmth: number): string {
  if (warmth <= 0) return "花边枕还空：等第一份温存再钉第一针。";
  if (warmth < 12) return "枕面微鼓：像轻轻说「钉这里就好」。";
  if (warmth < 24) return "线在枕上交错：像店把空隙也编成花。";
  return "枕与温存同软：编到了，也不散线。";
}

export function formatSoftlaceAside(historyCount: number): string {
  if (historyCount <= 0) return "枕还净：第一笔流通会留下第一圈被编过的花。";
  if (historyCount < 20) return `约编过 ${historyCount} 次：每一次都是愿意被温柔织密的许可。`;
  return `逾 ${historyCount} 次轻编：枕沿叠着被温柔绕过的线。`;
}

export function formatSoftlaceEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好梭心与花边枕：今天从愿意编一点空隙开始。";
  if (circulationsToday < 3) return "绕梭、轻钉、编花：流通也是一种轻轻的密合。";
  return "忙完把线理顺——编完了，人也要松一松腕。";
}

export function formatSoftlacePair(day: number, warmth: number): string {
  return `${formatLaceBobbinLine(day)} ${formatLacePillowLine(warmth)}`;
}
