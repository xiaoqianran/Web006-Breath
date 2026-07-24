/**
 * 浴盐罐与贝壳勺叙事（纯函数，可单测）
 * 舀一勺盐：不是泡澡说教，是「让身体也接到可溶开的温柔」。
 */

export function formatBathSaltJarLine(day: number): string {
  if (day % 3 === 0) return "浴盐罐打开：晶粒还闪着一点淡粉的光。";
  if (day % 2 === 0) return "盐很细：只溶一勺，不涩肤。";
  return "盐罐安静：专门给愿意把累也溶进水里的人。";
}

export function formatShellScoopLine(warmth: number): string {
  if (warmth <= 0) return "贝壳勺还空：等第一份温存再舀第一勺。";
  if (warmth < 12) return "壳沿微亮：像轻轻说「一勺就够」。";
  if (warmth < 24) return "贝壳从罐里舀出盐：像店把放松也递给身体。";
  return "勺与温存同浅：舀到了，也不洒。";
}

export function formatBathsaltAside(historyCount: number): string {
  if (historyCount <= 0) return "罐还封着：第一笔流通会留下第一勺被溶开的盐。";
  if (historyCount < 20) return `约舀过 ${historyCount} 次：每一次都是愿意被温柔浸泡的许可。`;
  return `逾 ${historyCount} 勺轻舀：壳沿叠着被温柔溶过的盐。`;
}

export function formatBathsaltEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好浴盐与贝壳勺：今天从愿意溶一点累开始。";
  if (circulationsToday < 3) return "开罐、轻舀、入水：流通也是一种轻轻的放松。";
  return "忙完把勺擦干——舀完了，人也要松一松肩。";
}

export function formatBathsaltPair(day: number, warmth: number): string {
  return `${formatBathSaltJarLine(day)} ${formatShellScoopLine(warmth)}`;
}
