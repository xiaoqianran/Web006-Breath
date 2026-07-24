/**
 * 空白明信片与邮票盒叙事（纯函数，可单测）
 * 把瞬间寄出去：不是远行本身，是「有人愿意收下一张远一点的温柔」。
 * 与 postcard-label（流通结果明信片隐喻）并列，函数名刻意区分。
 */

export function formatBlankPostcardLine(day: number): string {
  if (day % 3 === 0) return "明信片抽出一张：背面还留着空白的客气。";
  if (day % 2 === 0) return "片很轻：只够写短讯，够走很远。";
  return "明信片安静：专门给愿意把温柔寄远一点的人。";
}

export function formatStampBoxLine(warmth: number): string {
  if (warmth <= 0) return "邮票盒还合着：等第一份温存再取第一枚。";
  if (warmth < 12) return "盒盖微开：像轻轻说「贴上就能走」。";
  if (warmth < 24) return "邮票贴在角上：像店把远方也轻轻盖了章。";
  return "票与温存同小：寄走了，也不占满整张空白。";
}

export function formatMailcardAside(historyCount: number): string {
  if (historyCount <= 0) return "片还空白：第一笔流通会留下第一张可寄出的温柔。";
  if (historyCount < 20) return `约写过 ${historyCount} 张明信片：每一张都是愿意被远一点记得的许可。`;
  return `逾 ${historyCount} 张远讯：盒里叠着被温柔寄出过的空白。`;
}

export function formatMailcardEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好明信片与邮票：今天从愿意寄出一句开始。";
  if (circulationsToday < 3) return "写片、贴票、寄出：流通也是一种轻轻的远送。";
  return "忙完把邮票盒合上——寄完了，人也要松一松肩。";
}

export function formatMailcardPair(day: number, warmth: number): string {
  return `${formatBlankPostcardLine(day)} ${formatStampBoxLine(warmth)}`;
}
