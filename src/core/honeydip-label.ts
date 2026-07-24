/**
 * 小蜜罐与木蜜勺叙事（纯函数，可单测）
 * 茶里加一点甜：不是掩盖苦，是「愿意让舌头也松一松」。
 */

export function formatHoneyJarLine(day: number): string {
  if (day % 3 === 0) return "小蜜罐揭盖：罐口还留着一点金的亮。";
  if (day % 2 === 0) return "蜜很稠：只加一点，不盖过茶的本味。";
  return "蜜罐安静：专门给愿意让苦也软一点的人。";
}

export function formatWoodDipperLine(warmth: number): string {
  if (warmth <= 0) return "木蜜勺还干：等第一份温存再舀第一滴。";
  if (warmth < 12) return "勺柄微黏：像轻轻说「够了就停」。";
  if (warmth < 24) return "蜜勺绕过杯沿：像店把一点甜悄悄递过去。";
  return "勺与温存同轻：加了甜，也不搅乱茶的心。";
}

export function formatHoneydipAside(historyCount: number): string {
  if (historyCount <= 0) return "蜜罐还合着：第一笔流通会留下第一滴甜。";
  if (historyCount < 20) return `约舀过 ${historyCount} 次蜜：每一次都是愿意被温柔软化的许可。`;
  return `逾 ${historyCount} 次加甜：勺沿叠着被温柔润过的茶香。`;
}

export function formatHoneydipEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好蜜罐与木勺：今天从愿意加一点点甜开始。";
  if (circulationsToday < 3) return "揭盖、舀蜜、入杯：流通也是一种轻轻的软化。";
  return "忙完把勺搁回罐盖——甜完了，人也要松一松腕。";
}

export function formatHoneydipPair(day: number, warmth: number): string {
  return `${formatHoneyJarLine(day)} ${formatWoodDipperLine(warmth)}`;
}
