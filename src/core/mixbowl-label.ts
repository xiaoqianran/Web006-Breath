/**
 * 搅拌盆与打蛋器叙事（纯函数，可单测）
 * 把材料和在一起：不是用力搅散，是「让不同的东西慢慢认识」。
 */

export function formatMixBowlLine(day: number): string {
  if (day % 3 === 0) return "搅拌盆端稳：盆沿还带着一点粉的白。";
  if (day % 2 === 0) return "盆很深：只装材料，不装催促。";
  return "搅拌盆安静：专门给愿意把零散揉成一体的人。";
}

export function formatWireWhiskLine(warmth: number): string {
  if (warmth <= 0) return "打蛋器还闲：等第一份温存再打第一圈。";
  if (warmth < 12) return "丝圈微弹：像轻轻说「慢一点打」。";
  if (warmth < 24) return "打蛋器在盆里画圈：像店把生硬也搅软了。";
  return "器与温存同圆：打匀了，也不打散心。";
}

export function formatMixbowlAside(historyCount: number): string {
  if (historyCount <= 0) return "盆还空着：第一笔流通会留下第一碗和好。";
  if (historyCount < 20) return `约搅过 ${historyCount} 盆：每一盆都是愿意被温柔融合的许可。`;
  return `逾 ${historyCount} 次搅拌：盆沿叠着被温柔和过的白。`;
}

export function formatMixbowlEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好搅拌盆与打蛋器：今天从愿意和在一起开始。";
  if (circulationsToday < 3) return "入盆、打圈、和匀：流通也是一种轻轻的融合。";
  return "忙完把器晾净——搅完了，人也要松一松腕。";
}

export function formatMixbowlPair(day: number, warmth: number): string {
  return `${formatMixBowlLine(day)} ${formatWireWhiskLine(warmth)}`;
}
