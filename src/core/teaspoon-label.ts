/**
 * 试茶小勺与品茶垫叙事（纯函数，可单测）
 * 尝一口再决定：不是催促成交，是「先让舌头也温柔一点」。
 */

export function formatTastingSpoonLine(day: number): string {
  if (day % 3 === 0) return "试茶小勺舀起一点：勺沿还带着一点热。";
  if (day % 2 === 0) return "勺很浅：只尝味道，不尝催促。";
  return "小勺安静：专门给愿意先尝一口的人。";
}

export function formatTastingMatLine(warmth: number): string {
  if (warmth <= 0) return "品茶垫还干：等第一份温存再垫第一杯。";
  if (warmth < 12) return "垫面微润：像轻轻说「慢慢品」。";
  if (warmth < 24) return "品茶垫托住杯底：像店把试探也照顾进了手里。";
  return "垫与温存同柔：托住了杯，也不烫到掌。";
}

export function formatTeaspoonAside(historyCount: number): string {
  if (historyCount <= 0) return "勺还闲着：第一笔流通会留下第一口试茶。";
  if (historyCount < 20) return `约试过 ${historyCount} 次浅尝：每一次都是愿意被温柔邀请的许可。`;
  return `逾 ${historyCount} 次浅勺：垫角叠着被温柔尝过的茶香。`;
}

export function formatTeaspoonEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好小勺与品茶垫：今天从愿意浅尝一口开始。";
  if (circulationsToday < 3) return "舀茶、垫杯、浅品：流通也是一种轻轻的邀请。";
  return "忙完把小勺洗净——尝完了，人也要松一松腕。";
}

export function formatTeaspoonPair(day: number, warmth: number): string {
  return `${formatTastingSpoonLine(day)} ${formatTastingMatLine(warmth)}`;
}
