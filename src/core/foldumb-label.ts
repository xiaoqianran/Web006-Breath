/**
 * 折叠伞与瓷伞筒叙事（纯函数，可单测）
 * 收一把伞：不是赶雨走，是「让湿也能被温柔地放在门口」。
 * 与 entry-label 的 formatUmbrellaStandLine 区分命名。
 */

export function formatFoldUmbrellaLine(day: number): string {
  if (day % 3 === 0) return "折叠伞收好：伞骨还带着一点雨后的润。";
  if (day % 2 === 0) return "伞很轻：只遮一阵，不扛重。";
  return "折叠伞安静：专门给愿意把湿也轻轻收起的人。";
}

export function formatCeramicUmStandLine(warmth: number): string {
  if (warmth <= 0) return "瓷伞筒还空：等第一份温存再插第一把。";
  if (warmth < 12) return "筒口微干：像轻轻说「放这里就好」。";
  if (warmth < 24) return "伞插入瓷筒：像店把门外的雨也托在门口。";
  return "筒与温存同稳：接住了，也不倒。";
}

export function formatFoldumbAside(historyCount: number): string {
  if (historyCount <= 0) return "伞还合着：第一笔流通会留下第一把被收过的湿。";
  if (historyCount < 20) return `约收过 ${historyCount} 次：每一次都是愿意被温柔安放的许可。`;
  return `逾 ${historyCount} 次轻收：筒沿叠着被温柔放过的伞。`;
}

export function formatFoldumbEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好折叠伞与瓷筒：今天从愿意收一点湿开始。";
  if (circulationsToday < 3) return "收伞、轻插、擦干：流通也是一种轻轻的安顿。";
  return "忙完把筒擦净——收完了，人也要松一松肩。";
}

export function formatFoldumbPair(day: number, warmth: number): string {
  return `${formatFoldUmbrellaLine(day)} ${formatCeramicUmStandLine(warmth)}`;
}
