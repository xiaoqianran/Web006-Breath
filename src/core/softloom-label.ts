/**
 * 小织机与梭子叙事（纯函数，可单测）
 * 织一纬：不是急着完工，是「让经线之间也能被温柔地织满」。
 */

export function formatSmallLoomLine(day: number): string {
  if (day % 3 === 0) return "小织机静放：框沿还带着一点木的温。";
  if (day % 2 === 0) return "机很稳：只织一纬，不赶工。";
  return "小织机安静：专门给愿意把经线之间也轻轻织满的人。";
}

export function formatSoftShuttleLine(warmth: number): string {
  if (warmth <= 0) return "梭子还空：等第一份温存再穿第一纬。";
  if (warmth < 12) return "梭身微亮：像轻轻说「织一下就好」。";
  if (warmth < 24) return "梭穿过经线：像店把空隙也织成柔软。";
  return "梭与温存同软：织到了，也不勒线。";
}

export function formatSoftloomAside(historyCount: number): string {
  if (historyCount <= 0) return "机还空着：第一笔流通会留下第一纬被织过的纹。";
  if (historyCount < 20) return `约织过 ${historyCount} 次：每一次都是愿意被温柔成形的许可。`;
  return `逾 ${historyCount} 次轻织：框沿叠着被温柔穿过的纬。`;
}

export function formatSoftloomEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好小织机与梭子：今天从愿意织一点经线之间开始。";
  if (circulationsToday < 3) return "取梭、穿纬、轻织：流通也是一种轻轻的成形。";
  return "忙完把梭放好——织完了，人也要松一松腕。";
}

export function formatSoftloomPair(day: number, warmth: number): string {
  return `${formatSmallLoomLine(day)} ${formatSoftShuttleLine(warmth)}`;
}
