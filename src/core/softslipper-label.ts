/**
 * 软室内拖鞋与木鞋托盘叙事（纯函数，可单测）
 * 换一双：不是规矩说教，是「让脚步也接到可卸下尘土的温柔」。
 * 与 mat-label 的 formatShoeBoxLine 区分命名。
 */

export function formatSoftSlipperLine(day: number): string {
  if (day % 3 === 0) return "软室内拖鞋并放：鞋口还带着一点暖的绒。";
  if (day % 2 === 0) return "鞋很轻：只换一双，不压脚。";
  return "拖鞋安静：专门给愿意把尘也轻轻卸下的人。";
}

export function formatWoodShoeTrayLine(warmth: number): string {
  if (warmth <= 0) return "木鞋托盘还空：等第一份温存再接第一双。";
  if (warmth < 12) return "盘沿微干：像轻轻说「放这里就好」。";
  if (warmth < 24) return "拖鞋落在托盘上：像店把门外的尘也留在门口。";
  return "盘与温存同浅：接住了，也不响。";
}

export function formatSoftslipperAside(historyCount: number): string {
  if (historyCount <= 0) return "鞋还并着：第一笔流通会留下第一双被换过的暖。";
  if (historyCount < 20) return `约换过 ${historyCount} 次：每一次都是愿意被温柔卸尘的许可。`;
  return `逾 ${historyCount} 次轻换：盘沿叠着被温柔放过的鞋。`;
}

export function formatSoftslipperEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好拖鞋与木托盘：今天从愿意卸一点尘开始。";
  if (circulationsToday < 3) return "换鞋、轻放、理齐：流通也是一种轻轻的安顿。";
  return "忙完把盘擦净——换完了，人也要松一松肩。";
}

export function formatSoftslipperPair(day: number, warmth: number): string {
  return `${formatSoftSlipperLine(day)} ${formatWoodShoeTrayLine(warmth)}`;
}
