/**
 * 香料小罐与木勺叙事（纯函数，可单测）
 * 撒一点香：不是调味炫耀，是「让空气也记得店里的味道」。
 */

export function formatSpiceJarLine(day: number): string {
  if (day % 3 === 0) return "香料小罐拧开：罐口还飘着一点干的香。";
  if (day % 2 === 0) return "香很淡：只点气氛，不抢主味。";
  return "香料罐安静：专门给愿意把空气也调软的人。";
}

export function formatWoodScoopLine(warmth: number): string {
  if (warmth <= 0) return "木勺还干：等第一份温存再舀第一撮。";
  if (warmth < 12) return "勺面微香：像轻轻说「少一点就好」。";
  if (warmth < 24) return "木勺从罐里舀出：像店把气味也轻轻递给空气。";
  return "勺与温存同小：点到了，也不盖住茶香。";
}

export function formatSpicejarAside(historyCount: number): string {
  if (historyCount <= 0) return "罐还合着：第一笔流通会留下第一撮店香。";
  if (historyCount < 20) return `约舀过 ${historyCount} 撮香：每一次都是愿意被温柔点香的许可。`;
  return `逾 ${historyCount} 次点香：勺沿叠着被温柔飘过的气。`;
}

export function formatSpicejarEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好香料罐与木勺：今天从愿意点一点香开始。";
  if (circulationsToday < 3) return "拧盖、轻舀、撒出：流通也是一种轻轻的气味。";
  return "忙完把盖拧紧——香完了，人也要松一松腕。";
}

export function formatSpicejarPair(day: number, warmth: number): string {
  return `${formatSpiceJarLine(day)} ${formatWoodScoopLine(warmth)}`;
}
