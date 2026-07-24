/**
 * 面团刮板与烘焙纸叙事（纯函数，可单测）
 * 把粘在台面上的温柔收齐：不是打扫强迫，是「让面也有干净的落脚」。
 */

export function formatDoughScraperLine(day: number): string {
  if (day % 3 === 0) return "面团刮板贴着台面：刃边还带着一点粉的白。";
  if (day % 2 === 0) return "板很薄：只收拢面，不刮伤台。";
  return "刮板安静：专门给愿意把散开的面轻轻聚回的人。";
}

export function formatBakeParchmentLine(warmth: number): string {
  if (warmth <= 0) return "烘焙纸还卷着：等第一份温存再铺第一张。";
  if (warmth < 12) return "纸边微翘：像轻轻说「垫一层就不粘」。";
  if (warmth < 24) return "烘焙纸铺进烤盘：像店把焦糊也提前挡在外面。";
  return "纸与温存同薄：隔住了烫，也不隔住香。";
}

export function formatScraperAside(historyCount: number): string {
  if (historyCount <= 0) return "刮板还靠着：第一笔流通会留下第一铲收拢。";
  if (historyCount < 20) return `约收过 ${historyCount} 次散面：每一次都是愿意被温柔聚回的许可。`;
  return `逾 ${historyCount} 次刮拢：纸上叠着被温柔垫过的进出。`;
}

export function formatScraperEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好刮板与烘焙纸：今天从愿意收拢散面开始。";
  if (circulationsToday < 3) return "刮拢、铺纸、入盘：流通也是一种轻轻的收拾。";
  return "忙完把刮板洗净——收完了，人也要松一松腕。";
}

export function formatScraperPair(day: number, warmth: number): string {
  return `${formatDoughScraperLine(day)} ${formatBakeParchmentLine(warmth)}`;
}
