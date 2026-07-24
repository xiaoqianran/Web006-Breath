/**
 * 入户软垫与鞋边盒叙事（纯函数，可单测）
 * 先把外面的尘土留在门外，再把心情带进店。
 */

export function formatDoorMatLine(day: number): string {
  if (day % 3 === 0) return "入户软垫换了浅灰：脚一踩就知道到家了。";
  if (day % 2 === 0) return "软垫边沿有细泥：说明今天有人认真来过。";
  return "门垫不说话：只把外面的急轻轻蹭掉。";
}

export function formatShoeBoxLine(queueLength: number): string {
  if (queueLength <= 0) return "鞋边盒空着：下一双鞋会先把雨留在这里。";
  if (queueLength === 1) return "鞋边盒里多了一双：有人把外面的路暂时脱掉了。";
  return `鞋边盒约有 ${queueLength} 双心情的重量——先放下，再进门。`;
}

export function formatMatAside(warmth: number): string {
  if (warmth <= 0) return "软垫还凉：第一份流通会把入口焐热。";
  if (warmth < 12) return "踩上去有一点暖：店开始像「可以卸下」。";
  return "入口与温存同在：进来的人会先松一口气。";
}

export function formatMatEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先抖一抖门垫：今天也会有人把尘土留在门外。";
  if (circulationsToday < 3) return "进进出出几次：垫子脏一点，故事却更真。";
  return "忙完也擦擦鞋边——店主同样需要干净的入口。";
}

export function formatMatPair(day: number, queueLength: number): string {
  return `${formatDoorMatLine(day)} ${formatShoeBoxLine(queueLength)}`;
}
