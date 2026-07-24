/**
 * 软扣子小罐与木勺叙事（纯函数，可单测）
 * 舀一颗：不是凑合补丁，是「让开线的心也能被温柔地扣住」。
 * 与 button-label 区分命名。
 */

export function formatSoftButtonTinLine(day: number): string {
  if (day % 3 === 0) return "软扣子小罐揭开：罐里还亮着一点圆的光。";
  if (day % 2 === 0) return "扣很轻：只补一颗，不压布。";
  return "扣子罐安静：专门给愿意把开线也轻轻扣住的人。";
}

export function formatButtonScoopLine(warmth: number): string {
  if (warmth <= 0) return "木勺还净：等第一份温存再舀第一颗。";
  if (warmth < 12) return "勺尖微浅：像轻轻说「一颗就够」。";
  if (warmth < 24) return "木勺从罐里舀出扣子：像店把合身也递给布料。";
  return "勺与温存同浅：舀到了，也不刮伤扣。";
}

export function formatSoftbuttonAside(historyCount: number): string {
  if (historyCount <= 0) return "罐还满着：第一笔流通会留下第一颗被扣过的圆。";
  if (historyCount < 20) return `约舀过 ${historyCount} 次：每一次都是愿意被温柔合上的许可。`;
  return `逾 ${historyCount} 次轻舀：勺沿叠着被温柔扣过的圆。`;
}

export function formatSoftbuttonEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好扣子罐与木勺：今天从愿意扣住一点开线开始。";
  if (circulationsToday < 3) return "揭盖、轻舀、缝上：流通也是一种轻轻的合身。";
  return "忙完把勺擦净——舀完了，人也要松一松腕。";
}

export function formatSoftbuttonPair(day: number, warmth: number): string {
  return `${formatSoftButtonTinLine(day)} ${formatButtonScoopLine(warmth)}`;
}
