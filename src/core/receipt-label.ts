/**
 * 收据条与小圆戳叙事（纯函数，可单测）
 * 流通结束要留一张小条：不是冷冰冰的单据，是「今天被接住过」的凭证。
 */

export function formatReceiptSlipLine(day: number): string {
  if (day % 3 === 0) return "收据条撕下一张：纸边还带着热。";
  if (day % 2 === 0) return "条上字迹很浅：只记温柔，不记价钱。";
  return "收据条安静：专门给愿意带走一张凭证的人。";
}

export function formatSoftRoundStampLine(warmth: number): string {
  if (warmth <= 0) return "小圆戳还凉：等第一份温存再盖第一枚。";
  if (warmth < 12) return "戳面微润：盖下去像一句轻轻的「收妥」。";
  if (warmth < 24) return "圆印留在条角：像店轻轻点了个头。";
  return "戳与温存同圆：凭证留下了，也不盖住纸的空白。";
}

export function formatReceiptAside(historyCount: number): string {
  if (historyCount <= 0) return "条还没撕：第一笔流通会留下第一张凭证。";
  if (historyCount < 20) return `约开过 ${historyCount} 张收据：每张都是一次愿意被记得的许可。`;
  return `逾 ${historyCount} 张小条：抽屉里叠着被温柔证明过的进出。`;
}

export function formatReceiptEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好收据条：今天从愿意开一张小凭证开始。";
  if (circulationsToday < 3) return "撕条、盖戳、递出：流通也是一种温柔的证明。";
  return "忙完把戳擦净——证开完了，人也要松一松腕。";
}

export function formatReceiptPair(day: number, warmth: number): string {
  return `${formatReceiptSlipLine(day)} ${formatSoftRoundStampLine(warmth)}`;
}
