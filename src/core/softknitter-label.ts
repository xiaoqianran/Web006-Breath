/**
 * 法式编织筒与筒线叙事（纯函数，可单测）
 * 套一圈：不是急着抽绳，是「让空筒也能被温柔地套成柔软」。
 */

export function formatFrenchKnitterLine(day: number): string {
  if (day % 3 === 0) return "编织筒静放：筒口还带着一点木的温。";
  if (day % 2 === 0) return "筒很轻：只套一圈，不赶工。";
  return "编织筒安静：专门给愿意把空筒也轻轻套满的人。";
}

export function formatKnitterYarnLine(warmth: number): string {
  if (warmth <= 0) return "筒线还整：等第一份温存再穿第一针。";
  if (warmth < 12) return "线头微松：像轻轻说「套一下就好」。";
  if (warmth < 24) return "线从筒底抽出：像店把空筒也套成柔软。";
  return "线与温存同软：套到了，也不勒圈。";
}

export function formatSoftknitterAside(historyCount: number): string {
  if (historyCount <= 0) return "筒还空着：第一笔流通会留下第一圈被套过的纹。";
  if (historyCount < 20) return `约套过 ${historyCount} 次：每一次都是愿意被温柔成形的许可。`;
  return `逾 ${historyCount} 次轻套：筒口叠着被温柔抽出的线。`;
}

export function formatSoftknitterEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好编织筒与筒线：今天从愿意套一点空筒开始。";
  if (circulationsToday < 3) return "取筒、穿线、轻套：流通也是一种轻轻的成形。";
  return "忙完把线绕好——套完了，人也要松一松腕。";
}

export function formatSoftknitterPair(day: number, warmth: number): string {
  return `${formatFrenchKnitterLine(day)} ${formatKnitterYarnLine(warmth)}`;
}
