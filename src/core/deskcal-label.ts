/**
 * 台历块与日页丝带叙事（纯函数，可单测）
 * 翻一日：不是催促日程，是「让今天也被温柔地记在桌上」。
 */

export function formatDeskCalBlockLine(day: number): string {
  if (day % 3 === 0) return "台历块立稳：今日页还透着一点纸的白。";
  if (day % 2 === 0) return "页很薄：只记一天，不堆事。";
  return "台历安静：专门给愿意把今天也轻轻翻过的人。";
}

export function formatDayPageRibbonLine(warmth: number): string {
  if (warmth <= 0) return "日页丝带还垂着：等第一份温存再别第一页。";
  if (warmth < 12) return "丝带微松：像轻轻说「翻到这里就好」。";
  if (warmth < 24) return "丝从页间抽出：像店把新的一天也递给柜台。";
  return "丝与温存同软：别住了，也不勒页。";
}

export function formatDeskcalAside(historyCount: number): string {
  if (historyCount <= 0) return "历还新：第一笔流通会留下第一页被翻开的日。";
  if (historyCount < 20) return `约翻过 ${historyCount} 次：每一次都是愿意被温柔记日的许可。`;
  return `逾 ${historyCount} 次轻翻：页沿叠着被温柔过的天。`;
}

export function formatDeskcalEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好台历与日页丝带：今天从愿意翻开一页开始。";
  if (circulationsToday < 3) return "翻页、别丝、记一笔：流通也是一种轻轻的记日。";
  return "忙完把丝理顺——翻完了，人也要松一松肩。";
}

export function formatDeskcalPair(day: number, warmth: number): string {
  return `${formatDeskCalBlockLine(day)} ${formatDayPageRibbonLine(warmth)}`;
}
