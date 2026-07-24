/**
 * 钮扣匣与软尺叙事（纯函数，可单测）
 * 扣住的是细节：量一量，再把合适的那一颗缝上。
 */

export function formatButtonBoxLine(day: number): string {
  if (day % 3 === 0) return "钮扣匣打开：浅杏、米白与一点铜绿并排。";
  if (day % 2 === 0) return "匣里缺了几颗：有人把合适的那一枚带走了。";
  return "钮扣匣安静：每一颗都在等对的扣眼。";
}

export function formatSoftTapeLine(warmth: number): string {
  if (warmth <= 0) return "软尺还卷着：等第一份温存再量第一寸。";
  if (warmth < 12) return "软尺边沿有折痕：量过几次，也弯过几次。";
  if (warmth < 24) return "量一量再动手：合适，比「差不多」更温柔。";
  return "软尺与温存同在：尺寸对了，心也少一分紧。";
}

export function formatButtonAside(isGift: boolean): string {
  if (isGift) return "赠予时多缝一颗备用扣：让对方知道你想到了以后。";
  return "上架旁可放一枚小钮扣标签：路过的人会想轻轻按一下。";
}

export function formatButtonEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先打开钮扣匣：今天从选对的那一颗开始。";
  if (circulationsToday < 3) return "量过、扣上：流通也是一种刚好的尺寸。";
  return "忙完把尺卷好——也给自己留一点松量。";
}

export function formatButtonPair(day: number, warmth: number): string {
  return `${formatButtonBoxLine(day)} ${formatSoftTapeLine(warmth)}`;
}
