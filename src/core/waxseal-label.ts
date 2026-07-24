/**
 * 火漆与封缄勺叙事（纯函数，可单测）
 * 成册之后盖一印：不是锁死，是郑重地把温柔递出。
 */

export function formatSealingWaxLine(day: number): string {
  if (day % 3 === 0) return "火漆棒换了胭脂色：滴下时像一滴安静的句号。";
  if (day % 2 === 0) return "蜡盘边有冷凝的边：刚封过谁的瞬间册。";
  return "火漆安静：下一本成册会盖上这一枚郑重。";
}

export function formatWaxSpoonLine(warmth: number): string {
  if (warmth <= 0) return "封缄勺还凉：等第一份温存再熔第一滴蜡。";
  if (warmth < 12) return "勺里蜡液微亮：温度刚好，不烫手也不太稠。";
  if (warmth < 24) return "蜡滴落下成圆：印下去之前，先停一停。";
  return "勺与温存同亮：封上了，也仍可被郑重打开。";
}

export function formatWaxsealAside(historyCount: number): string {
  if (historyCount <= 0) return "还没盖印：第一本递出的瞬间册会先要这一滴蜡。";
  if (historyCount < 20) return `约封过 ${historyCount} 本：每枚印都是一次愿意郑重的许可。`;
  return `逾 ${historyCount} 次封缄：蜡面记得所有被郑重递出的温柔。`;
}

export function formatWaxsealEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先备好火漆：今天从愿意盖一枚郑重开始。";
  if (circulationsToday < 3) return "熔蜡、滴圆、压印：流通也是一种封缄。";
  return "忙完把勺擦净——封完了，人也要松一松肩。";
}

export function formatWaxsealPair(day: number, warmth: number): string {
  return `${formatSealingWaxLine(day)} ${formatWaxSpoonLine(warmth)}`;
}
