/**
 * 小陶盆与浇水壶叙事（纯函数，可单测）
 * 柜台旁养一棵：不是园艺考核，是「让店也有呼吸的节奏」。
 */

export function formatClayPotLine(day: number): string {
  if (day % 3 === 0) return "小陶盆端正：盆沿还带着一点土的温。";
  if (day % 2 === 0) return "盆很轻：只托住根，不托住催促。";
  return "陶盆安静：专门给愿意把绿也接进店的人。";
}

export function formatWateringCanLine(warmth: number): string {
  if (warmth <= 0) return "浇水壶还空：等第一份温存再浇第一口。";
  if (warmth < 12) return "壶嘴微湿：像轻轻说「慢一点浇」。";
  if (warmth < 24) return "小壶抬起：像店把呼吸也按节奏给了叶。";
  return "水与温存同浅：润了土，也不淹住根。";
}

export function formatPlantpotAside(historyCount: number): string {
  if (historyCount <= 0) return "盆还干着：第一笔流通会留下第一口浇灌。";
  if (historyCount < 20) return `约浇过 ${historyCount} 次绿意：每一次都是愿意被温柔养活的许可。`;
  return `逾 ${historyCount} 次浇灌：盆沿叠着被温柔润过的土。`;
}

export function formatPlantpotEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好陶盆与小壶：今天从愿意给绿一点水开始。";
  if (circulationsToday < 3) return "端盆、浇水、擦沿：流通也是一种轻轻的养护。";
  return "忙完把小壶放回——浇完了，人也要松一松腕。";
}

export function formatPlantpotPair(day: number, warmth: number): string {
  return `${formatClayPotLine(day)} ${formatWateringCanLine(warmth)}`;
}
