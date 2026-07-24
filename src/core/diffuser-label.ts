/**
 * 香薰瓶与藤条叙事（纯函数，可单测）
 * 插几根条：不是浓香轰炸，是「让空气也接到可慢慢散开的温柔」。
 */

export function formatDiffuserBottleLine(day: number): string {
  if (day % 3 === 0) return "香薰瓶立稳：瓶里还漾着一点琥珀的光。";
  if (day % 2 === 0) return "液很淡：只润空气，不抢鼻。";
  return "香薰瓶安静：专门给愿意把香也慢慢散开的人。";
}

export function formatRattanReedLine(warmth: number): string {
  if (warmth <= 0) return "藤条还干：等第一份温存再插第一根。";
  if (warmth < 12) return "条端微润：像轻轻说「插两三根就好」。";
  if (warmth < 24) return "藤条从瓶口抽出：像店把香气也递给整间店。";
  return "条与温存同细：散到了，也不呛人。";
}

export function formatDiffuserAside(historyCount: number): string {
  if (historyCount <= 0) return "瓶还空着：第一笔流通会留下第一缕被散开的香。";
  if (historyCount < 20) return `约换过 ${historyCount} 次条：每一次都是愿意被温柔环绕的许可。`;
  return `逾 ${historyCount} 次轻插：条上叠着被温柔散过的香。`;
}

export function formatDiffuserEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好香薰瓶与藤条：今天从愿意散一点香开始。";
  if (circulationsToday < 3) return "开瓶、插条、翻转：流通也是一种轻轻的弥漫。";
  return "忙完把条翻转——散完了，人也要松一松肩。";
}

export function formatDiffuserPair(day: number, warmth: number): string {
  return `${formatDiffuserBottleLine(day)} ${formatRattanReedLine(warmth)}`;
}
