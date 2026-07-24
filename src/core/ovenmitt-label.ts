/**
 * 隔热手套与烤盘垫叙事（纯函数，可单测）
 * 端出热的：不是逞强，是「让手也有被保护的权利」。
 */

export function formatOvenMittLine(day: number): string {
  if (day % 3 === 0) return "隔热手套套上：布面还带着一点厚的软。";
  if (day % 2 === 0) return "套很厚：只挡烫，不挡细心。";
  return "隔热手套安静：专门给愿意把热也端稳的人。";
}

export function formatBakePadLine(warmth: number): string {
  if (warmth <= 0) return "烤盘垫还凉：等第一份温存再垫第一盘。";
  if (warmth < 12) return "垫面微热：像轻轻说「放这里安全」。";
  if (warmth < 24) return "烤盘垫接住热底：像店把烫也托在掌外。";
  return "垫与温存同厚：接住了，也不烫到桌。";
}

export function formatOvenmittAside(historyCount: number): string {
  if (historyCount <= 0) return "套还空着：第一笔流通会留下第一次被保护的端。";
  if (historyCount < 20) return `约端过 ${historyCount} 次热盘：每一次都是愿意被温柔护手的许可。`;
  return `逾 ${historyCount} 次护端：垫角叠着被温柔接过的烫。`;
}

export function formatOvenmittEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好手套与烤盘垫：今天从愿意护住双手开始。";
  if (circulationsToday < 3) return "套手、垫盘、端稳：流通也是一种轻轻的保护。";
  return "忙完把手套挂好——端完了，人也要松一松肩。";
}

export function formatOvenmittPair(day: number, warmth: number): string {
  return `${formatOvenMittLine(day)} ${formatBakePadLine(warmth)}`;
}
