/**
 * 线圈与绕钳叙事（纯函数，可单测）
 * 绕一圈：不是硬拧死，是「让线也能被温柔地卷成软」。
 */

export function formatWireCoilLine(day: number): string {
  if (day % 3 === 0) return "线圈静放：圈沿还带着一点细的光。";
  if (day % 2 === 0) return "圈很轻：只绕一点，不硬拧。";
  return "线圈安静：专门给愿意把线也温柔卷成软的人。";
}

export function formatCoilPliersLine(warmth: number): string {
  if (warmth <= 0) return "绕钳还合：等第一份温存再轻轻绕一圈。";
  if (warmth < 12) return "钳微转：像轻轻说「绕一下就好」。";
  if (warmth < 24) return "钳带着线：像店把直的也绕成软。";
  return "钳与温存同软：绕到了，也不勒手。";
}

export function formatSoftcoilAside(historyCount: number): string {
  if (historyCount <= 0) return "线还直：第一笔流通会留下第一圈被温柔绕过的弧。";
  if (historyCount < 20) return `约绕过 ${historyCount} 次：每一次都是愿意被温柔卷起的许可。`;
  return `逾 ${historyCount} 次轻绕：圈沿叠着被温柔转过的弧。`;
}

export function formatSoftcoilEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好线圈与绕钳：今天从愿意轻轻绕一圈开始。";
  if (circulationsToday < 3) return "夹线、转钳、轻绕：流通也是一种轻轻的成形。";
  return "忙完把钳放好——绕完了，人也要松一松腕。";
}

export function formatSoftcoilPair(day: number, warmth: number): string {
  return `${formatWireCoilLine(day)} ${formatCoilPliersLine(warmth)}`;
}
