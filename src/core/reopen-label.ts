/**
 * 晨间抹布与窗台小瓶叙事（纯函数，可单测）
 * 再开店：不是打扫本身，是「把昨日的温柔擦亮一点」。
 */

export function formatMorningClothLine(day: number): string {
  if (day % 3 === 0) return "晨间抹布拧干：布边还带着一点清凉。";
  if (day % 2 === 0) return "抹布很软：只擦灰尘，不擦掉昨天的温度。";
  return "抹布安静：专门给愿意把柜台重新迎光的人。";
}

export function formatSillVaseLine(warmth: number): string {
  if (warmth <= 0) return "窗台小瓶还空：等第一份温存再插第一枝。";
  if (warmth < 12) return "瓶里一点水光：像店在窗边轻轻醒了。";
  if (warmth < 24) return "小瓶靠着玻璃：像说「今天也在」。";
  return "瓶与温存同静：醒了店，也不吵到街角。";
}

export function formatReopenAside(historyCount: number): string {
  if (historyCount <= 0) return "抹布还叠着：第一笔流通会留下第一日的再开。";
  if (historyCount < 20) return `约擦过 ${historyCount} 次晨柜：每一次都是愿意把温柔重新摆好的许可。`;
  return `逾 ${historyCount} 次晨开：窗台叠着被温柔迎过的光。`;
}

export function formatReopenEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好抹布与小瓶：今天从愿意把店轻轻醒开开始。";
  if (circulationsToday < 3) return "擦柜、插瓶、开门：流通也是一种轻轻的再开始。";
  return "忙完把抹布晾好——开完了，人也要松一松肩。";
}

export function formatReopenPair(day: number, warmth: number): string {
  return `${formatMorningClothLine(day)} ${formatSillVaseLine(warmth)}`;
}
