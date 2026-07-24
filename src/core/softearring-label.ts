/**
 * 耳圈与耳钩叙事（纯函数，可单测）
 * 圈一下：不是硬夹紧，是「让耳畔也能被温柔地环住」。
 */

export function formatSoftHoopLine(day: number): string {
  if (day % 3 === 0) return "耳圈静放：圈沿还带着一点细的光。";
  if (day % 2 === 0) return "圈很圆：只环一点，不硬夹。";
  return "耳圈安静：专门给愿意把耳畔也温柔环住的人。";
}

export function formatEarWireLine(warmth: number): string {
  if (warmth <= 0) return "耳钩还直：等第一份温存再轻轻弯一下。";
  if (warmth < 12) return "钩微弯：像轻轻说「戴一下就好」。";
  if (warmth < 24) return "钩带着圈：像店把散的也环成圆。";
  return "钩与温存同软：戴到了，也不勒。";
}

export function formatSoftearringAside(historyCount: number): string {
  if (historyCount <= 0) return "圈还齐：第一笔流通会留下第一圈被温柔环过的光。";
  if (historyCount < 20) return `约戴过 ${historyCount} 次：每一次都是愿意被温柔环住的许可。`;
  return `逾 ${historyCount} 次轻戴：圈沿叠着被温柔弯过的弧。`;
}

export function formatSoftearringEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好耳圈与耳钩：今天从愿意轻轻环一下开始。";
  if (circulationsToday < 3) return "弯钩、入圈、轻戴：流通也是一种轻轻的环住。";
  return "忙完把圈放好——戴完了，人也要松一松肩。";
}

export function formatSoftearringPair(day: number, warmth: number): string {
  return `${formatSoftHoopLine(day)} ${formatEarWireLine(warmth)}`;
}
