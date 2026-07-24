/**
 * 软针插与直针叙事（纯函数，可单测）
 * 插一针：不是扎手说教，是「让针尖也能被温柔地安住」。
 * 与 thimble-label 的 formatPincushionLine 区分命名。
 */

export function formatSoftPinCushionLine(day: number): string {
  if (day % 3 === 0) return "软针插静放：绒面还带着一点圆的鼓。";
  if (day % 2 === 0) return "插很软：只收几针，不刺手。";
  return "针插安静：专门给愿意把针尖也轻轻安住的人。";
}

export function formatStraightPinLine(warmth: number): string {
  if (warmth <= 0) return "直针还整：等第一份温存再插第一枚。";
  if (warmth < 12) return "针尖微亮：像轻轻说「插一下就好」。";
  if (warmth < 24) return "直针没入绒面：像店把锋利也温柔地收住。";
  return "针与温存同细：插到了，也不歪倒。";
}

export function formatSoftpinAside(historyCount: number): string {
  if (historyCount <= 0) return "插还空着：第一笔流通会留下第一枚被安住的针。";
  if (historyCount < 20) return `约插过 ${historyCount} 次：每一次都是愿意被温柔收锋的许可。`;
  return `逾 ${historyCount} 次轻插：绒面叠着被温柔安过的针。`;
}

export function formatSoftpinEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好针插与直针：今天从愿意安住一点锋开始。";
  if (circulationsToday < 3) return "取针、轻插、归位：流通也是一种轻轻的收锋。";
  return "忙完把插理齐——插完了，人也要松一松腕。";
}

export function formatSoftpinPair(day: number, warmth: number): string {
  return `${formatSoftPinCushionLine(day)} ${formatStraightPinLine(warmth)}`;
}
