/**
 * 罐口标签与细棉线叙事（纯函数，可单测）
 * 给罐子写名字：不是分类强迫，是「让温柔也能被叫一声」。
 */

export function formatJarTagLine(day: number): string {
  if (day % 3 === 0) return "罐口标签贴上：纸角还带着一点指温。";
  if (day % 2 === 0) return "标签很短：只写名字，不写评价。";
  return "标签安静：专门给愿意被轻轻叫出的罐子。";
}

export function formatFineCottonLine(warmth: number): string {
  if (warmth <= 0) return "细棉线还松：等第一份温存再系第一圈。";
  if (warmth < 12) return "棉线绕过罐颈：像轻轻说「这是你」。";
  if (warmth < 24) return "细线系住标签：像店把名字也温柔地拴好。";
  return "线与温存同细：叫住了名，也不勒住罐。";
}

export function formatJarlabelAside(historyCount: number): string {
  if (historyCount <= 0) return "标签还空：第一笔流通会留下第一个罐名。";
  if (historyCount < 20) return `约贴过 ${historyCount} 张罐签：每一张都是愿意被温柔点名的许可。`;
  return `逾 ${historyCount} 个罐名：架上叠着被温柔叫过的收纳。`;
}

export function formatJarlabelEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好标签与棉线：今天从愿意给温柔起名开始。";
  if (circulationsToday < 3) return "写签、系线、贴罐：流通也是一种轻轻的点名。";
  return "忙完把棉线理顺——贴完了，人也要松一松指尖。";
}

export function formatJarlabelPair(day: number, warmth: number): string {
  return `${formatJarTagLine(day)} ${formatFineCottonLine(warmth)}`;
}
