/**
 * 茶蜡与熄烛罩叙事（纯函数，可单测）
 * 点一盏、熄一盏：不是仪式做作，是「让光也能被温柔地给出与收回」。
 */

export function formatTealightLine(day: number): string {
  if (day % 3 === 0) return "茶蜡点着：杯沿还映着一点暖的光。";
  if (day % 2 === 0) return "光很浅：只照一小圈，不刺眼。";
  return "茶蜡安静：专门给愿意把暗也轻轻照亮的人。";
}

export function formatSnufferLine(warmth: number): string {
  if (warmth <= 0) return "熄烛罩还冷：等第一份温存再盖第一盏。";
  if (warmth < 12) return "罩口微温：像轻轻说「熄了也好」。";
  if (warmth < 24) return "罩轻轻扣上：像店把光也温柔地收回。";
  return "罩与温存同轻：熄到了，也不呛烟。";
}

export function formatTealightAside(historyCount: number): string {
  if (historyCount <= 0) return "蜡还新：第一笔流通会留下第一圈被点亮的暖。";
  if (historyCount < 20) return `约点过 ${historyCount} 次：每一次都是愿意被温柔照亮的许可。`;
  return `逾 ${historyCount} 次轻点：杯沿叠着被温柔给过的光。`;
}

export function formatTealightEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好茶蜡与熄烛罩：今天从愿意点一点暖开始。";
  if (circulationsToday < 3) return "点燃、照亮、轻熄：流通也是一种轻轻的明灭。";
  return "忙完把罩擦净——熄完了，人也要松一松肩。";
}

export function formatTealightPair(day: number, warmth: number): string {
  return `${formatTealightLine(day)} ${formatSnufferLine(warmth)}`;
}
