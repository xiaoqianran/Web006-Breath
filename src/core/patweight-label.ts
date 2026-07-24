/**
 * 布镇与裁片纸样叙事（纯函数，可单测）
 * 压一角：不是粗暴固定，是「让布料也能被温柔地安住」。
 * 与 pattern-label 区分命名。
 */

export function formatClothWeightLine(day: number): string {
  if (day % 3 === 0) return "布镇静放：包布还带着一点沉的温。";
  if (day % 2 === 0) return "镇很轻：只压一角，不压皱。";
  return "布镇安静：专门给愿意把布料也轻轻安住的人。";
}

export function formatPaperPatternLine(warmth: number): string {
  if (warmth <= 0) return "裁片纸样还叠着：等第一份温存再铺第一张。";
  if (warmth < 12) return "纸边微翘：像轻轻说「对一下就好」。";
  if (warmth < 24) return "纸样铺在布上：像店把合身也递给刀口。";
  return "样与温存同薄：对到了，也不划破纸。";
}

export function formatPatweightAside(historyCount: number): string {
  if (historyCount <= 0) return "镇还闲着：第一笔流通会留下第一角被压住的布。";
  if (historyCount < 20) return `约压过 ${historyCount} 次：每一次都是愿意被温柔安住的许可。`;
  return `逾 ${historyCount} 次轻压：镇底叠着被温柔安过的布。`;
}

export function formatPatweightEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好布镇与纸样：今天从愿意安住一点布开始。";
  if (circulationsToday < 3) return "铺样、轻压、裁开：流通也是一种轻轻的合身。";
  return "忙完把镇归位——压完了，人也要松一松肩。";
}

export function formatPatweightPair(day: number, warmth: number): string {
  return `${formatClothWeightLine(day)} ${formatPaperPatternLine(warmth)}`;
}
