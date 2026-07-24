/**
 * 雨伞架与门口踏垫叙事（纯函数，可单测）
 * 进门第一站：不是挡风雨本身，是「先把外面的急放下」。
 */

export function formatUmbrellaStandLine(day: number): string {
  if (day % 3 === 0) return "雨伞架空着一格：像给迟到的雨也留了位子。";
  if (day % 2 === 0) return "架身很稳：只接住伞，不接住客人的慌。";
  return "伞架安静：专门给愿意先把湿气留在门外的人。";
}

export function formatThresholdMatLine(warmth: number): string {
  if (warmth <= 0) return "门口踏垫还干：等第一份温存再迎第一脚。";
  if (warmth < 12) return "垫面微软：像轻轻说「慢一点进来」。";
  if (warmth < 24) return "踏垫边起了毛：像被很多次温柔踩过。";
  return "垫与温存同软：接住了脚步，也不责备泥点。";
}

export function formatEntryAside(historyCount: number): string {
  if (historyCount <= 0) return "伞架还空：第一笔流通会留下第一把放下的伞。";
  if (historyCount < 20) return `约迎过 ${historyCount} 次进门：每一次都是愿意先把急放下的许可。`;
  return `逾 ${historyCount} 次踏入：门口叠着被温柔接住过的鞋印。`;
}

export function formatEntryEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好伞架与踏垫：今天从愿意接住第一脚开始。";
  if (circulationsToday < 3) return "挂伞、垫脚、请进：流通也是一种轻轻的接纳。";
  return "忙完把踏垫抖一抖——迎完了，人也要松一松肩。";
}

export function formatEntryPair(day: number, warmth: number): string {
  return `${formatUmbrellaStandLine(day)} ${formatThresholdMatLine(warmth)}`;
}
