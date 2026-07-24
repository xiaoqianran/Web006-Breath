/**
 * 台历夹与今日贴纸叙事（纯函数，可单测）
 * 日期轻轻翻过：不是催着过完，是「今天也被好好标了一下」。
 */

export function formatDeskCalendarLine(day: number): string {
  if (day % 3 === 0) return "台历夹翻到新页：纸角还带着昨天的折。";
  if (day % 2 === 0) return "夹很轻：只固定今天，不固定心情。";
  return "台历安静：专门给愿意把今天轻轻标出来的人。";
}

export function formatTodayStickerLine(warmth: number): string {
  if (warmth <= 0) return "今日贴纸还卷着：等第一份温存再贴第一枚。";
  if (warmth < 12) return "贴纸边微翘：像轻轻说「就从这里开始」。";
  if (warmth < 24) return "今日贴在格上：像店把这一天轻轻圈住。";
  return "贴与温存同轻：标了今天，也不盖住明天的空。";
}

export function formatDaymarkAside(historyCount: number): string {
  if (historyCount <= 0) return "台历还空白：第一笔流通会留下第一日的标记。";
  if (historyCount < 20) return `约标过 ${historyCount} 个今日：每一个都是愿意被温柔点名的许可。`;
  return `逾 ${historyCount} 个日子：夹页叠着被温柔圈过的白昼。`;
}

export function formatDaymarkEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好台历与贴纸：今天从愿意标出今日开始。";
  if (circulationsToday < 3) return "翻页、贴纸、开始：流通也是一种轻轻的到场日期。";
  return "忙完把夹子归位——标完了，人也要松一松肩。";
}

export function formatDaymarkPair(day: number, warmth: number): string {
  return `${formatDeskCalendarLine(day)} ${formatTodayStickerLine(warmth)}`;
}
