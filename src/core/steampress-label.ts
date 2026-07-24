/**
 * 小蒸汽熨与熨布叙事（纯函数，可单测）
 * 熨一痕：不是急着平整，是「让褶皱也能被温柔地抚平」。
 * 与 iron-label / press-label 区分命名。
 */

export function formatMiniSteamIronLine(day: number): string {
  if (day % 3 === 0) return "小蒸汽熨静放：底板还带着一点温的光。";
  if (day % 2 === 0) return "熨很轻：只过一痕，不烫焦。";
  return "蒸汽熨安静：专门给愿意把褶皱也轻轻抚平的人。";
}

export function formatSteamPressClothLine(warmth: number): string {
  if (warmth <= 0) return "熨布还叠着：等第一份温存再垫第一层。";
  if (warmth < 12) return "布面微润：像轻轻说「垫一下就好」。";
  if (warmth < 24) return "熨布隔在布上：像店把热也温柔地隔开。";
  return "布与温存同薄：隔到了，也不留痕。";
}

export function formatSteampressAside(historyCount: number): string {
  if (historyCount <= 0) return "熨还凉着：第一笔流通会留下第一痕被抚平的褶。";
  if (historyCount < 20) return `约熨过 ${historyCount} 次：每一次都是愿意被温柔抚平的许可。`;
  return `逾 ${historyCount} 次轻熨：布沿叠着被温柔过的热。`;
}

export function formatSteampressEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好蒸汽熨与熨布：今天从愿意抚平一点褶开始。";
  if (circulationsToday < 3) return "垫布、轻熨、收好：流通也是一种轻轻的平整。";
  return "忙完把熨放凉——熨完了，人也要松一松肩。";
}

export function formatSteampressPair(day: number, warmth: number): string {
  return `${formatMiniSteamIronLine(day)} ${formatSteamPressClothLine(warmth)}`;
}
