/**
 * 线轴与蜂蜡砖叙事（纯函数，可单测）
 * 线要顺、蜡要滑：细活里的润滑也是温柔。
 */

export function formatThreadSpoolLine(day: number): string {
  if (day % 3 === 0) return "线轴换了米白：今天的针脚会更干净一点。";
  if (day % 2 === 0) return "线轴轻轻转：抽出的线像一句被拉长的话。";
  return "线轴靠在匣边：下一针会从这里出发。";
}

export function formatBeeswaxBrickLine(warmth: number): string {
  if (warmth <= 0) return "蜂蜡砖还硬：等手温把它捂软。";
  if (warmth < 12) return "蜡面有浅痕：线刚滑过，带着一点蜜香。";
  if (warmth < 24) return "过蜡的线更听话：不打结，也少一分毛躁。";
  return "蜂蜡与温存同香：细活滑顺，心也少挂碍。";
}

export function formatSpoolAside(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先过一截蜡：今天的第一针会更顺。";
  if (circulationsToday < 3) return "抽线、过蜡、缝合：流通也有自己的润滑。";
  return "忙完把线头收好——线轴也需要被安静对待。";
}

export function formatSpoolEncourage(queueLength: number): string {
  if (queueLength <= 0) return "店暂时静：可以理线，或只闻一闻蜂蜡。";
  if (queueLength === 1) return "有一位在等：线准备好了，再迎上去。";
  return `门外约有 ${queueLength} 位——线够长，一位一位缝住即可。`;
}

export function formatSpoolPair(day: number, warmth: number): string {
  return `${formatThreadSpoolLine(day)} ${formatBeeswaxBrickLine(warmth)}`;
}
