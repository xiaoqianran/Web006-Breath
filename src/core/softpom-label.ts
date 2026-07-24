/**
 * 绒球器与碎线盒叙事（纯函数，可单测）
 * 绕一团：不是急着收尾，是「让零碎也能被温柔地绕成柔软」。
 */

export function formatPomMakerLine(day: number): string {
  if (day % 3 === 0) return "绒球器静放：弧沿还带着一点线的温。";
  if (day % 2 === 0) return "器很圆：只绕一层，不勒紧。";
  return "绒球器安静：专门给愿意把零碎也轻轻绕满的人。";
}

export function formatYarnScrapBoxLine(warmth: number): string {
  if (warmth <= 0) return "碎线盒还空：等第一份温存再收第一缕。";
  if (warmth < 12) return "盒盖微启：像轻轻说「绕一点就好」。";
  if (warmth < 24) return "线头叠在盒里：像店把零碎也绕成柔软。";
  return "盒与温存同软：绕到了，也不嫌短。";
}

export function formatSoftpomAside(historyCount: number): string {
  if (historyCount <= 0) return "器还空着：第一笔流通会留下第一团被绕过的绒。";
  if (historyCount < 20) return `约绕过 ${historyCount} 次：每一次都是愿意被温柔成形的许可。`;
  return `逾 ${historyCount} 次轻绕：弧沿叠着被温柔收过的线。`;
}

export function formatSoftpomEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好绒球器与碎线盒：今天从愿意绕一点零碎开始。";
  if (circulationsToday < 3) return "取器、抽线、轻绕：流通也是一种轻轻的成形。";
  return "忙完把线头归盒——绕完了，人也要松一松腕。";
}

export function formatSoftpomPair(day: number, warmth: number): string {
  return `${formatPomMakerLine(day)} ${formatYarnScrapBoxLine(warmth)}`;
}
