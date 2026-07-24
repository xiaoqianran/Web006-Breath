/**
 * 线头帽与吊坠环叙事（纯函数，可单测）
 * 收一下：不是硬封死，是「让线头也能被温柔地护好」。
 */

export function formatEndCapLine(day: number): string {
  if (day % 3 === 0) return "线头帽静散：帽口还带着一点细的光。";
  if (day % 2 === 0) return "帽很轻：只护一点，不硬封。";
  return "线头帽安静：专门给愿意把线头也温柔护好的人。";
}

export function formatSoftBailLine(warmth: number): string {
  if (warmth <= 0) return "吊坠环还空：等第一份温存再轻轻挂上。";
  if (warmth < 12) return "环微亮：像轻轻说「挂一下就好」。";
  if (warmth < 24) return "环带着帽：像店把散的线头也护成整。";
  return "环与温存同软：挂到了，也不勒。";
}

export function formatSoftendcapAside(historyCount: number): string {
  if (historyCount <= 0) return "帽还齐：第一笔流通会留下第一记被温柔护过的收。";
  if (historyCount < 20) return `约护过 ${historyCount} 次：每一次都是愿意被温柔收好的许可。`;
  return `逾 ${historyCount} 次轻护：帽口叠着被温柔合过的口。`;
}

export function formatSoftendcapEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好线头帽与吊坠环：今天从愿意轻轻护一下开始。";
  if (circulationsToday < 3) return "套帽、挂环、轻护：流通也是一种轻轻的收好。";
  return "忙完把帽收好——护完了，人也要松一松肩。";
}

export function formatSoftendcapPair(day: number, warmth: number): string {
  return `${formatEndCapLine(day)} ${formatSoftBailLine(warmth)}`;
}
