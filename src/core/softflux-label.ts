/**
 * 助焊膏与酸洗罐叙事（纯函数，可单测）
 * 刷一抹：不是急着焊上，是「让接缝也能被温柔地洗净」。
 */

export function formatFluxPasteLine(day: number): string {
  if (day % 3 === 0) return "助焊膏静放：盖沿还带着一点细的痕。";
  if (day % 2 === 0) return "膏很细：只刷一抹，不硬抹。";
  return "助焊膏安静：专门给愿意把接缝也轻轻刷净的人。";
}

export function formatPickleJarLine(warmth: number): string {
  if (warmth <= 0) return "酸洗罐还盖：等第一份温存再浸第一件。";
  if (warmth < 12) return "液微澄：像轻轻说「浸一下就好」。";
  if (warmth < 24) return "件在液中：像店把氧化也洗成净。";
  return "罐与温存同软：洗到了，也不伤手。";
}

export function formatSoftfluxAside(historyCount: number): string {
  if (historyCount <= 0) return "膏还整：第一笔流通会留下第一抹被刷过的净。";
  if (historyCount < 20) return `约刷过 ${historyCount} 次：每一次都是愿意被温柔洗净的许可。`;
  return `逾 ${historyCount} 次轻刷：盖沿叠着被温柔浸过的件。`;
}

export function formatSoftfluxEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好助焊膏与酸洗罐：今天从愿意净一点接缝开始。";
  if (circulationsToday < 3) return "取膏、轻刷、再浸：流通也是一种轻轻的洗净。";
  return "忙完把罐盖好——洗完了，人也要松一松腕。";
}

export function formatSoftfluxPair(day: number, warmth: number): string {
  return `${formatFluxPasteLine(day)} ${formatPickleJarLine(warmth)}`;
}
