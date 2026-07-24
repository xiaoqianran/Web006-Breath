/**
 * 流苏板与蜡线叙事（纯函数，可单测）
 * 编一束：不是急着收尾，是「让散落也能被温柔地编成柔软」。
 */

export function formatTasselBoardLine(day: number): string {
  if (day % 3 === 0) return "流苏板静放：板沿还带着一点线的痕。";
  if (day % 2 === 0) return "板很平：只编一束，不勒紧。";
  return "流苏板安静：专门给愿意把散落也轻轻编满的人。";
}

export function formatWaxedCordLine(warmth: number): string {
  if (warmth <= 0) return "蜡线还整：等第一份温存再抽第一缕。";
  if (warmth < 12) return "线头微亮：像轻轻说「编一下就好」。";
  if (warmth < 24) return "蜡线绕过板沿：像店把散落也编成柔软。";
  return "线与温存同软：编到了，也不打结。";
}

export function formatSofttasselAside(historyCount: number): string {
  if (historyCount <= 0) return "板还空着：第一笔流通会留下第一束被编过的须。";
  if (historyCount < 20) return `约编过 ${historyCount} 次：每一次都是愿意被温柔成形的许可。`;
  return `逾 ${historyCount} 次轻编：板沿叠着被温柔绕过的线。`;
}

export function formatSofttasselEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好流苏板与蜡线：今天从愿意编一点散落开始。";
  if (circulationsToday < 3) return "取板、抽线、轻编：流通也是一种轻轻的成形。";
  return "忙完把线绕好——编完了，人也要松一松腕。";
}

export function formatSofttasselPair(day: number, warmth: number): string {
  return `${formatTasselBoardLine(day)} ${formatWaxedCordLine(warmth)}`;
}
