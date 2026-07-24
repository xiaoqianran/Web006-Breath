/**
 * 软熨斗与烫垫叙事（纯函数，可单测）
 * 把褶皱烫平：不是抹去故事，是让布面重新服帖。
 */

export function formatSoftIronLine(day: number): string {
  if (day % 3 === 0) return "软熨斗预热中：蒸汽会先到，再碰到布。";
  if (day % 2 === 0) return "熨斗底板很干净：今天的折痕会服帖一点。";
  return "软熨斗安静：等待合适的温度，不急着压。";
}

export function formatPressPadLine(warmth: number): string {
  if (warmth <= 0) return "烫垫还凉：等第一份温存再铺上第一层布。";
  if (warmth < 12) return "垫面有浅印：刚熨过谁的袖口。";
  if (warmth < 24) return "烫垫托着热：褶皱一点点松开。";
  return "垫与温存同暖：服帖，是一种被重新安放。";
}

export function formatIronAside(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先预热：今天从把急烫软开始。";
  if (circulationsToday < 3) return "熨一下、停一下：流通也需要温度刚好。";
  return "忙完把熨斗立起——热也需要被收好。";
}

export function formatIronEncourage(queueLength: number): string {
  if (queueLength <= 0) return "店暂时静：可以烫一块样布，或只听蒸汽声。";
  if (queueLength === 1) return "有一位在等：温度够了再迎，别烫到人。";
  return `门外约有 ${queueLength} 位——一位一位熨平即可，别赶。`;
}

export function formatIronPair(day: number, warmth: number): string {
  return `${formatSoftIronLine(day)} ${formatPressPadLine(warmth)}`;
}
