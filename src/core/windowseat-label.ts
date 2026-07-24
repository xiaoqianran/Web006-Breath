/**
 * 窗边软垫与薄窗帘叙事（纯函数，可单测）
 * 坐在光边：不是看街本身，是「让人有地方把心放软」。
 */

export function formatWindowCushionLine(day: number): string {
  if (day % 3 === 0) return "窗边软垫拍松：布面还带着一点阳光的温。";
  if (day % 2 === 0) return "垫很软：只接住坐着的人，不接住外面的吵。";
  return "软垫安静：专门给愿意在光边坐一会儿的人。";
}

export function formatSheerCurtainLine(warmth: number): string {
  if (warmth <= 0) return "薄窗帘还垂着：等第一份温存再掀第一角。";
  if (warmth < 12) return "纱边微晃：像轻轻说「光可以进来」。";
  if (warmth < 24) return "薄窗帘半拉开：像店把街景也过滤得柔一点。";
  return "纱与温存同薄：透进了光，也不刺到眼。";
}

export function formatWindowseatAside(historyCount: number): string {
  if (historyCount <= 0) return "垫还空着：第一笔流通会留下第一段窗边的坐。";
  if (historyCount < 20) return `约坐过 ${historyCount} 次窗边：每一次都是愿意被光温柔碰见的许可。`;
  return `逾 ${historyCount} 次窗坐：垫角叠着被温柔滤过的街光。`;
}

export function formatWindowseatEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好窗垫与薄帘：今天从愿意在光边坐一会儿开始。";
  if (circulationsToday < 3) return "拍垫、掀帘、请坐：流通也是一种轻轻的落座。";
  return "忙完把薄帘理顺——坐完了，人也要松一松肩。";
}

export function formatWindowseatPair(day: number, warmth: number): string {
  return `${formatWindowCushionLine(day)} ${formatSheerCurtainLine(warmth)}`;
}
