/**
 * 软剪与剪线碟叙事（纯函数，可单测）
 * 剪断不是结束：是给线一个干净的句号。
 */

export function formatSoftShearsLine(day: number): string {
  if (day % 3 === 0) return "软剪刃口擦过：今天的剪口会更干净。";
  if (day % 2 === 0) return "剪刀柄有一点旧：像被很多人借过的果断。";
  return "软剪静静搁着：下一刀会替某句话收口。";
}

export function formatSnipDishLine(historyCount: number): string {
  if (historyCount <= 0) return "剪线碟还空：第一截线头会落在这里。";
  if (historyCount < 20) return `碟里约有 ${historyCount} 截碎彩：像未说完的逗号。`;
  return `逾 ${historyCount} 次剪断：碟面记得所有收口的声音。`;
}

export function formatShearsAside(warmth: number): string {
  if (warmth <= 0) return "剪刃还凉：温存起来再剪第一截。";
  if (warmth < 12) return "剪口干净：毛边少，心也会少一分刺。";
  return "软剪与温存同在：敢剪断，也是一种温柔。";
}

export function formatShearsEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先试剪一口空气：今天的第一刀从干净开始。";
  if (circulationsToday < 3) return "剪断、收起：流通也需要清楚的边界。";
  return "忙完把剪口合拢——刀也需要休息。";
}

export function formatShearsPair(day: number, historyCount: number): string {
  return `${formatSoftShearsLine(day)} ${formatSnipDishLine(historyCount)}`;
}
