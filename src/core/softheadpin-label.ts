/**
 * 头针与眼针叙事（纯函数，可单测）
 * 穿一下：不是硬串死，是「让珠也能被温柔地托住」。
 */

export function formatHeadPinLine(day: number): string {
  if (day % 3 === 0) return "头针静排：针头还带着一点细的光。";
  if (day % 2 === 0) return "针很稳：只穿一点，不硬戳。";
  return "头针安静：专门给愿意把珠也温柔托住的人。";
}

export function formatEyePinLine(warmth: number): string {
  if (warmth <= 0) return "眼针还直：等第一份温存再轻轻弯一下。";
  if (warmth < 12) return "眼微圆：像轻轻说「连一下就好」。";
  if (warmth < 24) return "眼带着针：像店把散的珠也连成串。";
  return "眼与温存同软：连到了，也不松。";
}

export function formatSoftheadpinAside(historyCount: number): string {
  if (historyCount <= 0) return "针还齐：第一笔流通会留下第一记被温柔穿过的托。";
  if (historyCount < 20) return `约穿过 ${historyCount} 次：每一次都是愿意被温柔托住的许可。`;
  return `逾 ${historyCount} 次轻穿：针头叠着被温柔连过的串。`;
}

export function formatSoftheadpinEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好头针与眼针：今天从愿意轻轻穿一下开始。";
  if (circulationsToday < 3) return "穿珠、弯眼、轻连：流通也是一种轻轻的托住。";
  return "忙完把针收好——穿完了，人也要松一松指。";
}

export function formatSoftheadpinPair(day: number, warmth: number): string {
  return `${formatHeadPinLine(day)} ${formatEyePinLine(warmth)}`;
}
