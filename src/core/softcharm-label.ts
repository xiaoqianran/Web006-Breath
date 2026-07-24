/**
 * 吊饰与饰盘叙事（纯函数，可单测）
 * 挂一下：不是硬堆满，是「让喜欢的也能被温柔地挂上」。
 */

export function formatCharmSetLine(day: number): string {
  if (day % 3 === 0) return "吊饰静散：小片还带着一点细的光。";
  if (day % 2 === 0) return "饰很轻：只挂一点，不硬堆。";
  return "吊饰安静：专门给愿意把喜欢的也温柔挂上的人。";
}

export function formatCharmTrayLine(warmth: number): string {
  if (warmth <= 0) return "饰盘还空：等第一份温存再轻轻放一枚。";
  if (warmth < 12) return "盘微亮：像轻轻说「挂一下就好」。";
  if (warmth < 24) return "盘带着饰：像店把散的也收成整。";
  return "盘与温存同软：挂到了，也不挤。";
}

export function formatSoftcharmAside(historyCount: number): string {
  if (historyCount <= 0) return "饰还齐：第一笔流通会留下第一枚被温柔挂过的光。";
  if (historyCount < 20) return `约挂过 ${historyCount} 次：每一次都是愿意被温柔挂上的许可。`;
  return `逾 ${historyCount} 次轻挂：盘沿叠着被温柔放过的饰。`;
}

export function formatSoftcharmEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好吊饰与饰盘：今天从愿意轻轻挂一下开始。";
  if (circulationsToday < 3) return "选饰、入盘、轻挂：流通也是一种轻轻的喜欢。";
  return "忙完把盘收好——挂完了，人也要松一松肩。";
}

export function formatSoftcharmPair(day: number, warmth: number): string {
  return `${formatCharmSetLine(day)} ${formatCharmTrayLine(warmth)}`;
}
