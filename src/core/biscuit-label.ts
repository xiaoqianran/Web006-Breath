/**
 * 饼干匣与糖勺叙事（纯函数，可单测）
 * 茶点不是主菜：是「先垫一口，再开口」的许可。
 */

export function formatBiscuitTinLine(day: number): string {
  if (day % 3 === 0) return "饼干匣盖子半开：里面有一点柠檬香。";
  if (day % 2 === 0) return "匣里还剩几块：够陪完今天的沉默。";
  return "饼干匣安静地坐在茶台旁：不催你，只等你伸手。";
}

export function formatSugarSpoonLine(warmth: number): string {
  if (warmth <= 0) return "糖勺还凉：等茶温起来再搅第一圈。";
  if (warmth < 12) return "糖勺边沿有细晶：甜意刚开始化开。";
  if (warmth < 24) return "糖勺在杯沿轻轻响：像一句「可以再慢一点」。";
  return "糖勺亮着：温存够了，甜也可以浅一点。";
}

export function formatBiscuitAside(isGift: boolean): string {
  if (isGift) return "赠予时多递一块饼干：让对方先有一点甜，再拆心情。";
  return "上架旁可放一枚小糖勺标签：路过的人会先笑一下。";
}

export function formatBiscuitEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先开匣闻一口：今天从一点点甜开始。";
  if (circulationsToday < 3) return "茶点在减，流通在增：刚好的节奏。";
  return "忙完也给自己留一块——店主也需要被甜到。";
}

export function formatBiscuitPair(day: number, warmth: number): string {
  return `${formatBiscuitTinLine(day)} ${formatSugarSpoonLine(warmth)}`;
}
