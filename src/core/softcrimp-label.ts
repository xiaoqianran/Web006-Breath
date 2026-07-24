/**
 * 压扣珠与压扣钳叙事（纯函数，可单测）
 * 压一下：不是硬夹死，是「让线头也能被温柔地收住」。
 */

export function formatCrimpTubeLine(day: number): string {
  if (day % 3 === 0) return "压扣管静散：管沿还带着一点细的光。";
  if (day % 2 === 0) return "管很轻：只收一点，不硬夹。";
  return "压扣管安静：专门给愿意把线头也温柔收住的人。";
}

export function formatCrimpPliersLine(warmth: number): string {
  if (warmth <= 0) return "压扣钳还合：等第一份温存再轻轻压一下。";
  if (warmth < 12) return "钳微合：像轻轻说「收一下就好」。";
  if (warmth < 24) return "钳带着管：像店把散的线头也收成稳。";
  return "钳与温存同软：收到了，也不勒线。";
}

export function formatSoftcrimpAside(historyCount: number): string {
  if (historyCount <= 0) return "管还齐：第一笔流通会留下第一记被温柔压过的收。";
  if (historyCount < 20) return `约收过 ${historyCount} 次：每一次都是愿意被温柔收住的许可。`;
  return `逾 ${historyCount} 次轻收：管沿叠着被温柔合过的口。`;
}

export function formatSoftcrimpEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好压扣管与压扣钳：今天从愿意轻轻收一下开始。";
  if (circulationsToday < 3) return "穿管、合钳、轻压：流通也是一种轻轻的收住。";
  return "忙完把钳放好——收完了，人也要松一松指。";
}

export function formatSoftcrimpPair(day: number, warmth: number): string {
  return `${formatCrimpTubeLine(day)} ${formatCrimpPliersLine(warmth)}`;
}
