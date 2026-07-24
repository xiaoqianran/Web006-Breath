/**
 * 擀面杖与撒粉勺叙事（纯函数，可单测）
 * 把面擀开：不是压扁，是「让厚度也变得温柔均匀」。
 */

export function formatRollingPinLine(day: number): string {
  if (day % 3 === 0) return "擀面杖滚动：木轴还带着一点掌的温。";
  if (day % 2 === 0) return "轴很圆：只推厚度，不推急躁。";
  return "擀面杖安静：专门给愿意把面也铺开的人。";
}

export function formatDustSpoonLine(warmth: number): string {
  if (warmth <= 0) return "撒粉勺还空：等第一份温存再撒第一层。";
  if (warmth < 12) return "勺孔微漏：像轻轻说「薄薄一层就好」。";
  if (warmth < 24) return "撒粉勺掠过台面：像店把粘连也化成柔软。";
  return "粉与温存同薄：防了粘，也不盖住面香。";
}

export function formatRollingpinAside(historyCount: number): string {
  if (historyCount <= 0) return "杖还靠着：第一笔流通会留下第一片擀开。";
  if (historyCount < 20) return `约擀过 ${historyCount} 次面：每一次都是愿意被温柔铺开的许可。`;
  return `逾 ${historyCount} 次滚动：杖沿叠着被温柔推过的厚度。`;
}

export function formatRollingpinEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好擀面杖与撒粉勺：今天从愿意铺开一层开始。";
  if (circulationsToday < 3) return "撒粉、滚动、铺匀：流通也是一种轻轻的延展。";
  return "忙完把杖挂好——擀完了，人也要松一松肩。";
}

export function formatRollingpinPair(day: number, warmth: number): string {
  return `${formatRollingPinLine(day)} ${formatDustSpoonLine(warmth)}`;
}
