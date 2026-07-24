/**
 * 厨房沙漏与小铃铛叙事（纯函数，可单测）
 * 计时不催人：不是闹钟惊吓，是「该揭盖时轻轻响一下」。
 */

export function formatKitchenHourglassLine(day: number): string {
  if (day % 3 === 0) return "厨房沙漏翻转：砂粒还带着一点慢的静。";
  if (day % 2 === 0) return "砂很细：只记时间，不记急躁。";
  return "沙漏安静：专门给愿意让时间可见的人。";
}

export function formatSoftTimerBellLine(warmth: number): string {
  if (warmth <= 0) return "小铃铛还哑：等第一份温存再响第一声。";
  if (warmth < 12) return "铃舌微动：像轻轻说「可以揭了」。";
  if (warmth < 24) return "小铃一响：像店把等待也变成可听见的温柔。";
  return "铃与温存同轻：响过了，也不吓到人。";
}

export function formatTimerbellAside(historyCount: number): string {
  if (historyCount <= 0) return "沙漏还立着：第一笔流通会留下第一段被听见的等待。";
  if (historyCount < 20) return `约响过 ${historyCount} 次小铃：每一次都是愿意被温柔提醒的许可。`;
  return `逾 ${historyCount} 次计时：砂里叠着被温柔等过的响。`;
}

export function formatTimerbellEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好沙漏与小铃：今天从愿意听见等待开始。";
  if (circulationsToday < 3) return "翻转、等待、轻响：流通也是一种轻轻的提醒。";
  return "忙完把铃放回原位——响完了，人也要松一松肩。";
}

export function formatTimerbellPair(day: number, warmth: number): string {
  return `${formatKitchenHourglassLine(day)} ${formatSoftTimerBellLine(warmth)}`;
}
