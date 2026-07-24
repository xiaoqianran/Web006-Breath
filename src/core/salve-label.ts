/**
 * 软膏小盒与竹刮勺叙事（纯函数，可单测）
 * 舀一点膏：不是药方说教，是「让皮肤也接到一点可触摸的温柔」。
 */

export function formatSalveTinLine(day: number): string {
  if (day % 3 === 0) return "软膏小盒揭盖：膏面还带着一点润的光。";
  if (day % 2 === 0) return "盒很浅：只装一指可抹的量，不装教训。";
  return "软膏盒安静：专门给愿意把温柔也抹在手上的人。";
}

export function formatBambooSpatulaLine(warmth: number): string {
  if (warmth <= 0) return "竹刮勺还净：等第一份温存再舀第一点。";
  if (warmth < 12) return "勺尖微润：像轻轻说「取一点就够」。";
  if (warmth < 24) return "竹刮勺从盒里划过：像店把照顾也递给皮肤。";
  return "勺与温存同薄：舀到了，也不刮伤膏。";
}

export function formatSalveAside(historyCount: number): string {
  if (historyCount <= 0) return "盒还合着：第一笔流通会留下第一点可抹的润。";
  if (historyCount < 20) return `约舀过 ${historyCount} 次：每一次都是愿意被温柔触达的许可。`;
  return `逾 ${historyCount} 次轻抹：盒沿叠着被温柔取过的膏。`;
}

export function formatSalveEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好软膏盒与竹勺：今天从愿意抹一点润开始。";
  if (circulationsToday < 3) return "揭盖、轻舀、盖回：流通也是一种轻轻的触达。";
  return "忙完把勺擦净——舀完了，人也要松一松腕。";
}

export function formatSalvePair(day: number, warmth: number): string {
  return `${formatSalveTinLine(day)} ${formatBambooSpatulaLine(warmth)}`;
}
