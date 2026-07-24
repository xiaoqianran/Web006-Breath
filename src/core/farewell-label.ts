/**
 * 找零浅碟与掌心手帕叙事（纯函数，可单测）
 * 离店前最后一次触碰：不是找零本身，是「路上也要暖一点」。
 */

export function formatChangeDishLine(day: number): string {
  if (day % 3 === 0) return "找零浅碟端出：铜边还留着一点掌温。";
  if (day % 2 === 0) return "碟很浅：只放一点余温，不放催促。";
  return "浅碟安静：专门给愿意接住一点余温的人。";
}

export function formatPalmKerchiefLine(warmth: number): string {
  if (warmth <= 0) return "手帕还叠着：等第一份温存再递第一方。";
  if (warmth < 12) return "帕角微温：像轻轻说「外面风大」。";
  if (warmth < 24) return "掌心手帕折好：像店把一句叮嘱塞进手里。";
  return "帕与温存同软：带走了，也不必立刻还。";
}

export function formatFarewellAside(historyCount: number): string {
  if (historyCount <= 0) return "碟还空着：第一笔流通会留下第一点余温。";
  if (historyCount < 20) return `约递过 ${historyCount} 次离店余温：每一次都是愿意被惦记的许可。`;
  return `逾 ${historyCount} 次浅递：柜角叠着被温柔送走过的脚步。`;
}

export function formatFarewellEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好浅碟与手帕：今天从愿意送一点余温开始。";
  if (circulationsToday < 3) return "端碟、递帕、目送：流通也是一种轻轻的道别。";
  return "忙完把手帕叠整齐——送完了，人也要松一松肩。";
}

export function formatFarewellPair(day: number, warmth: number): string {
  return `${formatChangeDishLine(day)} ${formatPalmKerchiefLine(warmth)}`;
}
