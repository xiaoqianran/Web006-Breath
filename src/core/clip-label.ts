/**
 * 布夹与划线笔叙事（纯函数，可单测）
 * 先夹住再缝：固定住晃动的边，心也少一分跑偏。
 */

export function formatFabricClipLine(day: number): string {
  if (day % 3 === 0) return "布夹排成一小排：浅杏、米白与一点灰绿。";
  if (day % 2 === 0) return "夹口有细绒：刚固定过谁的贴边。";
  return "布夹安静：先夹住，再决定针脚往哪走。";
}

export function formatMarkingPenLine(warmth: number): string {
  if (warmth <= 0) return "划线笔还盖着：等第一份温存再画第一道虚线。";
  if (warmth < 12) return "笔迹很淡：改起来容易，也提醒你不必一次画死。";
  if (warmth < 24) return "虚线在布上轻轻走：像给情绪一个可调整的路径。";
  return "笔与温存同淡：画错了，也可以重新来。";
}

export function formatClipAside(shelfCount: number): string {
  if (shelfCount <= 0) return "夹子还空着：货架空时，边也不必急着固定。";
  if (shelfCount < 3) return `约有 ${shelfCount} 件成品需要夹稳标签，轻轻一按即可。`;
  return `逾 ${shelfCount} 件在架：夹子记着每一道边的重量。`;
}

export function formatClipEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先夹好第一道边：今天从「不跑偏」开始。";
  if (circulationsToday < 3) return "夹住、画线、缝合：流通也需要稳住节奏。";
  return "忙完把夹子收回盒——边稳了，人也要松。";
}

export function formatClipPair(day: number, warmth: number): string {
  return `${formatFabricClipLine(day)} ${formatMarkingPenLine(warmth)}`;
}
