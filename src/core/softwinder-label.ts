/**
 * 绕线器与纱架叙事（纯函数，可单测）
 * 绕一圈：不是急着收线，是「让散乱也能被温柔地绕成有序」。
 */

export function formatBallWinderLine(day: number): string {
  if (day % 3 === 0) return "绕线器静放：轴心还带着一点木的温。";
  if (day % 2 === 0) return "器很稳：只绕一圈，不赶工。";
  return "绕线器安静：专门给愿意把散乱也轻轻绕满的人。";
}

export function formatYarnSwiftLine(warmth: number): string {
  if (warmth <= 0) return "纱架还收：等第一份温存再张开第一臂。";
  if (warmth < 12) return "臂微展：像轻轻说「绕一下就好」。";
  if (warmth < 24) return "纱在架上转：像店把散乱也绕成有序。";
  return "架与温存同软：绕到了，也不绞线。";
}

export function formatSoftwinderAside(historyCount: number): string {
  if (historyCount <= 0) return "器还空着：第一笔流通会留下第一圈被绕过的形。";
  if (historyCount < 20) return `约绕过 ${historyCount} 次：每一次都是愿意被温柔整理的许可。`;
  return `逾 ${historyCount} 次轻绕：轴心叠着被温柔转过的纱。`;
}

export function formatSoftwinderEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好绕线器与纱架：今天从愿意绕一点散乱开始。";
  if (circulationsToday < 3) return "取器、展架、轻绕：流通也是一种轻轻的整理。";
  return "忙完把架收好——绕完了，人也要松一松肩。";
}

export function formatSoftwinderPair(day: number, warmth: number): string {
  return `${formatBallWinderLine(day)} ${formatYarnSwiftLine(warmth)}`;
}
