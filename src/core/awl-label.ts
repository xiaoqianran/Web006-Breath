/**
 * 锥子与骨刀叙事（纯函数，可单测）
 * 先开孔再穿线：给布一个入口，也给故事一个起点。
 */

export function formatStitchingAwlLine(day: number): string {
  if (day % 3 === 0) return "锥子尖很细：只开一个刚好的孔，不撕开布。";
  if (day % 2 === 0) return "木柄握着温：开孔时手不会抖得太厉害。";
  return "锥子安静：下一道缝会从这里开始。";
}

export function formatBoneFolderLine(warmth: number): string {
  if (warmth <= 0) return "骨刀还凉：等第一份温存再压第一道折。";
  if (warmth < 12) return "刀刃是圆的：压折不伤纸，也不伤心。";
  if (warmth < 24) return "折痕被压实：边更齐，也更敢被看见。";
  return "骨刀与温存同在：折好了，再装订成可递出的形状。";
}

export function formatAwlAside(historyCount: number): string {
  if (historyCount <= 0) return "孔还没开：第一本瞬间卡会先要一个入口。";
  if (historyCount < 20) return `约开过 ${historyCount} 处小孔：每处都是一次愿意穿过的许可。`;
  return `逾 ${historyCount} 次开孔穿线：锥子记得所有被接住的入口。`;
}

export function formatAwlEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先试着开一个孔：今天从愿意穿过开始。";
  if (circulationsToday < 3) return "开孔、压折、穿线：流通也是一种装订。";
  return "忙完把锥子收回——入口开完，人也要合上一会儿。";
}

export function formatAwlPair(day: number, warmth: number): string {
  return `${formatStitchingAwlLine(day)} ${formatBoneFolderLine(warmth)}`;
}
