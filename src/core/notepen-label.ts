/**
 * 便签本与细钢笔叙事（纯函数，可单测）
 * 随手记下一句：不是任务清单，是「怕忘了这份温柔」。
 */

export function formatStickyPadLine(day: number): string {
  if (day % 3 === 0) return "便签本撕下一页：胶边还带着一点黏的温。";
  if (day % 2 === 0) return "本很薄：只记一句，够回想很久。";
  return "便签安静：专门给愿意把温柔写短一点的人。";
}

export function formatFinePenLine(warmth: number): string {
  if (warmth <= 0) return "细钢笔还盖着：等第一份温存再写下第一划。";
  if (warmth < 12) return "笔尖微润：像轻轻说「先写这一句就好」。";
  if (warmth < 24) return "细笔搁在本旁：像店把想说的话收成一行。";
  return "笔与温存同细：写下来了，也不占满整页。";
}

export function formatNotepenAside(historyCount: number): string {
  if (historyCount <= 0) return "便签还没撕：第一笔流通会留下第一句短记。";
  if (historyCount < 20) return `约写过 ${historyCount} 张便签：每一张都是愿意被轻轻提醒的许可。`;
  return `逾 ${historyCount} 张短句：抽屉里叠着被温柔记下的怕忘。`;
}

export function formatNotepenEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好便签与细笔：今天从愿意写下一句开始。";
  if (circulationsToday < 3) return "撕页、落笔、贴好：流通也是一种轻轻的备忘。";
  return "忙完把笔盖上——记完了，人也要松一松腕。";
}

export function formatNotepenPair(day: number, warmth: number): string {
  return `${formatStickyPadLine(day)} ${formatFinePenLine(warmth)}`;
}
