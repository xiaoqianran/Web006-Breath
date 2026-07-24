/**
 * 铆钉组与铆砧叙事（纯函数，可单测）
 * 铆一下：不是硬钉死，是「让两头也能被温柔地连住」。
 */

export function formatRivetSetLine(day: number): string {
  if (day % 3 === 0) return "铆钉静排：头沿还带着一点细的光。";
  if (day % 2 === 0) return "钉很稳：只连一点，不硬砸。";
  return "铆钉安静：专门给愿意把两头也温柔连住的人。";
}

export function formatRivetBlockLine(warmth: number): string {
  if (warmth <= 0) return "铆砧还空：等第一份温存再垫第一铆。";
  if (warmth < 12) return "砧微稳：像轻轻说「连一下就好」。";
  if (warmth < 24) return "砧带着钉：像店把散的也连成稳。";
  return "砧与温存同软：连到了，也不震手。";
}

export function formatSoftrivetAside(historyCount: number): string {
  if (historyCount <= 0) return "钉还齐：第一笔流通会留下第一记被温柔连过的稳。";
  if (historyCount < 20) return `约连过 ${historyCount} 次：每一次都是愿意被温柔连住的许可。`;
  return `逾 ${historyCount} 次轻连：砧面叠着被温柔垫过的稳。`;
}

export function formatSoftrivetEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好铆钉与铆砧：今天从愿意轻轻连一下开始。";
  if (circulationsToday < 3) return "穿钉、垫砧、轻铆：流通也是一种轻轻的连住。";
  return "忙完把钉收好——连完了，人也要松一松指。";
}

export function formatSoftrivetPair(day: number, warmth: number): string {
  return `${formatRivetSetLine(day)} ${formatRivetBlockLine(warmth)}`;
}
