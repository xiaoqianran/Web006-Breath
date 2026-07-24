/**
 * 弧面石与包边条叙事（纯函数，可单测）
 * 包一下：不是硬箍，是「让圆润的也能被温柔地护住」。
 */

export function formatCabochonLine(day: number): string {
  if (day % 3 === 0) return "弧面石静放：表面还带着一点柔的光。";
  if (day % 2 === 0) return "石很圆：只托一点，不硬压。";
  return "弧面石安静：专门给愿意把圆润也温柔护住的人。";
}

export function formatBezelStripLine(warmth: number): string {
  if (warmth <= 0) return "包边条还直：等第一份温存再轻轻围上。";
  if (warmth < 12) return "条微弯：像轻轻说「护一下就好」。";
  if (warmth < 24) return "条带着石：像店把圆润的也围成安。";
  return "条与温存同软：护到了，也不勒。";
}

export function formatSoftcabAside(historyCount: number): string {
  if (historyCount <= 0) return "石还净：第一笔流通会留下第一圈被温柔围过的护。";
  if (historyCount < 20) return `约护过 ${historyCount} 次：每一次都是愿意被温柔围住的许可。`;
  return `逾 ${historyCount} 次轻护：边条叠着被温柔弯过的弧。`;
}

export function formatSoftcabEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好弧面石与包边条：今天从愿意轻轻护一下开始。";
  if (circulationsToday < 3) return "选石、围条、轻护：流通也是一种轻轻的包住。";
  return "忙完把条收好——护完了，人也要松一松肩。";
}

export function formatSoftcabPair(day: number, warmth: number): string {
  return `${formatCabochonLine(day)} ${formatBezelStripLine(warmth)}`;
}
