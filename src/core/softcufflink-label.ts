/**
 * 袖扣与扣杆叙事（纯函数，可单测）
 * 扣一下：不是硬卡死，是「让袖口也能被温柔地收好」。
 */

export function formatCufflinkFaceLine(day: number): string {
  if (day % 3 === 0) return "袖扣静放：扣面还带着一点细的光。";
  if (day % 2 === 0) return "面很稳：只扣一点，不硬卡。";
  return "袖扣安静：专门给愿意把袖口也温柔收好的人。";
}

export function formatCuffPostLine(warmth: number): string {
  if (warmth <= 0) return "扣杆还松：等第一份温存再轻轻穿上。";
  if (warmth < 12) return "杆微亮：像轻轻说「扣一下就好」。";
  if (warmth < 24) return "杆带着面：像店把散的袖口也收成整。";
  return "杆与温存同软：扣到了，也不紧。";
}

export function formatSoftcufflinkAside(historyCount: number): string {
  if (historyCount <= 0) return "扣还齐：第一笔流通会留下第一记被温柔扣过的收。";
  if (historyCount < 20) return `约扣过 ${historyCount} 次：每一次都是愿意被温柔收好的许可。`;
  return `逾 ${historyCount} 次轻扣：扣面叠着被温柔穿过的光。`;
}

export function formatSoftcufflinkEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好袖扣与扣杆：今天从愿意轻轻扣一下开始。";
  if (circulationsToday < 3) return "穿杆、合面、轻扣：流通也是一种轻轻的收好。";
  return "忙完把扣收好——扣完了，人也要松一松腕。";
}

export function formatSoftcufflinkPair(day: number, warmth: number): string {
  return `${formatCufflinkFaceLine(day)} ${formatCuffPostLine(warmth)}`;
}
