/**
 * 柠檬碟与柑橘小刀叙事（纯函数，可单测）
 * 茶边一点酸：不是刺激，是「让回味也醒一醒」。
 */

export function formatLemonDishLine(day: number): string {
  if (day % 3 === 0) return "柠檬碟端出：碟边还带着一点清的香。";
  if (day % 2 === 0) return "片很薄：只醒茶，不抢茶。";
  return "柠檬碟安静：专门给愿意让回味也亮一点的人。";
}

export function formatCitrusKnifeLine(warmth: number): string {
  if (warmth <= 0) return "柑橘小刀还收着：等第一份温存再切第一片。";
  if (warmth < 12) return "刀刃很轻：像轻轻说「薄一点就好」。";
  if (warmth < 24) return "小刀切过果皮：像店把清醒也递到杯边。";
  return "刀与温存同薄：切开了，也不伤到掌。";
}

export function formatCitrusAside(historyCount: number): string {
  if (historyCount <= 0) return "碟还空着：第一笔流通会留下第一片醒茶。";
  if (historyCount < 20) return `约切过 ${historyCount} 片柠檬：每一片都是愿意被温柔叫醒的许可。`;
  return `逾 ${historyCount} 片清香：碟沿叠着被温柔醒过的茶。`;
}

export function formatCitrusEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好柠檬碟与小刀：今天从愿意醒一醒茶开始。";
  if (circulationsToday < 3) return "切片、入碟、靠杯：流通也是一种轻轻的提神。";
  return "忙完把小刀擦净——醒完了，人也要松一松腕。";
}

export function formatCitrusPair(day: number, warmth: number): string {
  return `${formatLemonDishLine(day)} ${formatCitrusKnifeLine(warmth)}`;
}
