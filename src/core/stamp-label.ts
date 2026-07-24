/**
 * 印模与印泥叙事（纯函数，可单测）
 * 火漆之后压一印：把店的记号轻轻留在封口上。
 */

export function formatSealStampLine(day: number): string {
  if (day % 3 === 0) return "印模擦过一遍：铜面上的纹路又清晰了。";
  if (day % 2 === 0) return "印柄握着温：压下去之前先对齐中心。";
  return "印模安静：下一滴火漆会接住这一枚记号。";
}

export function formatInkPadLine(warmth: number): string {
  if (warmth <= 0) return "印泥还干：等第一份温存再蘸第一印。";
  if (warmth < 12) return "泥面微润：颜色浅而稳，不会糊开。";
  if (warmth < 24) return "印下去留下淡记：像店轻轻说「我在」。";
  return "泥与温存同润：记号留住了，也不盖住纸的呼吸。";
}

export function formatStampAside(historyCount: number): string {
  if (historyCount <= 0) return "还没压印：第一本递出的瞬间册会先要这一记。";
  if (historyCount < 20) return `约压过 ${historyCount} 枚印：每记都是一次愿意署名的许可。`;
  return `逾 ${historyCount} 次压印：铜面记得所有被郑重送出的温柔。`;
}

export function formatStampEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好印模：今天从愿意盖一记「我在」开始。";
  if (circulationsToday < 3) return "蘸泥、对齐、压下：流通也是一种署名。";
  return "忙完把印擦净——记盖完了，人也要松一松腕。";
}

export function formatStampPair(day: number, warmth: number): string {
  return `${formatSealStampLine(day)} ${formatInkPadLine(warmth)}`;
}
