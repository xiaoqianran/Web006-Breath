/**
 * 餐垫与筷枕叙事（纯函数，可单测）
 * 桌面先铺一层：不是正餐规格，是「让摆放也有边界的温柔」。
 */

export function formatPlaceMatLine(day: number): string {
  if (day % 3 === 0) return "餐垫铺开：布纹还带着一点熨过的平。";
  if (day % 2 === 0) return "垫很方：只框住桌面，不框住人。";
  return "餐垫安静：专门给愿意把桌也收拾干净的人。";
}

export function formatChopstickRestLine(warmth: number): string {
  if (warmth <= 0) return "筷枕还空：等第一份温存再搁第一双。";
  if (warmth < 12) return "枕面微凉：像轻轻说「先放这里」。";
  if (warmth < 24) return "筷枕托住筷尖：像店把分寸也摆在桌上。";
  return "枕与温存同小：托住了，也不显得拘束。";
}

export function formatPlacematAside(historyCount: number): string {
  if (historyCount <= 0) return "垫还卷着：第一笔流通会留下第一方铺开的桌。";
  if (historyCount < 20) return `约铺过 ${historyCount} 方餐垫：每一方都是愿意被温柔框住的许可。`;
  return `逾 ${historyCount} 次摆桌：垫角叠着被温柔铺过的边界。`;
}

export function formatPlacematEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好餐垫与筷枕：今天从愿意铺一方桌开始。";
  if (circulationsToday < 3) return "铺垫、搁枕、摆好：流通也是一种轻轻的分寸。";
  return "忙完把垫叠整齐——铺完了，人也要松一松肩。";
}

export function formatPlacematPair(day: number, warmth: number): string {
  return `${formatPlaceMatLine(day)} ${formatChopstickRestLine(warmth)}`;
}
