/**
 * 计时沙漏与细沙叙事（纯函数，可单测）
 * 三百轮之后：翻一次沙漏，不是催促，是「让时间也接到可被温柔翻过的一面」。
 * 与 hour-label 的 formatHourglassAside 区分命名。
 */

export function formatSandTimerLine(day: number): string {
  if (day % 3 === 0) return "计时沙漏立稳：腰间还细细地流着一点金。";
  if (day % 2 === 0) return "沙很慢：只记一段，不催人。";
  return "计时沙漏安静：专门给愿意把时间也轻轻翻过的人。";
}

export function formatFineSandLine(warmth: number): string {
  if (warmth <= 0) return "细沙还静：等第一份温存再落第一粒。";
  if (warmth < 12) return "沙面微动：像轻轻说「再等一等」。";
  if (warmth < 24) return "沙从窄腰落下：像店把三百轮之后的温柔也递给时间。";
  return "沙与温存同细：落到了，也不慌张。";
}

export function formatSandTimerAside(historyCount: number): string {
  if (historyCount <= 0) return "漏还满着：第一笔流通会留下第一段被翻过的时。";
  if (historyCount < 20) return `约翻过 ${historyCount} 次：每一次都是愿意被温柔计量的许可。`;
  return `逾 ${historyCount} 次轻翻：漏沿叠着被温柔流过的沙。`;
}

export function formatSandTimerEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好计时沙漏与细沙：今天从愿意翻一点时间开始。";
  if (circulationsToday < 3) return "竖好、轻翻、等落：流通也是一种轻轻的计时。";
  return "忙完把沙漏放正——翻完了，人也要松一松肩。";
}

export function formatSandTimerPair(day: number, warmth: number): string {
  return `${formatSandTimerLine(day)} ${formatFineSandLine(warmth)}`;
}
