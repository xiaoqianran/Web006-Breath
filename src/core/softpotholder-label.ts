/**
 * 杯垫织机与圈圈线叙事（纯函数，可单测）
 * 套一格：不是急着完工，是「让方格也能被温柔地套成柔软」。
 */

export function formatPotholderLoomLine(day: number): string {
  if (day % 3 === 0) return "杯垫织机静放：钉沿还带着一点木的温。";
  if (day % 2 === 0) return "机很稳：只套一格，不赶工。";
  return "杯垫织机安静：专门给愿意把方格也轻轻套满的人。";
}

export function formatLoopYarnLine(warmth: number): string {
  if (warmth <= 0) return "圈圈线还齐：等第一份温存再套第一环。";
  if (warmth < 12) return "环微弹：像轻轻说「套一下就好」。";
  if (warmth < 24) return "环扣在钉上：像店把方格也套成柔软。";
  return "环与温存同软：套到了，也不勒钉。";
}

export function formatSoftpotholderAside(historyCount: number): string {
  if (historyCount <= 0) return "机还空着：第一笔流通会留下第一格被套过的纹。";
  if (historyCount < 20) return `约套过 ${historyCount} 次：每一次都是愿意被温柔成形的许可。`;
  return `逾 ${historyCount} 次轻套：钉沿叠着被温柔扣过的环。`;
}

export function formatSoftpotholderEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好杯垫织机与圈圈线：今天从愿意套一点方格开始。";
  if (circulationsToday < 3) return "取机、套环、轻扣：流通也是一种轻轻的成形。";
  return "忙完把环理好——套完了，人也要松一松腕。";
}

export function formatSoftpotholderPair(day: number, warmth: number): string {
  return `${formatPotholderLoomLine(day)} ${formatLoopYarnLine(warmth)}`;
}
