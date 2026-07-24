/**
 * 软织毛线帽与木帽托叙事（纯函数，可单测）
 * 戴一顶：不是怕风说教，是「让头顶的凉也能被温柔地捂住」。
 */

export function formatSoftBeanieLine(day: number): string {
  if (day % 3 === 0) return "软织毛线帽叠好：帽檐还带着一点暖的绒。";
  if (day % 2 === 0) return "帽很软：只捂一顶，不勒额。";
  return "毛线帽安静：专门给愿意把头顶也轻轻捂住的人。";
}

export function formatWoodHatFormLine(warmth: number): string {
  if (warmth <= 0) return "木帽托还空：等第一份温存再架第一顶。";
  if (warmth < 12) return "托面微圆：像轻轻说「放这里就好」。";
  if (warmth < 24) return "帽架在木托上：像店把头顶的暖也留给出门的人。";
  return "托与温存同稳：架住了，也不压扁绒。";
}

export function formatSoftbeanieAside(historyCount: number): string {
  if (historyCount <= 0) return "帽还叠着：第一笔流通会留下第一顶被戴过的暖。";
  if (historyCount < 20) return `约递过 ${historyCount} 次：每一次都是愿意被温柔捂头的许可。`;
  return `逾 ${historyCount} 次轻递：托沿叠着被温柔戴过的绒。`;
}

export function formatSoftbeanieEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好毛线帽与木帽托：今天从愿意捂一点头顶开始。";
  if (circulationsToday < 3) return "取帽、轻戴、放回：流通也是一种轻轻的护暖。";
  return "忙完把托理齐——递完了，人也要松一松肩。";
}

export function formatSoftbeaniePair(day: number, warmth: number): string {
  return `${formatSoftBeanieLine(day)} ${formatWoodHatFormLine(warmth)}`;
}
