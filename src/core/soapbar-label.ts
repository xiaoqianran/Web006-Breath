/**
 * 香皂块与木皂碟叙事（纯函数，可单测）
 * 搓一点沫：不是洁癖说教，是「让手上的累也能被轻轻洗掉」。
 * 与 soap-label（洗手皂/软毛巾）区分命名。
 */

export function formatSoapBarLine(day: number): string {
  if (day % 3 === 0) return "香皂块静放：表面还带着一点细细的润。";
  if (day % 2 === 0) return "皂很淡：只起一层沫，不刺鼻。";
  return "香皂安静：专门给愿意把手也洗得软一点的人。";
}

export function formatWoodSoapDishLine(warmth: number): string {
  if (warmth <= 0) return "木皂碟还干：等第一份温存再接第一滴水。";
  if (warmth < 12) return "碟沿微润：像轻轻说「搓一搓就好」。";
  if (warmth < 24) return "皂在碟里轻轻转：像店把干净也递给双手。";
  return "碟与温存同浅：接住了，也不积水。";
}

export function formatSoapbarAside(historyCount: number): string {
  if (historyCount <= 0) return "皂还完整：第一笔流通会留下第一层被洗过的香。";
  if (historyCount < 20) return `约搓过 ${historyCount} 次：每一次都是愿意被温柔洗净的许可。`;
  return `逾 ${historyCount} 次轻搓：碟沿叠着被温柔洗过的沫。`;
}

export function formatSoapbarEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好香皂与皂碟：今天从愿意洗一点累开始。";
  if (circulationsToday < 3) return "取皂、轻搓、冲净：流通也是一种轻轻的收拾。";
  return "忙完把皂放回碟——洗完了，人也要松一松腕。";
}

export function formatSoapbarPair(day: number, warmth: number): string {
  return `${formatSoapBarLine(day)} ${formatWoodSoapDishLine(warmth)}`;
}
