/**
 * 纺锤与毛条叙事（纯函数，可单测）
 * 捻一缕：不是急着成线，是「让蓬松也能被温柔地捻成细线」。
 */

export function formatDropSpindleLine(day: number): string {
  if (day % 3 === 0) return "纺锤静放：轮盘还带着一点木的温。";
  if (day % 2 === 0) return "锤很轻：只捻一缕，不赶工。";
  return "纺锤安静：专门给愿意把蓬松也轻轻捻细的人。";
}

export function formatSoftRovingLine(warmth: number): string {
  if (warmth <= 0) return "毛条还整：等第一份温存再抽第一缕。";
  if (warmth < 12) return "条微松：像轻轻说「捻一下就好」。";
  if (warmth < 24) return "毛在指间成线：像店把蓬松也捻成细线。";
  return "毛与温存同软：捻到了，也不断线。";
}

export function formatSoftspindleAside(historyCount: number): string {
  if (historyCount <= 0) return "锤还空着：第一笔流通会留下第一缕被捻过的线。";
  if (historyCount < 20) return `约捻过 ${historyCount} 次：每一次都是愿意被温柔成形的许可。`;
  return `逾 ${historyCount} 次轻捻：轮盘叠着被温柔转过的线。`;
}

export function formatSoftspindleEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好纺锤与毛条：今天从愿意捻一点蓬松开始。";
  if (circulationsToday < 3) return "取锤、抽毛、轻捻：流通也是一种轻轻的成形。";
  return "忙完把锤放好——捻完了，人也要松一松腕。";
}

export function formatSoftspindlePair(day: number, warmth: number): string {
  return `${formatDropSpindleLine(day)} ${formatSoftRovingLine(warmth)}`;
}
