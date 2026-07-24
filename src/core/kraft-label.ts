/**
 * 牛皮纸袋与麻绳叙事（纯函数，可单测）
 * 流通收尾要轻轻装走：不是密封的交易，是「可以带回家的温柔」。
 */

export function formatKraftBagLine(day: number): string {
  if (day % 3 === 0) return "牛皮纸袋展开：袋口还留着一点纸的暖。";
  if (day % 2 === 0) return "袋身很轻：只装温柔，不装催促。";
  return "纸袋安静：专门给愿意把瞬间带走的人。";
}

export function formatHempTwineLine(warmth: number): string {
  if (warmth <= 0) return "麻绳还松：等第一份温存再系第一结。";
  if (warmth < 12) return "绳结微紧：系住的是愿意，不是束缚。";
  if (warmth < 24) return "麻绳绕过袋口：像店轻轻说「慢点走」。";
  return "绳与温存同轻：带走了，也不勒住呼吸。";
}

export function formatKraftAside(historyCount: number): string {
  if (historyCount <= 0) return "袋还没展开：第一笔流通会留下第一只纸袋。";
  if (historyCount < 20) return `约装过 ${historyCount} 只纸袋：每只都是一次愿意被带走的许可。`;
  return `逾 ${historyCount} 只小袋：柜角叠着被温柔打包过的离店。`;
}

export function formatKraftEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好纸袋：今天从愿意装走一份温柔开始。";
  if (circulationsToday < 3) return "展袋、系绳、递出：流通也是一种轻轻的托付。";
  return "忙完把麻绳理顺——袋装完了，人也要松一松指尖。";
}

export function formatKraftPair(day: number, warmth: number): string {
  return `${formatKraftBagLine(day)} ${formatHempTwineLine(warmth)}`;
}
