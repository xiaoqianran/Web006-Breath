/**
 * 润肤乳瓶与按压泵叙事（纯函数，可单测）
 * 按一泵乳：不是护肤说教，是「让干燥的心也接到一点可涂开的润」。
 */

export function formatLotionBottleLine(day: number): string {
  if (day % 3 === 0) return "润肤乳瓶立稳：瓶身还带着一点柔的光。";
  if (day % 2 === 0) return "乳很轻：只涂一层，不油腻。";
  return "乳瓶安静：专门给愿意把润也涂在心上的人。";
}

export function formatPumpCapLine(warmth: number): string {
  if (warmth <= 0) return "按压泵还空：等第一份温存再压第一泵。";
  if (warmth < 12) return "泵口微润：像轻轻说「一泵就够」。";
  if (warmth < 24) return "指尖按下一泵：像店把滋养也递给皮肤。";
  return "泵与温存同准：给出了，也不浪费。";
}

export function formatLotionAside(historyCount: number): string {
  if (historyCount <= 0) return "瓶还满着：第一笔流通会留下第一泵被涂开的润。";
  if (historyCount < 20) return `约按过 ${historyCount} 次：每一次都是愿意被温柔滋养的许可。`;
  return `逾 ${historyCount} 泵轻按：瓶肩叠着被温柔涂过的乳。`;
}

export function formatLotionEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好乳瓶与按压泵：今天从愿意涂一点润开始。";
  if (circulationsToday < 3) return "开盖、轻按、涂匀：流通也是一种轻轻的滋养。";
  return "忙完把泵盖好——涂完了，人也要松一松肩。";
}

export function formatLotionPair(day: number, warmth: number): string {
  return `${formatLotionBottleLine(day)} ${formatPumpCapLine(warmth)}`;
}
