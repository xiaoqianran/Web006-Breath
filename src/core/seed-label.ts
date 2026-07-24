/**
 * 窗台鸟食与小碟叙事（纯函数，可单测）
 * 店不只接待人：窗外的小生命也算一种温柔流通。
 */

export function formatBirdSeedLine(day: number): string {
  if (day % 3 === 0) return "窗台鸟食添了一勺：麻雀会先到，心情也会跟着轻。";
  if (day % 2 === 0) return "食盘边沿有细爪印：有人（有鸟）来过。";
  return "鸟食罐盖子半开：今天也欢迎不说话的客人。";
}

export function formatSeedDishLine(warmth: number): string {
  if (warmth <= 0) return "小碟还空：等第一份温存再撒上谷粒。";
  if (warmth < 12) return "碟里谷粒亮着：热气从店内透到窗框。";
  if (warmth < 24) return "小碟被啄得浅浅凹：温柔也会被取走一点。";
  return "碟空了又满：流通不只在柜台，也在窗台。";
}

export function formatSeedAside(queueLength: number): string {
  if (queueLength <= 0) return "窗外暂时只有风：可以听翅声，或只看光移动。";
  if (queueLength === 1) return "人与鸟都在附近：先接住门口那位，再添一勺食。";
  return `门外约有 ${queueLength} 位——窗台那几只，会自己排队。`;
}

export function formatSeedEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先添一勺鸟食：今天从「也照顾小生命」开始。";
  if (circulationsToday < 3) return "人来人往，鸟也来往：店的节奏刚刚好。";
  return "忙完也望一眼窗台：空碟，是该续温的信号。";
}

export function formatSeedPair(day: number, warmth: number): string {
  return `${formatBirdSeedLine(day)} ${formatSeedDishLine(warmth)}`;
}
