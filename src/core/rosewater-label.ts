/**
 * 花露水瓶与亚麻手帕叙事（纯函数，可单测）
 * 喷一点露、叠一方帕：不是仪式做作，是「让气味与触感都能轻轻擦过心口」。
 */

export function formatRoseWaterLine(day: number): string {
  if (day % 3 === 0) return "花露水瓶竖好：瓶里还漾着一点淡粉的光。";
  if (day % 2 === 0) return "露很淡：只润一层，不抢香。";
  return "花露瓶安静：专门给愿意把香也擦在腕上的人。";
}

export function formatLinenClothLine(warmth: number): string {
  if (warmth <= 0) return "亚麻手帕还叠着：等第一份温存再展开第一角。";
  if (warmth < 12) return "帕角微松：像轻轻说「擦一下就好」。";
  if (warmth < 24) return "手帕从叠好处展开：像店把清爽也递给皮肤。";
  return "帕与温存同轻：擦到了，也不用力。";
}

export function formatRosewaterAside(historyCount: number): string {
  if (historyCount <= 0) return "瓶还盖着：第一笔流通会留下第一滴被擦过的香。";
  if (historyCount < 20) return `约擦过 ${historyCount} 次：每一次都是愿意被温柔触碰的许可。`;
  return `逾 ${historyCount} 次轻擦：帕边叠着被温柔润过的香。`;
}

export function formatRosewaterEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好花露与手帕：今天从愿意擦一点清爽开始。";
  if (circulationsToday < 3) return "开瓶、轻喷、叠帕：流通也是一种轻轻的收拾。";
  return "忙完把手帕叠好——擦完了，人也要松一松肩。";
}

export function formatRosewaterPair(day: number, warmth: number): string {
  return `${formatRoseWaterLine(day)} ${formatLinenClothLine(warmth)}`;
}
