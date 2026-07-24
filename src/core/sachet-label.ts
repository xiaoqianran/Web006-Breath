/**
 * 香囊与干花束叙事（纯函数，可单测）
 * 把「收起的气味」写成可赠予的温柔。
 */

export function formatSachetLine(day: number): string {
  if (day % 3 === 0) return "香囊换了一层新棉：干薰衣草还轻轻响。";
  if (day % 2 === 0) return "抽屉里的香囊像一封未拆的信，只漏出一点香。";
  return "柜角挂着两枚香囊：一种是安，一种是念。";
}

export function formatDriedBouquetLine(warmth: number): string {
  if (warmth <= 0) return "干花束还扎着：等第一份流通再松开丝带。";
  if (warmth < 12) return "干花边沿被暖意烘过，颜色更软了。";
  if (warmth < 24) return "干花束斜靠窗台：不需浇水，也会记得春天。";
  return "干花与温存同久：花谢成香，情绪也成了可以送出的形状。";
}

export function formatSachetGiftAside(isGift: boolean): string {
  if (isGift) return "赠予时塞一枚香囊：让对方把气味也带走。";
  return "上架时把香囊放在旁侧：路过的人会先闻到，再看见标签。";
}

export function formatFragranceEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先打开香囊闻一口：今天从清一点的气味开始。";
  if (circulationsToday < 3) return "香气还在空气里转：再接住几位，店会更像「有人在」。";
  return "流通多了，香囊反而更稳——忙完也记得闻一闻自己。";
}

export function formatSachetPair(day: number, warmth: number): string {
  return `${formatSachetLine(day)} ${formatDriedBouquetLine(warmth)}`;
}
