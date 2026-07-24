/**
 * 裁样纸与划粉叙事（纯函数，可单测）
 * 先画轮廓，再动手：允许试错，也允许改线。
 */

export function formatPatternPaperLine(day: number): string {
  if (day % 3 === 0) return "裁样纸铺开：浅线像还没说出口的草稿。";
  if (day % 2 === 0) return "纸边有旧折痕：同一份样，改过不止一次。";
  return "裁样纸安静：允许你先画，再决定要不要剪。";
}

export function formatChalkWheelLine(warmth: number): string {
  if (warmth <= 0) return "划粉还干：等第一份温存再画出第一道虚线。";
  if (warmth < 12) return "粉线浅浅的：改起来不疼，擦掉也容易。";
  if (warmth < 24) return "划粉在布上轻轻走：像给情绪标一个可改的边界。";
  return "粉与温存同淡：画错了也可以重新来。";
}

export function formatPatternAside(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先铺纸：今天的第一份样从「可以改」开始。";
  if (circulationsToday < 3) return "画线、改线：流通也是一种可修订的草稿。";
  return "忙完把划粉盖好——草稿也需要被收好。";
}

export function formatPatternEncourage(queueLength: number): string {
  if (queueLength <= 0) return "店暂时静：可以改一改样，或只看纸上的浅线。";
  if (queueLength === 1) return "有一位在等：样可以后改，人先接住。";
  return `门外约有 ${queueLength} 位——每位都值得一张自己的样。`;
}

export function formatPatternPair(day: number, warmth: number): string {
  return `${formatPatternPaperLine(day)} ${formatChalkWheelLine(warmth)}`;
}
