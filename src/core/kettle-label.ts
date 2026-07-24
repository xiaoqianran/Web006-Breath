/**
 * 暖水壶与杯盖叙事（纯函数，可单测）
 * 水开之前的等待，也是一种被允许的空白。
 */

export function formatWarmKettleLine(day: number): string {
  if (day % 3 === 0) return "暖水壶发出细细声响：水快开了，话可以再慢一点。";
  if (day % 2 === 0) return "壶嘴冒着浅白气：店里又有一点活着的温度。";
  return "暖水壶靠在灶边：第一泡茶会从这里出发。";
}

export function formatCupLidLine(warmth: number): string {
  if (warmth <= 0) return "杯盖还凉：等水开再盖上第一缕香。";
  if (warmth < 12) return "杯盖内侧有水珠：热气刚被接住。";
  if (warmth < 24) return "盖上杯盖，香气会多留一会儿。";
  return "杯盖与温存同暖：打开时，像拆一封短信。";
}

export function formatKettleAside(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先烧一壶：今天从可分享的热开始。";
  if (circulationsToday < 3) return "水开过几回：客人也换了几位，节奏刚好。";
  return "壶空了再续：忙完也给自己倒半杯。";
}

export function formatKettleEncourage(queueLength: number): string {
  if (queueLength <= 0) return "店暂时静：可以听壶响，或只看气升起来。";
  if (queueLength === 1) return "有一位在等：水开时，把杯子递出去。";
  return `门外约有 ${queueLength} 份心情——壶水够，一位一位烫暖即可。`;
}

export function formatKettlePair(day: number, warmth: number): string {
  return `${formatWarmKettleLine(day)} ${formatCupLidLine(warmth)}`;
}
