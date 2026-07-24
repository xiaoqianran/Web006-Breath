/**
 * 烫馒头与袖烫板叙事（纯函数，可单测）
 * 圆角与窄袖也要被熨到：形状对了，布才会服。
 */

export function formatTailorHamLine(day: number): string {
  if (day % 3 === 0) return "烫馒头垫在圆角下：弧线终于能被熨平。";
  if (day % 2 === 0) return "布面馒头有一点旧：撑过很多只袖笼。";
  return "烫馒头安静：专门托住那些不好压的弯。";
}

export function formatSleeveBoardLine(warmth: number): string {
  if (warmth <= 0) return "袖烫板还凉：等第一份温存再套上第一只袖。";
  if (warmth < 12) return "窄板上有浅痕：刚熨过谁的袖口折边。";
  if (warmth < 24) return "袖子套上去刚刚好：窄处也能被温柔压平。";
  return "板与温存同在：难熨的地方，更值得慢慢来。";
}

export function formatHamAside(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先备好馒头：今天也可能有圆角需要托住。";
  if (circulationsToday < 3) return "托住、熨平：流通也是一种给形状的体贴。";
  return "忙完把烫馒头收好——弯处熨完，人也要直一直腰。";
}

export function formatHamEncourage(queueLength: number): string {
  if (queueLength <= 0) return "店暂时静：可以熨一块圆角样，或只整理袖板。";
  if (queueLength === 1) return "有一位在等：难熨的可以后做，人先接住。";
  return `门外约有 ${queueLength} 位——每位的「弯处」都值得被托住。`;
}

export function formatHamPair(day: number, warmth: number): string {
  return `${formatTailorHamLine(day)} ${formatSleeveBoardLine(warmth)}`;
}
