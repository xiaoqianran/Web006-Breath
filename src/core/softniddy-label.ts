/**
 * 绕绞架与绞线叙事（纯函数，可单测）
 * 绕一绞：不是急着量米数，是「让散线也能被温柔地绕成一绞」。
 */

export function formatNiddyNoddyLine(day: number): string {
  if (day % 3 === 0) return "绕绞架静放：臂端还带着一点木的温。";
  if (day % 2 === 0) return "架很匀：只绕一绞，不赶工。";
  return "绕绞架安静：专门给愿意把散线也轻轻绕满的人。";
}

export function formatYarnSkeinLine(warmth: number): string {
  if (warmth <= 0) return "绞线还松：等第一份温存再系第一结。";
  if (warmth < 12) return "绞身微束：像轻轻说「绕一下就好」。";
  if (warmth < 24) return "线绕成绞：像店把散线也绕成一束。";
  return "绞与温存同软：绕到了，也不勒线。";
}

export function formatSoftniddyAside(historyCount: number): string {
  if (historyCount <= 0) return "架还空着：第一笔流通会留下第一绞被绕过的形。";
  if (historyCount < 20) return `约绕过 ${historyCount} 次：每一次都是愿意被温柔成形的许可。`;
  return `逾 ${historyCount} 次轻绕：臂端叠着被温柔系过的结。`;
}

export function formatSoftniddyEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好绕绞架与绞线：今天从愿意绕一点散线开始。";
  if (circulationsToday < 3) return "取架、绕绞、轻系：流通也是一种轻轻的成形。";
  return "忙完把架放好——绕完了，人也要松一松肩。";
}

export function formatSoftniddyPair(day: number, warmth: number): string {
  return `${formatNiddyNoddyLine(day)} ${formatYarnSkeinLine(warmth)}`;
}
