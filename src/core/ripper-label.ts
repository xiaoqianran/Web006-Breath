/**
 * 拆线器与砂囊叙事（纯函数，可单测）
 * 拆开不是失败：是给针脚一次重来的许可。
 */

export function formatSeamRipperLine(day: number): string {
  if (day % 3 === 0) return "拆线器刃口很细：只挑线，不伤布。";
  if (day % 2 === 0) return "红球柄在掌心：拆开时也能握得稳。";
  return "拆线器安静：需要时再打开那道缝。";
}

export function formatEmeryBagLine(warmth: number): string {
  if (warmth <= 0) return "砂囊还凉：等第一份温存再磨尖第一根针。";
  if (warmth < 12) return "囊面有细灰：刚磨过几根有点钝的针。";
  if (warmth < 24) return "针尖重新亮一点：拆开之后，也能缝得更准。";
  return "砂囊与温存同在：钝了可以磨，错了可以拆。";
}

export function formatRipperAside(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先检查刃口：今天也可能需要重来一针。";
  if (circulationsToday < 3) return "拆开、磨尖、再缝：流通允许返工。";
  return "忙完把拆线器收好——重来也是一种温柔。";
}

export function formatRipperEncourage(queueLength: number): string {
  if (queueLength <= 0) return "店暂时静：可以拆一段练习缝，或只磨磨针。";
  if (queueLength === 1) return "有一位在等：错了的线可以后拆，人先接住。";
  return `门外约有 ${queueLength} 位——每位都值得一次「可以重来」。`;
}

export function formatRipperPair(day: number, warmth: number): string {
  return `${formatSeamRipperLine(day)} ${formatEmeryBagLine(warmth)}`;
}
