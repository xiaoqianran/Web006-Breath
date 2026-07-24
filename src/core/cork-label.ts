/**
 * 软木板与图钉叙事（纯函数，可单测）
 * 店事、小笺、订单条：可以钉住，也可以轻轻拔下。
 */

export function formatCorkBoardLine(day: number): string {
  if (day % 3 === 0) return "软木板换了一角干净区：今天的小笺会钉在这里。";
  if (day % 2 === 0) return "板上钉痕密密的：像一整季被接住的话。";
  return "软木板靠墙：不是公告栏，是「可以暂放」的地方。";
}

export function formatPushPinLine(historyCount: number): string {
  if (historyCount <= 0) return "图钉盒还满：第一张小笺会拿走第一枚。";
  if (historyCount < 20) return `约用过 ${historyCount} 枚图钉：板上晃着浅浅的金属光。`;
  return `逾 ${historyCount} 次钉住与拔下：板面记得所有来过的重量。`;
}

export function formatCorkAside(warmth: number): string {
  if (warmth <= 0) return "板面还凉：温存起来后再钉第一张。";
  if (warmth < 12) return "图钉边沿有一点暖：纸条不会轻易掉。";
  return "软木与温存同在：钉住的是心事，拔下的是释然。";
}

export function formatCorkEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理一理图钉：今天也会有人把话钉在这里。";
  if (circulationsToday < 3) return "钉上、取下：流通也是一种可逆的固定。";
  return "忙完把多余的钉收回盒——板面也需要喘气。";
}

export function formatCorkPair(day: number, historyCount: number): string {
  return `${formatCorkBoardLine(day)} ${formatPushPinLine(historyCount)}`;
}
