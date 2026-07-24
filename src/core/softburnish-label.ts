/**
 * 抛光钢与压边刀叙事（纯函数，可单测）
 * 压一圈：不是急着发亮，是「让边沿也能被温柔地压顺」。
 */

export function formatBurnisherLine(day: number): string {
  if (day % 3 === 0) return "抛光钢静放：钢身还带着一点冷的光。";
  if (day % 2 === 0) return "钢很滑：只压一圈，不硬蹭。";
  return "抛光钢安静：专门给愿意把边沿也轻轻压顺的人。";
}

export function formatBezelPusherLine(warmth: number): string {
  if (warmth <= 0) return "压边刀还收：等第一份温存再压第一边。";
  if (warmth < 12) return "刀微弯：像轻轻说「压一下就好」。";
  if (warmth < 24) return "刀贴着石缘：像店把边沿也压成稳。";
  return "刀与温存同软：压到了，也不伤石。";
}

export function formatSoftburnishAside(historyCount: number): string {
  if (historyCount <= 0) return "钢还净：第一笔流通会留下第一圈被压过的光。";
  if (historyCount < 20) return `约压过 ${historyCount} 次：每一次都是愿意被温柔收边的许可。`;
  return `逾 ${historyCount} 次轻压：钢沿叠着被温柔压过的边。`;
}

export function formatSoftburnishEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好抛光钢与压边刀：今天从愿意压一点边沿开始。";
  if (circulationsToday < 3) return "取钢、轻压、收边：流通也是一种轻轻的稳固。";
  return "忙完把刀收好——压完了，人也要松一松腕。";
}

export function formatSoftburnishPair(day: number, warmth: number): string {
  return `${formatBurnisherLine(day)} ${formatBezelPusherLine(warmth)}`;
}
