/**
 * 小木梯与高架叙事（纯函数，可单测）
 * 够不着的货架也要温柔：梯子是「愿意多走一步」的姿态。
 */

export function formatStepLadderLine(day: number): string {
  if (day % 3 === 0) return "小木梯靠在墙边：今天可能要够高处的那一层。";
  if (day % 2 === 0) return "梯子第三级有一点磨亮：有人常踩上去取心。";
  return "木梯很轻：搬动时几乎不响，像怕惊动店里的静。";
}

export function formatHighShelfLine(shelfCount: number): string {
  if (shelfCount <= 0) return "高架还空着：第一件成品会先放在够得着的地方。";
  if (shelfCount < 3) return `高架上有 ${shelfCount} 件温柔，不必踮脚也能看见标签。`;
  return `高架约 ${shelfCount} 件：梯子在，就没有「太高」的心情。`;
}

export function formatLadderAside(warmth: number): string {
  if (warmth <= 0) return "梯子还凉：温存起来后再爬第一级。";
  if (warmth < 12) return "踩上第一级时，店顶的光会近一点。";
  return "梯子与温存同在：够得着的，不只是货架。";
}

export function formatLadderEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先检查梯子稳不稳：今天也会有人需要你多走一步。";
  if (circulationsToday < 3) return "上上下下几次：腿酸一点，故事却更近。";
  return "忙完把梯子收回墙边：也记得让自己下得来。";
}

export function formatLadderPair(day: number, shelfCount: number): string {
  return `${formatStepLadderLine(day)} ${formatHighShelfLine(shelfCount)}`;
}
