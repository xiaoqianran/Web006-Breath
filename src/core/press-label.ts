/**
 * 书压与压条叙事（纯函数，可单测）
 * 装订之后要压一压：让页与页贴紧，心也收一收。
 */

export function formatBookPressLine(day: number): string {
  if (day % 3 === 0) return "书压轻轻落下：页边慢慢贴齐。";
  if (day % 2 === 0) return "压板上有浅痕：压过不止一本瞬间册。";
  return "书压安静：装订完，还需要一点时间贴紧。";
}

export function formatWeightBarLine(warmth: number): string {
  if (warmth <= 0) return "压条还凉：等第一份温存再压第一叠页。";
  if (warmth < 12) return "条面有细尘：刚压过谁的手账边。";
  if (warmth < 24) return "重量刚好：不压扁故事，只让它们贴在一起。";
  return "压条与温存同重：贴紧了，也仍留着呼吸的缝。";
}

export function formatPressAside(historyCount: number): string {
  if (historyCount <= 0) return "压机还空：第一本装订好的瞬间卡会先躺进去。";
  if (historyCount < 20) return `约压过 ${historyCount} 叠页：每叠都是一次愿意收口的重量。`;
  return `逾 ${historyCount} 次压合：板面记得所有被贴紧的温柔。`;
}

export function formatPressEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先清一清压板：今天从愿意贴紧开始。";
  if (circulationsToday < 3) return "装订、加压、静置：流通也需要一点时间定型。";
  return "忙完把压条收好——贴紧之后，人也要松开。";
}

export function formatPressPair(day: number, warmth: number): string {
  return `${formatBookPressLine(day)} ${formatWeightBarLine(warmth)}`;
}
