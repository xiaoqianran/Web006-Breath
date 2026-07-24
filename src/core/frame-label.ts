/**
 * 画框与挂绳叙事（纯函数，可单测）
 * 把「画」形态与货架展示连成可挂起的温柔。
 */

export function formatPictureFrameLine(day: number): string {
  if (day % 3 === 0) return "画框边沿擦过一遍：浅木纹把光接住了。";
  if (day % 2 === 0) return "空框斜靠墙：等第一幅心情被放进去。";
  return "画框安静：不是框住完美，是给情绪一个边界。";
}

export function formatHangingCordLine(shelfCount: number): string {
  if (shelfCount <= 0) return "挂绳还卷着：货架空时，绳也不急着绷直。";
  if (shelfCount < 3) return `挂绳上约有 ${shelfCount} 件可取下的温柔，轻轻一抽就晃。`;
  return `逾 ${shelfCount} 件挂着：绳上全是来过的人留下的重量。`;
}

export function formatFrameAside(warmth: number): string {
  if (warmth <= 0) return "框还凉：第一份流通会把木纹焐暖。";
  if (warmth < 12) return "框内空白开始发光：像等人把句子填上。";
  if (warmth < 24) return "挂绳与温存同在：成品被看见，也敢被取走。";
  return "框与绳都稳着：即使打烊，墙上的温柔还在。";
}

export function formatFrameEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好挂绳：今天的第一幅会挂得端正。";
  if (circulationsToday < 3) return "挂上、取下：每一次流通都像给画换一次光。";
  return "忙完也望一眼空框——店主也可以把自己放进温柔里。";
}

export function formatFramePair(day: number, shelfCount: number): string {
  return `${formatPictureFrameLine(day)} ${formatHangingCordLine(shelfCount)}`;
}
