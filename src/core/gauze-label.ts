/**
 * 棉垫与纱布卷叙事（纯函数，可单测）
 * 垫一层、裹一圈：不是医疗说教，是「让伤口也接到可被托住的温柔」。
 */

export function formatCottonPadLine(day: number): string {
  if (day % 3 === 0) return "棉垫叠好：最上层还带着一点干净的白。";
  if (day % 2 === 0) return "垫很薄：只托一层，不压疼。";
  return "棉垫安静：专门给愿意把疼也轻轻垫住的人。";
}

export function formatGauzeRollLine(warmth: number): string {
  if (warmth <= 0) return "纱布卷还紧：等第一份温存再松第一圈。";
  if (warmth < 12) return "卷边微松：像轻轻说「裹住就好」。";
  if (warmth < 24) return "纱布从卷上展开：像店把保护也递给皮肤。";
  return "卷与温存同轻：裹到了，也不勒紧。";
}

export function formatGauzeAside(historyCount: number): string {
  if (historyCount <= 0) return "垫还叠着：第一笔流通会留下第一层被托住的白。";
  if (historyCount < 20) return `约垫过 ${historyCount} 次：每一次都是愿意被温柔托住的许可。`;
  return `逾 ${historyCount} 次轻垫：纱边叠着被温柔裹过的白。`;
}

export function formatGauzeEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好棉垫与纱布卷：今天从愿意托住一点疼开始。";
  if (circulationsToday < 3) return "取垫、轻裹、收卷：流通也是一种轻轻的保护。";
  return "忙完把卷收好——裹完了，人也要松一松腕。";
}

export function formatGauzePair(day: number, warmth: number): string {
  return `${formatCottonPadLine(day)} ${formatGauzeRollLine(warmth)}`;
}
