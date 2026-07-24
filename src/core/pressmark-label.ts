/**
 * 压花书签与丝尾叙事（纯函数，可单测）
 * 夹一页：不是催读，是「让停住的那一页也被温柔记住」。
 */

export function formatPressedMarkLine(day: number): string {
  if (day % 3 === 0) return "压花书签静放：花瓣还透着一点干的粉。";
  if (day % 2 === 0) return "签很薄：只夹一页，不压痛字。";
  return "压花书签安静：专门给愿意把停住也轻轻记住的人。";
}

export function formatSilkTailLine(warmth: number): string {
  if (warmth <= 0) return "丝尾还垂着：等第一份温存再别第一页。";
  if (warmth < 12) return "尾端微亮：像轻轻说「夹在这里就好」。";
  if (warmth < 24) return "丝从书口垂下：像店把未读完的温柔也留给明天。";
  return "丝与温存同软：别住了，也不勒页。";
}

export function formatPressmarkAside(historyCount: number): string {
  if (historyCount <= 0) return "签还新：第一笔流通会留下第一页被记住的停。";
  if (historyCount < 20) return `约夹过 ${historyCount} 次：每一次都是愿意被温柔暂停的许可。`;
  return `逾 ${historyCount} 次轻夹：签沿叠着被温柔停过的页。`;
}

export function formatPressmarkEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好压花书签与丝尾：今天从愿意记住一页开始。";
  if (circulationsToday < 3) return "取签、轻夹、放回：流通也是一种轻轻的暂停。";
  return "忙完把丝理顺——夹完了，人也要松一松肩。";
}

export function formatPressmarkPair(day: number, warmth: number): string {
  return `${formatPressedMarkLine(day)} ${formatSilkTailLine(warmth)}`;
}
