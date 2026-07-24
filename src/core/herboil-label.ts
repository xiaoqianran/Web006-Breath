/**
 * 草药油瓶与玻璃滴管叙事（纯函数，可单测）
 * 滴一点油：不是浓妆重抹，是「让气味也能被精确而温柔地给出」。
 */

export function formatHerbOilBottleLine(day: number): string {
  if (day % 3 === 0) return "草药油瓶立稳：瓶身还透着一点琥珀的光。";
  if (day % 2 === 0) return "油很清：只润一层，不粘手。";
  return "油瓶安静：专门给愿意把香也滴成准确的人。";
}

export function formatGlassDropperLine(warmth: number): string {
  if (warmth <= 0) return "玻璃滴管还空：等第一份温存再吸第一滴。";
  if (warmth < 12) return "管口微亮：像轻轻说「一滴就够」。";
  if (warmth < 24) return "滴管悬在瓶口：像店把浓香也放成可数的温柔。";
  return "管与温存同细：给出了，也不浪费。";
}

export function formatHerboilAside(historyCount: number): string {
  if (historyCount <= 0) return "瓶还封着：第一笔流通会留下第一滴被数清的香。";
  if (historyCount < 20) return `约滴过 ${historyCount} 次：每一次都是愿意被温柔计量的许可。`;
  return `逾 ${historyCount} 滴：管里叠着被温柔给出的油。`;
}

export function formatHerboilEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好油瓶与滴管：今天从愿意给出一滴开始。";
  if (circulationsToday < 3) return "开瓶、吸取、轻滴：流通也是一种轻轻的精确。";
  return "忙完把滴管洗净——滴完了，人也要松一松腕。";
}

export function formatHerboilPair(day: number, warmth: number): string {
  return `${formatHerbOilBottleLine(day)} ${formatGlassDropperLine(warmth)}`;
}
