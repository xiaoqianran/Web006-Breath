/**
 * 胶碗与錾刀叙事（纯函数，可单测）
 * 嵌一下：不是急着定住，是「让工件也能被温柔地嵌稳」。
 */

export function formatPitchBowlLine(day: number): string {
  if (day % 3 === 0) return "胶碗静放：碗沿还带着一点暖的痕。";
  if (day % 2 === 0) return "胶很黏：只嵌一下，不硬压。";
  return "胶碗安静：专门给愿意把工件也轻轻嵌稳的人。";
}

export function formatScorperLine(warmth: number): string {
  if (warmth <= 0) return "錾刀还收：等第一份温存再錾第一道。";
  if (warmth < 12) return "刃微亮：像轻轻说「錾一下就好」。";
  if (warmth < 24) return "刃贴着面：像店把细节也錾成纹。";
  return "刀与温存同软：錾到了，也不伤面。";
}

export function formatSoftpitchAside(historyCount: number): string {
  if (historyCount <= 0) return "碗还空：第一笔流通会留下第一下被嵌过的稳。";
  if (historyCount < 20) return `约嵌过 ${historyCount} 次：每一次都是愿意被温柔定住的许可。`;
  return `逾 ${historyCount} 次轻嵌：碗沿叠着被温柔錾过的纹。`;
}

export function formatSoftpitchEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好胶碗与錾刀：今天从愿意嵌一点工件开始。";
  if (circulationsToday < 3) return "取碗、嵌稳、轻錾：流通也是一种轻轻的定形。";
  return "忙完把刀收好——錾完了，人也要松一松腕。";
}

export function formatSoftpitchPair(day: number, warmth: number): string {
  return `${formatPitchBowlLine(day)} ${formatScorperLine(warmth)}`;
}
