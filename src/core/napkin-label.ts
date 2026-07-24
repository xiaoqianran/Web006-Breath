/**
 * 餐巾环与客人餐巾叙事（纯函数，可单测）
 * 展开一方布：不是正餐礼仪，是「让膝上也有一点被照顾」。
 */

export function formatNapkinRingLine(day: number): string {
  if (day % 3 === 0) return "餐巾环取下：环口还带着一点木的温。";
  if (day % 2 === 0) return "环很轻：只拢住布，不拢住坐姿。";
  return "餐巾环安静：专门给愿意把膝也收拾妥帖的人。";
}

export function formatGuestNapkinLine(warmth: number): string {
  if (warmth <= 0) return "客人餐巾还叠着：等第一份温存再展第一方。";
  if (warmth < 12) return "布角微软：像轻轻说「放膝上就好」。";
  if (warmth < 24) return "餐巾展开：像店把桌边也照顾进了怀里。";
  return "巾与温存同方：铺开了，也不拘束人。";
}

export function formatNapkinAside(historyCount: number): string {
  if (historyCount <= 0) return "环还空着：第一笔流通会留下第一方展开的布。";
  if (historyCount < 20) return `约展过 ${historyCount} 方餐巾：每一方都是愿意被温柔妥帖的许可。`;
  return `逾 ${historyCount} 方展开：环里叠着被温柔铺过的膝上。`;
}

export function formatNapkinEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好餐巾环与布：今天从愿意铺一方妥帖开始。";
  if (circulationsToday < 3) return "取环、展巾、入座：流通也是一种轻轻的安顿。";
  return "忙完把环放回原位——铺完了，人也要松一松肩。";
}

export function formatNapkinPair(day: number, warmth: number): string {
  return `${formatNapkinRingLine(day)} ${formatGuestNapkinLine(warmth)}`;
}
