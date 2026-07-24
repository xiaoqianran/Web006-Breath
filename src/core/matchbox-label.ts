/**
 * 火柴盒与火柴叙事（纯函数，可单测）
 * 划一根火：不是玩火说教，是「让第一点光也能被郑重地点起」。
 */

export function formatMatchboxLine(day: number): string {
  if (day % 3 === 0) return "火柴盒半开：盒里还整齐地排着几根细木。";
  if (day % 2 === 0) return "盒很轻：只装够点燃的量，不装慌。";
  return "火柴盒安静：专门给愿意把第一点光也郑重点起的人。";
}

export function formatMatchstickLine(warmth: number): string {
  if (warmth <= 0) return "火柴还整：等第一份温存再划第一下。";
  if (warmth < 12) return "头微红：像轻轻说「划一下就好」。";
  if (warmth < 24) return "火柴擦过磷面：像店把第一点光也递进暗里。";
  return "火与温存同短：亮到了，也不灼人。";
}

export function formatMatchboxAside(historyCount: number): string {
  if (historyCount <= 0) return "盒还满着：第一笔流通会留下第一根被点燃的木。";
  if (historyCount < 20) return `约划过 ${historyCount} 次：每一次都是愿意被温柔点亮的许可。`;
  return `逾 ${historyCount} 次轻划：盒沿叠着被温柔点过的火。`;
}

export function formatMatchboxEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好火柴盒与火柴：今天从愿意点起第一点光开始。";
  if (circulationsToday < 3) return "开盒、轻划、点燃：流通也是一种轻轻的起始。";
  return "忙完把盒盖好——点完了，人也要松一松腕。";
}

export function formatMatchboxPair(day: number, warmth: number): string {
  return `${formatMatchboxLine(day)} ${formatMatchstickLine(warmth)}`;
}
