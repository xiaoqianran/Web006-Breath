/**
 * 半指软织手套与瓷碟叙事（纯函数，可单测）
 * 戴一双：不是怕冷说教，是「让指尖仍可触碰时，掌心也被温柔捂住」。
 * 与 softmitten-label（连指）区分命名。
 */

export function formatFingerlessGloveLine(day: number): string {
  if (day % 3 === 0) return "半指软织手套叠好：腕口还带着一点暖的绒。";
  if (day % 2 === 0) return "套很薄：只捂掌心，不挡指尖。";
  return "半指手套安静：专门给愿意边写边暖手的人。";
}

export function formatGloveDishLine(warmth: number): string {
  if (warmth <= 0) return "瓷手套碟还空：等第一份温存再放第一双。";
  if (warmth < 12) return "碟沿微润：像轻轻说「放这里就好」。";
  if (warmth < 24) return "手套落入瓷碟：像店把掌心的暖也留给写字的人。";
  return "碟与温存同浅：接住了，也不压扁绒。";
}

export function formatFingerlessAside(historyCount: number): string {
  if (historyCount <= 0) return "套还叠着：第一笔流通会留下第一双被戴过的暖。";
  if (historyCount < 20) return `约递过 ${historyCount} 次：每一次都是愿意被温柔捂掌的许可。`;
  return `逾 ${historyCount} 次轻递：碟沿叠着被温柔戴过的绒。`;
}

export function formatFingerlessEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好半指手套与瓷碟：今天从愿意捂一点掌心开始。";
  if (circulationsToday < 3) return "取套、轻戴、放回：流通也是一种轻轻的护掌。";
  return "忙完把碟理齐——递完了，人也要松一松腕。";
}

export function formatFingerlessPair(day: number, warmth: number): string {
  return `${formatFingerlessGloveLine(day)} ${formatGloveDishLine(warmth)}`;
}
