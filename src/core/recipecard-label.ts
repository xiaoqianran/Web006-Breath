/**
 * 手写菜谱卡与木夹叙事（纯函数，可单测）
 * 把步骤记下来：不是标准化生产，是「下次还能轻轻复现这份温柔」。
 */

export function formatRecipeCardLine(day: number): string {
  if (day % 3 === 0) return "手写菜谱卡抽出：纸边还带着一点墨的干。";
  if (day % 2 === 0) return "卡很旧：只记步骤，不记苛求。";
  return "菜谱卡安静：专门给愿意把温柔也写成可复现的人。";
}

export function formatWoodClipLine(warmth: number): string {
  if (warmth <= 0) return "木夹还松：等第一份温存再夹第一张。";
  if (warmth < 12) return "夹口微紧：像轻轻说「别被风吹走」。";
  if (warmth < 24) return "木夹别住卡角：像店把记忆也钉在台边。";
  return "夹与温存同稳：住了纸，也不压扁字。";
}

export function formatRecipecardAside(historyCount: number): string {
  if (historyCount <= 0) return "卡还空白：第一笔流通会留下第一份可复现的温柔。";
  if (historyCount < 20) return `约记过 ${historyCount} 张菜谱：每一张都是愿意被温柔复现的许可。`;
  return `逾 ${historyCount} 张手写：夹下叠着被温柔钉过的步骤。`;
}

export function formatRecipecardEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好菜谱卡与木夹：今天从愿意记下一步开始。";
  if (circulationsToday < 3) return "写卡、夹角、对照：流通也是一种轻轻的传承。";
  return "忙完把夹子归位——记完了，人也要松一松腕。";
}

export function formatRecipecardPair(day: number, warmth: number): string {
  return `${formatRecipeCardLine(day)} ${formatWoodClipLine(warmth)}`;
}
