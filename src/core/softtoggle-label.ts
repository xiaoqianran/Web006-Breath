/**
 * 一字扣与圆环叙事（纯函数，可单测）
 * 扣一下：不是硬卡死，是「让开合也能被温柔地接住」。
 */

export function formatToggleBarLine(day: number): string {
  if (day % 3 === 0) return "一字扣静放：杆端还带着一点细的光。";
  if (day % 2 === 0) return "杆很稳：只扣一点，不硬卡。";
  return "一字扣安静：专门给愿意把开合也温柔接住的人。";
}

export function formatToggleRingLine(warmth: number): string {
  if (warmth <= 0) return "圆环还空：等第一份温存再轻轻扣上。";
  if (warmth < 12) return "环微亮：像轻轻说「扣一下就好」。";
  if (warmth < 24) return "环带着杆：像店把开的也扣成稳。";
  return "环与温存同软：扣到了，也不紧。";
}

export function formatSofttoggleAside(historyCount: number): string {
  if (historyCount <= 0) return "杆还齐：第一笔流通会留下第一记被温柔扣过的合。";
  if (historyCount < 20) return `约扣过 ${historyCount} 次：每一次都是愿意被温柔接住的许可。`;
  return `逾 ${historyCount} 次轻扣：环口叠着被温柔合过的光。`;
}

export function formatSofttoggleEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好一字扣与圆环：今天从愿意轻轻扣一下开始。";
  if (circulationsToday < 3) return "穿杆、入环、轻扣：流通也是一种轻轻的接住。";
  return "忙完把扣放好——扣完了，人也要松一松肩。";
}

export function formatSofttogglePair(day: number, warmth: number): string {
  return `${formatToggleBarLine(day)} ${formatToggleRingLine(warmth)}`;
}
