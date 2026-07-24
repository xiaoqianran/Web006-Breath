/**
 * 窗纱与蕾丝光叙事（纯函数，可单测）
 * 光被滤软之后，店里的话也会跟着变轻。
 */

export function formatLaceCurtainLine(day: number): string {
  if (day % 3 === 0) return "窗纱被风掀起一角：巷口的光侧身进来。";
  if (day % 2 === 0) return "蕾丝边沿落着细尘，像谁轻轻走过一整季。";
  return "窗纱把刺眼的光揉软了，再递给柜台。";
}

export function formatLaceLightLine(warmth: number): string {
  if (warmth <= 0) return "蕾丝光还淡：等第一份温存把花纹照清楚。";
  if (warmth < 12) return "光在纱上慢慢游：花纹开始像呼吸。";
  if (warmth < 24) return "蕾丝光铺在托盘上：每一样成品都有一圈软边。";
  return "光与温存同在纱后：即使打烊，窗上也留着温柔。";
}

export function formatLaceAside(queueLength: number): string {
  if (queueLength <= 0) return "纱外暂时无人影：可以整理丝带，或只看光移动。";
  if (queueLength === 1) return "纱外有一个轮廓：先别拉开，让对方慢慢走近。";
  return `纱外约有 ${queueLength} 道身影——光会一个一个照到。`;
}

export function formatLaceEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先把窗纱理顺：今天的第一位会从光里走进来。";
  if (circulationsToday < 3) return "光换了角度：再接住几位，纱上的影会更生动。";
  return "忙完也望一眼窗纱：店外的世界还在，你也还在。";
}

export function formatLacePair(day: number, warmth: number): string {
  return `${formatLaceCurtainLine(day)} ${formatLaceLightLine(warmth)}`;
}
