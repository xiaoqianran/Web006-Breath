/**
 * 小喷灯与焊板叙事（纯函数，可单测）
 * 点一火：不是急着焊死，是「让接缝也能被温柔地焊住」。
 */

export function formatMiniTorchLine(day: number): string {
  if (day % 3 === 0) return "小喷灯静放：嘴沿还带着一点暖的痕。";
  if (day % 2 === 0) return "火很柔：只点一下，不硬烧。";
  return "小喷灯安静：专门给愿意把接缝也轻轻焊住的人。";
}

export function formatSolderBoardLine(warmth: number): string {
  if (warmth <= 0) return "焊板还净：等第一份温存再放第一件。";
  if (warmth < 12) return "板微暖：像轻轻说「焊一下就好」。";
  if (warmth < 24) return "件在板上：像店把接缝也焊成稳。";
  return "板与温存同软：焊到了，也不伤面。";
}

export function formatSofttorchAside(historyCount: number): string {
  if (historyCount <= 0) return "灯还熄：第一笔流通会留下第一火被点过的暖。";
  if (historyCount < 20) return `约焊过 ${historyCount} 次：每一次都是愿意被温柔接住的许可。`;
  return `逾 ${historyCount} 次轻焊：板沿叠着被温柔点过的火。`;
}

export function formatSofttorchEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好小喷灯与焊板：今天从愿意焊一点接缝开始。";
  if (circulationsToday < 3) return "取灯、轻点、再焊：流通也是一种轻轻的接住。";
  return "忙完把灯熄好——焊完了，人也要松一松肩。";
}

export function formatSofttorchPair(day: number, warmth: number): string {
  return `${formatMiniTorchLine(day)} ${formatSolderBoardLine(warmth)}`;
}
