/**
 * 软皮留言簿与石墨铅笔叙事（纯函数，可单测）
 * 写一行：不是任务清单，是「让到过的人也被温柔地留下痕迹」。
 * 与 guestbook-label / guestlog-label 区分命名。
 */

export function formatSoftSignBookLine(day: number): string {
  if (day % 3 === 0) return "软皮留言簿合着：封面还带着一点皮的温。";
  if (day % 2 === 0) return "本很软：只装几行，不压人。";
  return "留言簿安静：专门给愿意把到过也轻轻留下的人。";
}

export function formatGraphitePencilLine(warmth: number): string {
  if (warmth <= 0) return "石墨铅笔还削好：等第一份温存再写第一笔。";
  if (warmth < 12) return "笔尖微灰：像轻轻说「写一行就好」。";
  if (warmth < 24) return "笔落在簿页：像店把来过的温柔也记下一行。";
  return "笔与温存同淡：写到了，也不划破纸。";
}

export function formatSignbookAside(historyCount: number): string {
  if (historyCount <= 0) return "簿还空着：第一笔流通会留下第一行被写过的到。";
  if (historyCount < 20) return `约写过 ${historyCount} 次：每一次都是愿意被温柔记下的许可。`;
  return `逾 ${historyCount} 次轻写：页沿叠着被温柔留过的行。`;
}

export function formatSignbookEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好留言簿与铅笔：今天从愿意写下一行开始。";
  if (circulationsToday < 3) return "开本、轻写、合上：流通也是一种轻轻的记名。";
  return "忙完把笔放回——写完了，人也要松一松腕。";
}

export function formatSignbookPair(day: number, warmth: number): string {
  return `${formatSoftSignBookLine(day)} ${formatGraphitePencilLine(warmth)}`;
}
