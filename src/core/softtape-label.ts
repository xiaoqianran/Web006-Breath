/**
 * 软布卷尺与木夹叙事（纯函数，可单测）
 * 量一寸：不是苛刻标准，是「让合适也能被温柔地量出来」。
 */

export function formatSoftClothTapeLine(day: number): string {
  if (day % 3 === 0) return "软布卷尺卷好：尺面还带着一点布的温。";
  if (day % 2 === 0) return "尺很软：只量一寸，不勒紧。";
  return "卷尺安静：专门给愿意把合适也轻轻量出的人。";
}

export function formatTapeWoodClipLine(warmth: number): string {
  if (warmth <= 0) return "木夹还松：等第一份温存再夹第一端。";
  if (warmth < 12) return "夹口微合：像轻轻说「夹住就好」。";
  if (warmth < 24) return "尺端被木夹轻轻扣住：像店把量出的温柔也记牢。";
  return "夹与温存同轻：夹到了，也不咬坏尺。";
}

export function formatSofttapeAside(historyCount: number): string {
  if (historyCount <= 0) return "尺还卷着：第一笔流通会留下第一寸被量过的合适。";
  if (historyCount < 20) return `约量过 ${historyCount} 次：每一次都是愿意被温柔合身的许可。`;
  return `逾 ${historyCount} 次轻量：尺沿叠着被温柔量过的寸。`;
}

export function formatSofttapeEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好卷尺与木夹：今天从愿意量一点合适开始。";
  if (circulationsToday < 3) return "拉开、轻量、卷回：流通也是一种轻轻的合身。";
  return "忙完把尺卷好——量完了，人也要松一松肩。";
}

export function formatSofttapePair(day: number, warmth: number): string {
  return `${formatSoftClothTapeLine(day)} ${formatTapeWoodClipLine(warmth)}`;
}
