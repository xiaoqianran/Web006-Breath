/**
 * 小酱油盅与醋碟叙事（纯函数，可单测）
 * 桌边两味：不是重口，是「让选择也轻轻摆在眼前」。
 */

export function formatSoyCruetLine(day: number): string {
  if (day % 3 === 0) return "小酱油盅摆正：盅口还带着一点深的亮。";
  if (day % 2 === 0) return "酱很浅：只点一下，不盖过本味。";
  return "酱油盅安静：专门给愿意把咸也放轻的人。";
}

export function formatVinegarDishLine(warmth: number): string {
  if (warmth <= 0) return "醋碟还空：等第一份温存再点第一滴。";
  if (warmth < 12) return "碟沿微酸：像轻轻说「想酸就蘸一点」。";
  if (warmth < 24) return "醋碟靠着盅旁：像店把选择也摆成温柔。";
  return "酸与温存同浅：醒了味，也不抢过香。";
}

export function formatSoycruetAside(historyCount: number): string {
  if (historyCount <= 0) return "盅碟还闲：第一笔流通会留下第一组轻味。";
  if (historyCount < 20) return `约摆过 ${historyCount} 组盅碟：每一组都是愿意被温柔选择的许可。`;
  return `逾 ${historyCount} 次点味：盅沿叠着被温柔摆过的选择。`;
}

export function formatSoycruetEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好酱油盅与醋碟：今天从愿意摆一点轻味开始。";
  if (circulationsToday < 3) return "摆盅、放碟、任选：流通也是一种轻轻的自由。";
  return "忙完把盅碟擦净——摆完了，人也要松一松肩。";
}

export function formatSoycruetPair(day: number, warmth: number): string {
  return `${formatSoyCruetLine(day)} ${formatVinegarDishLine(warmth)}`;
}
