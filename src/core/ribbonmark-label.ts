/**
 * 书签丝带与页角折叙事（纯函数，可单测）
 * 翻到一半也可以被温柔记住：夹一页，不必读完。
 */

export function formatBookmarkRibbonLine(day: number): string {
  if (day % 3 === 0) return "书签丝带垂在书口：像一条柔软的提醒。";
  if (day % 2 === 0) return "丝带换了浅杏：夹在页间，不伤纸。";
  return "书签丝带安静：专门给读到一半的人。";
}

export function formatPageDogearLine(warmth: number): string {
  if (warmth <= 0) return "页角还平：等第一份温存再折一个小小的记。";
  if (warmth < 12) return "折角很浅：只是记得，不必用力。";
  if (warmth < 24) return "页角微翘：像有人说「我还会回来」。";
  return "折与温存同浅：记住了，也仍可展开抚平。";
}

export function formatRibbonmarkAside(historyCount: number): string {
  if (historyCount <= 0) return "还没夹丝带：第一本被翻开的瞬间册会先要这一记。";
  if (historyCount < 20) return `约夹过 ${historyCount} 次书签：每次都是一次愿意中途停下的许可。`;
  return `逾 ${historyCount} 次夹记：丝带记得所有被温柔中断的阅读。`;
}

export function formatRibbonmarkEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好书签丝带：今天从允许读到一半开始。";
  if (circulationsToday < 3) return "夹带、折角、合上：流通也是一种可暂停。";
  return "忙完把丝带理顺——记完了，人也要合上一会儿。";
}

export function formatRibbonmarkPair(day: number, warmth: number): string {
  return `${formatBookmarkRibbonLine(day)} ${formatPageDogearLine(warmth)}`;
}
