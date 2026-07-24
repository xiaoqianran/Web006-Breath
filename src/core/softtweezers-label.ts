/**
 * 镊子与放大镜叙事（纯函数，可单测）
 * 夹一粒：不是急着对准，是「让细小也能被温柔地看清、夹稳」。
 */

export function formatSoftTweezersLine(day: number): string {
  if (day % 3 === 0) return "镊子静放：尖端还带着一点金属的凉。";
  if (day % 2 === 0) return "镊很细：只夹一粒，不硬夹。";
  return "镊子安静：专门给愿意把细小也轻轻夹稳的人。";
}

export function formatJewelLoupeLine(warmth: number): string {
  if (warmth <= 0) return "放大镜还合：等第一份温存再看第一眼。";
  if (warmth < 12) return "镜面微亮：像轻轻说「看一下就好」。";
  if (warmth < 24) return "镜贴近细处：像店把细小也看清。";
  return "镜与温存同软：看到了，也不刺眼。";
}

export function formatSofttweezersAside(historyCount: number): string {
  if (historyCount <= 0) return "镊还空：第一笔流通会留下第一粒被夹过的稳。";
  if (historyCount < 20) return `约夹过 ${historyCount} 次：每一次都是愿意被温柔看清的许可。`;
  return `逾 ${historyCount} 次轻夹：尖端叠着被温柔看过的细。`;
}

export function formatSofttweezersEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好镊子与放大镜：今天从愿意看清一点细小开始。";
  if (circulationsToday < 3) return "取镜、看清、轻夹：流通也是一种轻轻的对准。";
  return "忙完把镜合上——夹完了，人也要松一松眼。";
}

export function formatSofttweezersPair(day: number, warmth: number): string {
  return `${formatSoftTweezersLine(day)} ${formatJewelLoupeLine(warmth)}`;
}
