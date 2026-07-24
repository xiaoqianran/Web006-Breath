/**
 * 笔搁与吸墨纸叙事（纯函数，可单测）
 * 搁一枝笔：不是停写说教，是「让句子也能被温柔地放一放」。
 * 与 notepen-label / ink-label 区分命名。
 */

export function formatCeramicPenRestLine(day: number): string {
  if (day % 3 === 0) return "瓷笔搁静放：凹处还留着一点淡的墨痕。";
  if (day % 2 === 0) return "搁很稳：只托一枝，不抢字。";
  return "笔搁安静：专门给愿意把笔也轻轻放下的人。";
}

export function formatBlotSheetLine(warmth: number): string {
  if (warmth <= 0) return "吸墨纸还白：等第一份温存再吸第一点墨。";
  if (warmth < 12) return "纸面微洇：像轻轻说「吸一下就好」。";
  if (warmth < 24) return "纸贴上湿笔：像店把未干的字也托住。";
  return "纸与温存同薄：吸到了，也不糊字。";
}

export function formatPenrestAside(historyCount: number): string {
  if (historyCount <= 0) return "搁还空着：第一笔流通会留下第一枝被托住的笔。";
  if (historyCount < 20) return `约搁过 ${historyCount} 次：每一次都是愿意被温柔暂停的许可。`;
  return `逾 ${historyCount} 次轻搁：凹处叠着被温柔放过的笔。`;
}

export function formatPenrestEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好笔搁与吸墨纸：今天从愿意放下笔开始。";
  if (circulationsToday < 3) return "搁笔、吸墨、再写：流通也是一种轻轻的停顿。";
  return "忙完把纸折好——写完了，人也要松一松腕。";
}

export function formatPenrestPair(day: number, warmth: number): string {
  return `${formatCeramicPenRestLine(day)} ${formatBlotSheetLine(warmth)}`;
}
