/**
 * 刻刀与刻台叙事（纯函数，可单测）
 * 刻一笔：不是硬划痕迹，是「让想说的也能轻轻留下」。
 */

export function formatGraverSetLine(day: number): string {
  if (day % 3 === 0) return "刻刀静排：刃口还带着一点细的光。";
  if (day % 2 === 0) return "刀很稳：只刻一点，不硬划。";
  return "刻刀安静：专门给愿意把想说的也轻轻留下的人。";
}

export function formatEngraverBlockLine(warmth: number): string {
  if (warmth <= 0) return "刻台还空：等第一份温存再垫第一笔。";
  if (warmth < 12) return "台微稳：像轻轻说「刻一下就好」。";
  if (warmth < 24) return "台带着刀：像店把想说的也托成稳。";
  return "台与温存同软：刻到了，也不伤手。";
}

export function formatSoftgraverAside(historyCount: number): string {
  if (historyCount <= 0) return "刃还齐：第一笔流通会留下第一道被温柔刻过的痕。";
  if (historyCount < 20) return `约刻过 ${historyCount} 次：每一次都是愿意被温柔留下的许可。`;
  return `逾 ${historyCount} 次轻刻：台面叠着被温柔托过的稳。`;
}

export function formatSoftgraverEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好刻刀与刻台：今天从愿意轻轻刻一笔开始。";
  if (circulationsToday < 3) return "选刀、垫台、轻刻：流通也是一种轻轻的留下。";
  return "忙完把刀收好——刻完了，人也要松一松指。";
}

export function formatSoftgraverPair(day: number, warmth: number): string {
  return `${formatGraverSetLine(day)} ${formatEngraverBlockLine(warmth)}`;
}
