/**
 * 浮雕石与嵌框叙事（纯函数，可单测）
 * 嵌一下：不是硬塞，是「让肖像也能被温柔地护住」。
 */

export function formatCameoStoneLine(day: number): string {
  if (day % 3 === 0) return "浮雕石静放：轮廓还带着一点柔的光。";
  if (day % 2 === 0) return "石很细：只嵌一点，不硬塞。";
  return "浮雕石安静：专门给愿意把肖像也温柔护住的人。";
}

export function formatCameoBezelLine(warmth: number): string {
  if (warmth <= 0) return "嵌框还空：等第一份温存再轻轻托上。";
  if (warmth < 12) return "框微亮：像轻轻说「护一下就好」。";
  if (warmth < 24) return "框带着石：像店把肖像也围成安。";
  return "框与温存同软：护到了，也不勒。";
}

export function formatSoftcameoAside(historyCount: number): string {
  if (historyCount <= 0) return "石还净：第一笔流通会留下第一记被温柔嵌过的护。";
  if (historyCount < 20) return `约嵌过 ${historyCount} 次：每一次都是愿意被温柔护住的许可。`;
  return `逾 ${historyCount} 次轻嵌：框沿叠着被温柔托过的光。`;
}

export function formatSoftcameoEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好浮雕石与嵌框：今天从愿意轻轻护一下开始。";
  if (circulationsToday < 3) return "选石、入框、轻嵌：流通也是一种轻轻的护住。";
  return "忙完把框收好——嵌完了，人也要松一松肩。";
}

export function formatSoftcameoPair(day: number, warmth: number): string {
  return `${formatCameoStoneLine(day)} ${formatCameoBezelLine(warmth)}`;
}
