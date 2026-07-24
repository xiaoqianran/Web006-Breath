/**
 * 顶针与针垫叙事（纯函数，可单测）
 * 细活需要护手：把「愿意仔细」写成可触碰的小物。
 */

export function formatThimbleLine(day: number): string {
  if (day % 3 === 0) return "顶针套在指腹：今天的针脚会更稳一点。";
  if (day % 2 === 0) return "铜顶针有一点旧光：像被很多人借过的勇气。";
  return "顶针安静：护住指尖，也护住不急的心。";
}

export function formatPincushionLine(historyCount: number): string {
  if (historyCount <= 0) return "针垫还空着针眼：第一针会留下第一颗星。";
  if (historyCount < 15) return `针垫上约有 ${historyCount} 处细孔：像未说完的点点。`;
  return `逾 ${historyCount} 次落针：垫面鼓鼓的，全是认真过的痕迹。`;
}

export function formatThimbleAside(warmth: number): string {
  if (warmth <= 0) return "顶针还凉：温存起来后再戴上。";
  if (warmth < 12) return "指腹隔着铜片：刺不会直接碰到脆弱。";
  return "顶针与温存同在：细活也可以不疼。";
}

export function formatThimbleEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先戴上顶针：今天的第一针从护住自己开始。";
  if (circulationsToday < 3) return "缝一针、停一针：流通也是一种可慢的手艺。";
  return "忙完把针收回垫上——指尖也需要被接住。";
}

export function formatThimblePair(day: number, historyCount: number): string {
  return `${formatThimbleLine(day)} ${formatPincushionLine(historyCount)}`;
}
