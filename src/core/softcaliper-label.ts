/**
 * 卡尺与厚度规叙事（纯函数，可单测）
 * 量一寸：不是急着定论，是「让尺寸也能被温柔地量准」。
 */

export function formatSoftCaliperLine(day: number): string {
  if (day % 3 === 0) return "卡尺静放：尺身还带着一点金属的凉。";
  if (day % 2 === 0) return "尺很准：只量一寸，不定论。";
  return "卡尺安静：专门给愿意把尺寸也轻轻量准的人。";
}

export function formatThicknessGaugeLine(warmth: number): string {
  if (warmth <= 0) return "厚度规还合：等第一份温存再卡第一片。";
  if (warmth < 12) return "片微贴：像轻轻说「量一下就好」。";
  if (warmth < 24) return "片卡在缝间：像店把厚薄也量成温柔。";
  return "规与温存同软：量到了，也不勒缝。";
}

export function formatSoftcaliperAside(historyCount: number): string {
  if (historyCount <= 0) return "尺还净：第一笔流通会留下第一寸被量过的痕。";
  if (historyCount < 20) return `约量过 ${historyCount} 次：每一次都是愿意被温柔确认的许可。`;
  return `逾 ${historyCount} 次轻量：尺沿叠着被温柔卡过的片。`;
}

export function formatSoftcaliperEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好卡尺与厚度规：今天从愿意量一点尺寸开始。";
  if (circulationsToday < 3) return "取尺、轻卡、读数：流通也是一种轻轻的确认。";
  return "忙完把尺合上——量完了，人也要松一松腕。";
}

export function formatSoftcaliperPair(day: number, warmth: number): string {
  return `${formatSoftCaliperLine(day)} ${formatThicknessGaugeLine(warmth)}`;
}
