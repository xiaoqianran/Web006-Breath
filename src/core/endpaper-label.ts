/**
 * 环衬与天头丝带叙事（纯函数，可单测）
 * 打开封面的第一层温柔：先看见颜色，再看见文字。
 */

export function formatEndpaperLine(day: number): string {
  if (day % 3 === 0) return "环衬换了浅雾蓝：打开封面时先有一片安静。";
  if (day % 2 === 0) return "环衬边贴得很服：内页与外壳终于连在一起。";
  return "环衬安静：不是装饰，是把心接进书里的第一层。";
}

export function formatHeadbandLine(warmth: number): string {
  if (warmth <= 0) return "天头丝带还松：等第一份温存再系上书脊顶。";
  if (warmth < 12) return "丝带端有一点翘：像一本会招手的小书。";
  if (warmth < 24) return "天头系稳了：翻开时有轻轻的触感提醒。";
  return "丝带与温存同在：合上书，也留下可被再次打开的口。";
}

export function formatEndpaperAside(historyCount: number): string {
  if (historyCount <= 0) return "环衬还没贴：第一本成册会先要这一层颜色。";
  if (historyCount < 20) return `约贴过 ${historyCount} 本环衬：每本打开时都先被颜色接住。`;
  return `逾 ${historyCount} 次贴衬：颜色记得所有被温柔打开的瞬间。`;
}

export function formatEndpaperEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先裁好环衬：今天从愿意给内页一层颜色开始。";
  if (circulationsToday < 3) return "贴衬、系带、合上：流通也是一种成册。";
  return "忙完把丝带理顺——书合上了，人也要合上一会儿。";
}

export function formatEndpaperPair(day: number, warmth: number): string {
  return `${formatEndpaperLine(day)} ${formatHeadbandLine(warmth)}`;
}
