/**
 * 试衣镜与软擦布叙事（纯函数，可单测）
 * 不是照出完美，是让人先看见「还在」的自己。
 */

export function formatGuestMirrorLine(day: number): string {
  if (day % 3 === 0) return "试衣镜斜靠墙角：光把人轮廓描得很轻。";
  if (day % 2 === 0) return "镜面有一道细雾：呵一口气再擦，像重新认识自己。";
  return "镜子不催你看太久：看一眼「还在」就够。";
}

export function formatSoftClothLine(warmth: number): string {
  if (warmth <= 0) return "软擦布叠着：等第一缕温存再把雾擦开。";
  if (warmth < 12) return "擦布边沿有一点潮：刚擦过谁的指印。";
  if (warmth < 24) return "镜面渐渐清亮：温存会让人更敢对视。";
  return "软擦布与温存同在：看清楚，也允许不完美。";
}

export function formatMirrorAside(queueLength: number): string {
  if (queueLength <= 0) return "镜前空着：你可以先整理一下自己的领口。";
  if (queueLength === 1) return "有人在镜前停了一秒：先别打扰，再递茶。";
  return `镜前可能轮候 ${queueLength} 位——每位只需要一小段被看见的时间。`;
}

export function formatMirrorEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先把镜面擦一擦：今天的第一位也值得被清楚接住。";
  if (circulationsToday < 3) return "看过、擦过、送过：流通也是一种对视。";
  return "忙完也照一眼：店主也需要被温柔地看见。";
}

export function formatMirrorPair(day: number, warmth: number): string {
  return `${formatGuestMirrorLine(day)} ${formatSoftClothLine(warmth)}`;
}
