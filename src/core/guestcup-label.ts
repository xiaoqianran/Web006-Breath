/**
 * 待客瓷杯与亚麻杯垫叙事（纯函数，可单测）
 * 递一杯：不是待客话术，是「让热也能被温柔地捧住」。
 */

export function formatGuestCupLine(day: number): string {
  if (day % 3 === 0) return "待客瓷杯温着：杯沿还漾着一点浅的绿。";
  if (day % 2 === 0) return "茶很淡：只润一口，不烫心。";
  return "瓷杯安静：专门给愿意把热也轻轻捧住的人。";
}

export function formatLinenCoasterLine(warmth: number): string {
  if (warmth <= 0) return "亚麻杯垫还干：等第一份温存再接第一圈水痕。";
  if (warmth < 12) return "垫面微软：像轻轻说「放这里就好」。";
  if (warmth < 24) return "杯落在垫上：像店把热也托给桌面。";
  return "垫与温存同软：接住了，也不留渍。";
}

export function formatGuestcupAside(historyCount: number): string {
  if (historyCount <= 0) return "杯还空着：第一笔流通会留下第一口被递出的热。";
  if (historyCount < 20) return `约递过 ${historyCount} 次：每一次都是愿意被温柔招待的许可。`;
  return `逾 ${historyCount} 次轻递：垫沿叠着被温柔接过的热。`;
}

export function formatGuestcupEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好瓷杯与杯垫：今天从愿意递一点热开始。";
  if (circulationsToday < 3) return "烫杯、倒茶、放垫：流通也是一种轻轻的招待。";
  return "忙完把垫晾干——递完了，人也要松一松肩。";
}

export function formatGuestcupPair(day: number, warmth: number): string {
  return `${formatGuestCupLine(day)} ${formatLinenCoasterLine(warmth)}`;
}
