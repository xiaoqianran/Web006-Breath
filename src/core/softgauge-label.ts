/**
 * 棒针尺与麻花针叙事（纯函数，可单测）
 * 量一格：不是急着定论，是「让尺寸也能被温柔地量准」。
 */

export function formatNeedleGaugeLine(day: number): string {
  if (day % 3 === 0) return "棒针尺静放：孔沿还带着一点金属的凉。";
  if (day % 2 === 0) return "尺很细：只量一格，不定论。";
  return "棒针尺安静：专门给愿意把尺寸也轻轻量准的人。";
}

export function formatCableNeedleLine(warmth: number): string {
  if (warmth <= 0) return "麻花针还空：等第一份温存再挂第一针。";
  if (warmth < 12) return "针身微弯：像轻轻说「绕一下就好」。";
  if (warmth < 24) return "针托住活针：像店把交叉也量成柔软。";
  return "针与温存同软：量到了，也不勒线。";
}

export function formatSoftgaugeAside(historyCount: number): string {
  if (historyCount <= 0) return "尺还净：第一笔流通会留下第一格被量过的孔。";
  if (historyCount < 20) return `约量过 ${historyCount} 次：每一次都是愿意被温柔确认的许可。`;
  return `逾 ${historyCount} 次轻量：孔沿叠着被温柔试过的针。`;
}

export function formatSoftgaugeEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好棒针尺与麻花针：今天从愿意量一点尺寸开始。";
  if (circulationsToday < 3) return "取尺、挂针、轻量：流通也是一种轻轻的确认。";
  return "忙完把针并好——量完了，人也要松一松腕。";
}

export function formatSoftgaugePair(day: number, warmth: number): string {
  return `${formatNeedleGaugeLine(day)} ${formatCableNeedleLine(warmth)}`;
}
