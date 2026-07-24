/**
 * 软眼罩与收纳袋叙事（纯函数，可单测）
 * 遮一眼：不是逃避说教，是「让眼皮的累也能被温柔地捂住」。
 */

export function formatSoftEyeMaskLine(day: number): string {
  if (day % 3 === 0) return "软眼罩静放：罩面还带着一点丝的润。";
  if (day % 2 === 0) return "罩很轻：只遮一双，不压眉。";
  return "眼罩安静：专门给愿意把眼皮也轻轻捂住的人。";
}

export function formatMaskPouchLine(warmth: number): string {
  if (warmth <= 0) return "收纳袋还空：等第一份温存再装第一只。";
  if (warmth < 12) return "袋口微松：像轻轻说「收这里就好」。";
  if (warmth < 24) return "眼罩滑入软袋：像店把眼皮的暖也留给歇息的人。";
  return "袋与温存同软：收住了，也不压扁丝。";
}

export function formatEyemaskAside(historyCount: number): string {
  if (historyCount <= 0) return "罩还叠着：第一笔流通会留下第一只被戴过的暗。";
  if (historyCount < 20) return `约递过 ${historyCount} 次：每一次都是愿意被温柔捂眼的许可。`;
  return `逾 ${historyCount} 次轻递：袋沿叠着被温柔遮过的丝。`;
}

export function formatEyemaskEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好眼罩与收纳袋：今天从愿意捂一点眼皮开始。";
  if (circulationsToday < 3) return "取罩、轻戴、收袋：流通也是一种轻轻的歇息。";
  return "忙完把袋系好——递完了，人也要松一松眉。";
}

export function formatEyemaskPair(day: number, warmth: number): string {
  return `${formatSoftEyeMaskLine(day)} ${formatMaskPouchLine(warmth)}`;
}
