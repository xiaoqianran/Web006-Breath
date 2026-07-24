/**
 * 回信匣与邮票托盘叙事（纯函数，可单测）
 * 客人留下的纸片，可以慢慢回；不必即时，也算被接住。
 */

export function formatReplyBoxLine(historyCount: number): string {
  if (historyCount <= 0) return "回信匣还空：第一封流通会留下折痕。";
  if (historyCount === 1) return "匣里有一封薄纸：有人被写进瞬间了。";
  if (historyCount < 20) return `回信匣里约有 ${historyCount} 封温柔的回音，不必一次拆完。`;
  return `逾 ${historyCount} 封回音叠着：匣盖轻轻压住一整季的心事。`;
}

export function formatStampTrayLine(day: number): string {
  if (day % 3 === 0) return "邮票托盘换了浅金边：像给情绪盖了邮戳。";
  if (day % 2 === 0) return "小邮票一角翘起，像等着被贴上某人的名字。";
  return "邮票托盘安静：每一枚都是「可以送出去」的许可。";
}

export function formatLetterAside(warmth: number): string {
  if (warmth <= 0) return "墨还干着：温存起来后再写回信。";
  if (warmth < 12) return "信纸边沿有一点暖：回句短话也够。";
  return "回信不必完美：盖上邮戳，流通就算完成了一半。";
}

export function formatLetterEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先整理回信匣：今天也会有人留下可回的句子。";
  if (circulationsToday < 3) return "写一封、送一封：流通就是把纸页变成去路。";
  return "匣子渐满也不急——忙完再拆，温柔可以迟到。";
}

export function formatLetterPair(historyCount: number, day: number): string {
  return `${formatReplyBoxLine(historyCount)} ${formatStampTrayLine(day)}`;
}
