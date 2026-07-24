/**
 * 小墨水瓶与吸墨纸叙事（纯函数，可单测）
 * 字迹落下后：不是修正错误，是「让多余的墨也有归处」。
 * 注意：与 ink-label 的墨台叙事并列，函数名刻意区分。
 */

export function formatSmallInkBottleLine(day: number): string {
  if (day % 3 === 0) return "小墨水瓶开盖：瓶口还留着一点深色的静。";
  if (day % 2 === 0) return "墨很浅：只够写温柔，不够写责备。";
  return "墨瓶安静：专门给愿意把字迹放慢的人。";
}

export function formatSoftBlotSheetLine(warmth: number): string {
  if (warmth <= 0) return "吸墨纸还干：等第一份温存再吸第一滴。";
  if (warmth < 12) return "纸面微洇：像轻轻说「慢一点干」。";
  if (warmth < 24) return "吸墨纸垫在行间：像店把多余的急也吸走。";
  return "纸与温存同吸：接住了墨，也不抹掉字的心。";
}

export function formatSlowinkAside(historyCount: number): string {
  if (historyCount <= 0) return "墨瓶还盖着：第一笔流通会留下第一滴字迹。";
  if (historyCount < 20) return `约写过 ${historyCount} 次慢字：每一次都是愿意被温柔晾干的许可。`;
  return `逾 ${historyCount} 次落墨：瓶旁叠着被温柔吸过的余墨。`;
}

export function formatSlowinkEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好墨瓶与吸墨纸：今天从愿意写慢一点开始。";
  if (circulationsToday < 3) return "开瓶、落笔、吸干：流通也是一种轻轻的晾墨。";
  return "忙完把瓶盖拧紧——写完了，人也要松一松腕。";
}

export function formatSlowinkPair(day: number, warmth: number): string {
  return `${formatSmallInkBottleLine(day)} ${formatSoftBlotSheetLine(warmth)}`;
}
