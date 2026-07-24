/**
 * 开店/钥匙叙事（纯函数，可单测）
 */
export function formatOpenShopLine(day: number): string {
  if (day <= 1) return "第一日开锁：钥匙还带着昨夜的凉。";
  if (day < 7) return `第 ${day} 日开锁：门轴已经认得你的手。`;
  return `第 ${day} 日开锁：钥匙声像一句轻声的「又见面了」。`;
}

export function formatKeyHookAside(hasSave: boolean): string {
  if (hasSave) return "挂钩上的钥匙还温着——可以继续昨日的店。";
  return "挂钩空着：新的一天，从拧开第一道锁开始。";
}

export function formatShuttersLine(atmosphereTitle: string): string {
  return `百叶窗漏进的光，把「${atmosphereTitle}」写在柜台上。`;
}

export function formatOpenEncourage(day: number): string {
  if (day <= 1) return "慢慢开，门铃会等你。";
  return "门开了就好：接待、转化、流通，一步一步来。";
}
