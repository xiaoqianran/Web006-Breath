/**
 * 拼布方块与绷缝线叙事（纯函数，可单测）
 * 拼一块：不是急着完工，是「让碎布也能被温柔地拼成完整」。
 */

export function formatQuiltBlockLine(day: number): string {
  if (day % 3 === 0) return "拼布方块静放：角沿还带着一点针的痕。";
  if (day % 2 === 0) return "布很软：只拼一块，不赶工。";
  return "拼布方块安静：专门给愿意把碎布也轻轻拼满的人。";
}

export function formatBastingThreadLine(warmth: number): string {
  if (warmth <= 0) return "绷缝线还整：等第一份温存再钉第一针。";
  if (warmth < 12) return "线头微松：像轻轻说「拼一下就好」。";
  if (warmth < 24) return "线穿过布角：像店把碎布也拼成完整。";
  return "线与温存同软：拼到了，也不勒角。";
}

export function formatSoftblockAside(historyCount: number): string {
  if (historyCount <= 0) return "方块还空：第一笔流通会留下第一块被拼过的纹。";
  if (historyCount < 20) return `约拼过 ${historyCount} 次：每一次都是愿意被温柔成形的许可。`;
  return `逾 ${historyCount} 次轻拼：角沿叠着被温柔钉过的线。`;
}

export function formatSoftblockEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好拼布方块与绷缝线：今天从愿意拼一点碎布开始。";
  if (circulationsToday < 3) return "取布、抽线、轻拼：流通也是一种轻轻的成形。";
  return "忙完把线绕好——拼完了，人也要松一松腕。";
}

export function formatSoftblockPair(day: number, warmth: number): string {
  return `${formatQuiltBlockLine(day)} ${formatBastingThreadLine(warmth)}`;
}
