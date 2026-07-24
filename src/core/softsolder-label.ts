/**
 * 焊丝与第三只手叙事（纯函数，可单测）
 * 送一丝：不是急着焊满，是「让接缝也能被温柔地填住」。
 */

export function formatSolderWireLine(day: number): string {
  if (day % 3 === 0) return "焊丝静放：卷沿还带着一点银的光。";
  if (day % 2 === 0) return "丝很细：只送一丝，不硬塞。";
  return "焊丝安静：专门给愿意把接缝也轻轻填住的人。";
}

export function formatThirdHandLine(warmth: number): string {
  if (warmth <= 0) return "第三只手还空：等第一份温存再夹第一件。";
  if (warmth < 12) return "夹微稳：像轻轻说「夹一下就好」。";
  if (warmth < 24) return "夹托住件：像店把接缝也稳住。";
  return "夹与温存同软：夹到了，也不勒件。";
}

export function formatSoftsolderAside(historyCount: number): string {
  if (historyCount <= 0) return "丝还整：第一笔流通会留下第一丝被送过的银。";
  if (historyCount < 20) return `约焊过 ${historyCount} 次：每一次都是愿意被温柔填住的许可。`;
  return `逾 ${historyCount} 次轻焊：夹沿叠着被温柔托过的件。`;
}

export function formatSoftsolderEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好焊丝与第三只手：今天从愿意填一点接缝开始。";
  if (circulationsToday < 3) return "取丝、夹稳、轻送：流通也是一种轻轻的填住。";
  return "忙完把夹松开——焊完了，人也要松一松腕。";
}

export function formatSoftsolderPair(day: number, warmth: number): string {
  return `${formatSolderWireLine(day)} ${formatThirdHandLine(warmth)}`;
}
