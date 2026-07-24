/**
 * 店账册与软铅笔叙事（纯函数，可单测）
 * 流通也要记账：不是算计，是记得谁被接住过。
 */

export function formatShopLedgerLine(day: number): string {
  if (day % 3 === 0) return "店账册翻开新页：今天的流水从空白开始。";
  if (day % 2 === 0) return "账册边有软折：翻过很多次温柔的进出。";
  return "店账册安静：专门记下被接住的名字与时刻。";
}

export function formatSoftPencilLine(warmth: number): string {
  if (warmth <= 0) return "软铅笔还钝：等第一份温存再写下第一行。";
  if (warmth < 12) return "笔尖刚削好：字迹浅而稳，改起来容易。";
  if (warmth < 24) return "铅笔在账页上轻轻走：像把流通写成可回看的诗。";
  return "笔与温存同浅：记下了，也不必算得太死。";
}

export function formatLedgerAside(historyCount: number): string {
  if (historyCount <= 0) return "账页还空：第一笔流通会留下第一行字。";
  if (historyCount < 20) return `约记过 ${historyCount} 笔流通：每一行都是一次愿意被记得的许可。`;
  return `逾 ${historyCount} 笔记账：册页记得所有被温柔统计的进出。`;
}

export function formatLedgerEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先翻开账册：今天从愿意记下一笔开始。";
  if (circulationsToday < 3) return "写、改、合上：流通也是一种温柔的统计。";
  return "忙完把铅笔收好——记完了，人也要松一松肩。";
}

export function formatLedgerPair(day: number, warmth: number): string {
  return `${formatShopLedgerLine(day)} ${formatSoftPencilLine(warmth)}`;
}
