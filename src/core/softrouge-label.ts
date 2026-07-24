/**
 * 抛光膏与绒布棒叙事（纯函数，可单测）
 * 擦一抹：不是急着发亮，是「让暗面也能被温柔地擦出光」。
 */

export function formatPolishRougeLine(day: number): string {
  if (day % 3 === 0) return "抛光膏静放：盖沿还带着一点细粉的痕。";
  if (day % 2 === 0) return "膏很细：只抹一抹，不硬蹭。";
  return "抛光膏安静：专门给愿意把暗面也轻轻擦亮的人。";
}

export function formatBuffStickLine(warmth: number): string {
  if (warmth <= 0) return "绒布棒还新：等第一份温存再擦第一下。";
  if (warmth < 12) return "棒头微柔：像轻轻说「擦一下就好」。";
  if (warmth < 24) return "棒贴着面：像店把暗面也擦成光。";
  return "棒与温存同软：擦到了，也不伤面。";
}

export function formatSoftrougeAside(historyCount: number): string {
  if (historyCount <= 0) return "膏还整：第一笔流通会留下第一抹被擦过的光。";
  if (historyCount < 20) return `约擦过 ${historyCount} 次：每一次都是愿意被温柔发亮的许可。`;
  return `逾 ${historyCount} 次轻擦：棒沿叠着被温柔抹过的粉。`;
}

export function formatSoftrougeEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好抛光膏与绒布棒：今天从愿意擦一点暗面开始。";
  if (circulationsToday < 3) return "取膏、抹棒、轻擦：流通也是一种轻轻的发亮。";
  return "忙完把棒放好——擦完了，人也要松一松腕。";
}

export function formatSoftrougePair(day: number, warmth: number): string {
  return `${formatPolishRougeLine(day)} ${formatBuffStickLine(warmth)}`;
}
