/**
 * 浆糊盅与排刷叙事（纯函数，可单测）
 * 粘贴要薄而匀：把散页粘成可以打开的一册。
 */

export function formatPastePotLine(day: number): string {
  if (day % 3 === 0) return "浆糊盅盖子半开：今天的粘贴会薄而匀。";
  if (day % 2 === 0) return "盅沿有干边：刚刷过谁的环衬。";
  return "浆糊盅安静：下一本外壳会先沾一点黏。";
}

export function formatPasteBrushLine(warmth: number): string {
  if (warmth <= 0) return "排刷还干：等第一份温存再蘸第一笔浆。";
  if (warmth < 12) return "刷毛微湿：浆糊在布上轻轻铺开。";
  if (warmth < 24) return "刷得匀了：粘合处不鼓包，也不缺胶。";
  return "刷与温存同匀：粘住了，也仍留着可翻开的缝。";
}

export function formatGlueAside(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先搅匀浆糊：今天从愿意粘合开始。";
  if (circulationsToday < 3) return "蘸浆、刷匀、压平：流通也是一种粘合。";
  return "忙完把刷洗净——粘完了，人也要冲一冲手。";
}

export function formatGlueEncourage(queueLength: number): string {
  if (queueLength <= 0) return "店暂时静：可以刷一块样布，或只闻浆糊的淡香。";
  if (queueLength === 1) return "有一位在等：浆可以后干，人先接住。";
  return `门外约有 ${queueLength} 位——每位都值得一次匀而稳的粘合。`;
}

export function formatGluePair(day: number, warmth: number): string {
  return `${formatPastePotLine(day)} ${formatPasteBrushLine(warmth)}`;
}
