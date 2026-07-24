/**
 * 裁切垫与直尺叙事（纯函数，可单测）
 * 下刀前先量好：直线是给混乱一个边界。
 */

export function formatCuttingMatLine(day: number): string {
  if (day % 3 === 0) return "裁切垫换了浅绿格：量一量，再下刀。";
  if (day % 2 === 0) return "垫面有浅痕：裁过不止一张环衬。";
  return "裁切垫安静：保护桌面，也保护手。";
}

export function formatStraightRulerLine(warmth: number): string {
  if (warmth <= 0) return "直尺还凉：等第一份温存再画第一道边。";
  if (warmth < 12) return "尺沿贴着纸：线会直一点，心也稳一点。";
  if (warmth < 24) return "量好再裁：刚好的尺寸，比「差不多」更温柔。";
  return "尺与温存同直：边界清楚了，页才敢对齐。";
}

export function formatMatcutAside(historyCount: number): string {
  if (historyCount <= 0) return "垫上还空：第一刀会留下第一道浅痕。";
  if (historyCount < 20) return `约裁过 ${historyCount} 次边：每道边都是一次愿意整齐的许可。`;
  return `逾 ${historyCount} 次量裁：垫面记得所有被对齐的温柔。`;
}

export function formatMatcutEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先摆好直尺：今天从愿意画一条直线开始。";
  if (circulationsToday < 3) return "量、裁、对齐：流通也是一种边界清晰。";
  return "忙完把尺收好——边裁完了，人也要直一直腰。";
}

export function formatMatcutPair(day: number, warmth: number): string {
  return `${formatCuttingMatLine(day)} ${formatStraightRulerLine(warmth)}`;
}
