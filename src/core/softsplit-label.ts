/**
 * 开口环与撬环器叙事（纯函数，可单测）
 * 撬一下：不是硬掰断，是「让挂上的也能被温柔地打开」。
 */

export function formatSplitRingLine(day: number): string {
  if (day % 3 === 0) return "开口环静堆：环口还带着一点细的缝。";
  if (day % 2 === 0) return "环很韧：只开一点，不硬掰。";
  return "开口环安静：专门给愿意把挂上的也温柔打开的人。";
}

export function formatSplitOpenerLine(warmth: number): string {
  if (warmth <= 0) return "撬环器还合：等第一份温存再轻轻撬一下。";
  if (warmth < 12) return "器微张：像轻轻说「开一下就好」。";
  if (warmth < 24) return "器带着环：像店把扣着的也开成路。";
  return "器与温存同软：开到了，也不伤环。";
}

export function formatSoftsplitAside(historyCount: number): string {
  if (historyCount <= 0) return "环还齐：第一笔流通会留下第一记被温柔撬过的口。";
  if (historyCount < 20) return `约开过 ${historyCount} 次：每一次都是愿意被温柔打开的许可。`;
  return `逾 ${historyCount} 次轻开：环口叠着被温柔撬过的缝。`;
}

export function formatSoftsplitEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好开口环与撬环器：今天从愿意轻轻开一下开始。";
  if (circulationsToday < 3) return "夹环、微撬、轻开：流通也是一种轻轻的通路。";
  return "忙完把器合上——开完了，人也要松一松指。";
}

export function formatSoftsplitPair(day: number, warmth: number): string {
  return `${formatSplitRingLine(day)} ${formatSplitOpenerLine(warmth)}`;
}
