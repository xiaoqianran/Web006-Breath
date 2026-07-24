/**
 * 圆角器与护角叙事（纯函数，可单测）
 * 边角也可以被温柔对待：削去锋利，留下可触摸的圆。
 */

export function formatCornerRounderLine(day: number): string {
  if (day % 3 === 0) return "圆角器咬下小小一角：锋利变成可触摸的弧。";
  if (day % 2 === 0) return "刃口有细屑：刚修过谁的封面四角。";
  return "圆角器安静：专门照顾那些容易扎手的边。";
}

export function formatCornerGuardLine(warmth: number): string {
  if (warmth <= 0) return "护角还凉：等第一份温存再贴上第一只角。";
  if (warmth < 12) return "护角贴上后微微亮：边角被保护，也更耐翻。";
  if (warmth < 24) return "四角都稳了：翻开合上，都不易起毛。";
  return "护角与温存同在：边角圆了，心也少一分刺。";
}

export function formatCornerAside(historyCount: number): string {
  if (historyCount <= 0) return "角还方着：第一本成册会先修这四个尖。";
  if (historyCount < 20) return `约修过 ${historyCount} 本四角：每个弧都是一次愿意不扎人的许可。`;
  return `逾 ${historyCount} 次修角：刃口记得所有被磨圆的温柔。`;
}

export function formatCornerEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先检查圆角器：今天从愿意把边角变软开始。";
  if (circulationsToday < 3) return "修角、贴护、压平：流通也是一种去锋利。";
  return "忙完把护角收好——边圆了，人也要松一松肩。";
}

export function formatCornerPair(day: number, warmth: number): string {
  return `${formatCornerRounderLine(day)} ${formatCornerGuardLine(warmth)}`;
}
