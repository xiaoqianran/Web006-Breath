/**
 * 补衣蛋与针线册叙事（纯函数，可单测）
 * 破口可以补：不是遮丑，是让布重新能用。
 */

export function formatDarningEggLine(day: number): string {
  if (day % 3 === 0) return "补衣蛋托在掌心：破口被撑圆，线才好走。";
  if (day % 2 === 0) return "木蛋边沿有细痕：补过不止一只袖口。";
  return "补衣蛋安静：先把洞撑住，再一针一针收。";
}

export function formatNeedleBookLine(historyCount: number): string {
  if (historyCount <= 0) return "针线册还合着：第一根针会插进第一页。";
  if (historyCount < 20) return `册页里约有 ${historyCount} 处针眼：像一本小小的店志。`;
  return `逾 ${historyCount} 次取针还针：册页鼓鼓的，全是补过的痕迹。`;
}

export function formatDarnAside(warmth: number): string {
  if (warmth <= 0) return "木蛋还凉：温存起来再补第一处破口。";
  if (warmth < 12) return "针脚还疏：破口在合拢，心也跟着收一点。";
  if (warmth < 24) return "补丁与底布同色调：修好了，也不必假装没破过。";
  return "蛋与温存同在：破过，也可以重新完整。";
}

export function formatDarnEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先打开针线册：今天从愿意补一针开始。";
  if (circulationsToday < 3) return "撑住、缝住：流通也是一种修补。";
  return "忙完把针收回册里——破口补完，人也要歇。";
}

export function formatDarnPair(day: number, historyCount: number): string {
  return `${formatDarningEggLine(day)} ${formatNeedleBookLine(historyCount)}`;
}
