/**
 * 墨台与吸墨纸叙事（纯函数，可单测）
 * 写标签、写回信、写瞬间卡：墨色把情绪变成可递出的字。
 */

export function formatInkWellLine(day: number): string {
  if (day % 3 === 0) return "墨台加了一点水：笔尖终于肯听话。";
  if (day % 2 === 0) return "墨色比昨天浅一点：今天适合写短句。";
  return "墨台安静：第一笔会决定今天的语气。";
}

export function formatBlotterLine(historyCount: number): string {
  if (historyCount <= 0) return "吸墨纸还干净：等第一张瞬间卡洇开。";
  if (historyCount < 10) return `吸墨纸上已有 ${historyCount} 处淡痕：像未说完的附言。`;
  if (historyCount < 40) return `吸墨纸叠了几层，约 ${historyCount} 次落笔的余韵。`;
  return `逾 ${historyCount} 次落笔：吸墨纸厚得像一本无声的店志。`;
}

export function formatInkAside(warmth: number): string {
  if (warmth <= 0) return "墨还凉：温存起来后再写给客人看。";
  if (warmth < 12) return "墨迹边沿有一点暖：字会比心里轻松。";
  return "墨与温存同色调：写出去的句子不会太硬。";
}

export function formatInkEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先蘸一笔：今天的标签从第一张开始。";
  if (circulationsToday < 3) return "写慢一点也没关系：墨干了，心意还在。";
  return "笔杆温了：忙完也记得给自己留一行空白。";
}

export function formatInkPair(day: number, historyCount: number): string {
  return `${formatInkWellLine(day)} ${formatBlotterLine(historyCount)}`;
}
