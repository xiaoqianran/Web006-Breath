/**
 * 衣帽钩与围巾架叙事（纯函数，可单测）
 * 门口一排钩子：把外面的风先挂住，再进店说话。
 */

export function formatCoatHookLine(queueLength: number): string {
  if (queueLength <= 0) return "衣帽钩空着几格：风还在门外等。";
  if (queueLength === 1) return "钩上多了一件外套：有人把外面的急先挂住了。";
  return `钩上约有 ${queueLength} 件心情的重量——先挂好，再慢慢解。`;
}

export function formatScarfRackLine(day: number): string {
  if (day % 3 === 0) return "围巾架上那条浅杏：像谁昨天留下的余温。";
  if (day % 2 === 0) return "围巾叠成软软一叠，颜色比天气更暖一点。";
  return "围巾架不催人：需要时再取一条围上。";
}

export function formatHookAside(warmth: number): string {
  if (warmth <= 0) return "钩子还凉：第一份流通会把金属也捂热。";
  if (warmth < 12) return "钩子与温存一起亮起来：门口开始像家。";
  return "衣帽钩记着来过的人：空出来的格，也是一种温柔。";
}

export function formatCoatEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先把店门边的钩子理一理：客人会知道这里可以卸下。";
  if (circulationsToday < 3) return "挂上、取下：每一次流通都像帮人把外套扣好。";
  return "忙完也记得挂好自己的那一件——店主也需要被接住。";
}

export function formatHookPair(queueLength: number, day: number): string {
  return `${formatCoatHookLine(queueLength)} ${formatScarfRackLine(day)}`;
}
