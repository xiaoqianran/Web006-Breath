/**
 * 坩埚钳与坩埚叙事（纯函数，可单测）
 * 夹一罐：不是急着倒出，是「让热物也能被温柔地稳住」。
 */

export function formatCrucibleTongsLine(day: number): string {
  if (day % 3 === 0) return "坩埚钳静放：钳口还带着一点金属的凉。";
  if (day % 2 === 0) return "钳很稳：只夹一罐，不硬抖。";
  return "坩埚钳安静：专门给愿意把热物也轻轻稳住的人。";
}

export function formatSoftCrucibleLine(warmth: number): string {
  if (warmth <= 0) return "坩埚还空：等第一份温存再盛第一勺。";
  if (warmth < 12) return "沿微暖：像轻轻说「盛一下就好」。";
  if (warmth < 24) return "罐在钳中：像店把热物也稳住。";
  return "罐与温存同软：夹到了，也不烫手。";
}

export function formatSofttongsAside(historyCount: number): string {
  if (historyCount <= 0) return "钳还空：第一笔流通会留下第一罐被夹过的稳。";
  if (historyCount < 20) return `约夹过 ${historyCount} 次：每一次都是愿意被温柔托住的许可。`;
  return `逾 ${historyCount} 次轻夹：钳口叠着被温柔托过的罐。`;
}

export function formatSofttongsEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好坩埚钳与坩埚：今天从愿意稳住一点热物开始。";
  if (circulationsToday < 3) return "取钳、夹稳、轻移：流通也是一种轻轻的托住。";
  return "忙完把钳放好——夹完了，人也要松一松腕。";
}

export function formatSofttongsPair(day: number, warmth: number): string {
  return `${formatCrucibleTongsLine(day)} ${formatSoftCrucibleLine(warmth)}`;
}
