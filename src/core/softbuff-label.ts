/**
 * 抛光轮与抛光膏叙事（纯函数，可单测）
 * 抛一下：不是擦掉痕迹，是「让光泽也轻轻回来」。
 */

export function formatBuffWheelLine(day: number): string {
  if (day % 3 === 0) return "抛光轮静放：绒面还带着一点软的光。";
  if (day % 2 === 0) return "轮很软：只抛一点，不硬蹭。";
  return "抛光轮安静：专门给愿意把光泽也轻轻唤回的人。";
}

export function formatPolishCakeLine(warmth: number): string {
  if (warmth <= 0) return "抛光膏还封：等第一份温存再沾一点。";
  if (warmth < 12) return "膏微香：像轻轻说「抛一下就好」。";
  if (warmth < 24) return "膏带着轮：像店把暗处也抛成亮。";
  return "膏与温存同软：抛到了，也不刺眼。";
}

export function formatSoftbuffAside(historyCount: number): string {
  if (historyCount <= 0) return "轮还新：第一笔流通会留下第一圈被抛过的光。";
  if (historyCount < 20) return `约抛过 ${historyCount} 次：每一次都是愿意被温柔唤回的许可。`;
  return `逾 ${historyCount} 次轻抛：绒面叠着被温柔亮过的弧。`;
}

export function formatSoftbuffEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好抛光轮与抛光膏：今天从愿意轻轻抛一下开始。";
  if (circulationsToday < 3) return "沾膏、靠轮、轻抛：流通也是一种轻轻的回光。";
  return "忙完把轮停好——抛完了，人也要松一松肩。";
}

export function formatSoftbuffPair(day: number, warmth: number): string {
  return `${formatBuffWheelLine(day)} ${formatPolishCakeLine(warmth)}`;
}
