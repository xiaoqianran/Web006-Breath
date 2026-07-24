/**
 * 洗手皂与软毛巾叙事（纯函数，可单测）
 * 动手做之前先洗净：把外面的急洗掉，再碰别人的心情。
 */

export function formatHandSoapLine(day: number): string {
  if (day % 3 === 0) return "洗手皂换了柠檬草香：泡沫细，像在提醒你慢一点。";
  if (day % 2 === 0) return "皂角还湿着：刚有人认真洗过手再进店。";
  return "洗手皂安静：第一份手工会从干净的掌心开始。";
}

export function formatSoftTowelLine(warmth: number): string {
  if (warmth <= 0) return "软毛巾叠着：等温存起来再擦干第一双手。";
  if (warmth < 12) return "毛巾边沿有一点潮：说明今天的手在忙。";
  if (warmth < 24) return "毛巾蓬松回弹：洗过的手更敢接住脆弱。";
  return "毛巾与温存同暖：擦干，也是一种被接住。";
}

export function formatSoapAside(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先洗手再开匣：今天的第一位值得干净的手。";
  if (circulationsToday < 3) return "洗过、擦过、做过：流通也是一种洁净的仪式。";
  return "忙完也记得洗手——店主的手同样需要被温柔对待。";
}

export function formatSoapEncourage(queueLength: number): string {
  if (queueLength <= 0) return "店暂时静：可以把毛巾晒一晒，等下一阵门铃。";
  if (queueLength === 1) return "有一位在等：洗完手，慢慢迎上去。";
  return `门外约有 ${queueLength} 份心情——先洗净，再一位一位接。`;
}

export function formatSoapPair(day: number, warmth: number): string {
  return `${formatHandSoapLine(day)} ${formatSoftTowelLine(warmth)}`;
}
