/**
 * 晨露与湿窗台叙事（纯函数，可单测）
 * 开门前先擦一擦：湿意是新一天最轻的通知。
 */

export function formatMorningDewLine(day: number): string {
  if (day % 3 === 0) return "门铃上挂着几滴晨露：像夜色留下的附言。";
  if (day % 2 === 0) return "晨露把店招字迹映得更亮一点。";
  return "晨露还没干：今天从「慢慢来」开始。";
}

export function formatWetSillLine(warmth: number): string {
  if (warmth <= 0) return "窗台还凉湿：第一缕温存会把它焐干。";
  if (warmth < 12) return "湿痕正在退：光与暖一起爬上窗框。";
  if (warmth < 24) return "窗台半干半湿：像心情刚好被接住的瞬间。";
  return "窗台已干，只留浅浅水印：温柔过境的证据。";
}

export function formatDewAside(queueLength: number): string {
  if (queueLength <= 0) return "露水静静挂着：门外暂时没有急促的脚步。";
  if (queueLength === 1) return "有人带着湿气推门：先递一块干布，再听故事。";
  return `门外约有 ${queueLength} 位带着露水的心情——一位一位擦干即可。`;
}

export function formatDewEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先把门铃上的露擦一擦：第一声铃会更清。";
  if (circulationsToday < 3) return "湿意在退，流通在进：节奏刚好。";
  return "忙完也看看窗台：干了，也不代表故事结束。";
}

export function formatDewPair(day: number, warmth: number): string {
  return `${formatMorningDewLine(day)} ${formatWetSillLine(warmth)}`;
}
