/**
 * 跳环与开环钳叙事（纯函数，可单测）
 * 开一下：不是硬掰断，是「让连接也能被温柔地打开」。
 */

export function formatJumpRingPileLine(day: number): string {
  if (day % 3 === 0) return "跳环静堆：环口还带着一点细的缝。";
  if (day % 2 === 0) return "环很轻：只开一点，不硬掰。";
  return "跳环安静：专门给愿意把连接也温柔打开的人。";
}

export function formatJumpPliersLine(warmth: number): string {
  if (warmth <= 0) return "开环钳还合：等第一份温存再轻轻张一下。";
  if (warmth < 12) return "钳微张：像轻轻说「开一下就好」。";
  if (warmth < 24) return "钳带着环：像店把连着的也开成路。";
  return "钳与温存同软：开到了，也不伤环。";
}

export function formatSoftjumpAside(historyCount: number): string {
  if (historyCount <= 0) return "环还齐：第一笔流通会留下第一记被温柔开过的口。";
  if (historyCount < 20) return `约开过 ${historyCount} 次：每一次都是愿意被温柔打开的许可。`;
  return `逾 ${historyCount} 次轻开：环口叠着被温柔张过的缝。`;
}

export function formatSoftjumpEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好跳环与开环钳：今天从愿意轻轻开一下开始。";
  if (circulationsToday < 3) return "夹环、微张、轻开：流通也是一种轻轻的通路。";
  return "忙完把钳合上——开完了，人也要松一松指。";
}

export function formatSoftjumpPair(day: number, warmth: number): string {
  return `${formatJumpRingPileLine(day)} ${formatJumpPliersLine(warmth)}`;
}
