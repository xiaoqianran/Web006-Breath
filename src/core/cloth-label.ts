/**
 * 装帧布与书脊条叙事（纯函数，可单测）
 * 外壳也是温柔：把散页收成可以递出的一册。
 */

export function formatBookclothLine(day: number): string {
  if (day % 3 === 0) return "装帧布换了浅杏麻：摸上去像午后的桌布。";
  if (day % 2 === 0) return "布边裁得很齐：外壳先稳，内页才敢贴紧。";
  return "装帧布卷着：下一本瞬间册会穿上这层外衣。";
}

export function formatSpineStripLine(warmth: number): string {
  if (warmth <= 0) return "书脊条还硬：等第一份温存再弯出弧度。";
  if (warmth < 12) return "脊条贴上后微微拱：像一本会呼吸的小书。";
  if (warmth < 24) return "书脊立得住：翻开时有轻轻的开合声。";
  return "脊与温存同立：外壳护住内页，也护住可被翻阅的心。";
}

export function formatClothAside(historyCount: number): string {
  if (historyCount <= 0) return "布还没裁：第一本外壳会先量好尺寸。";
  if (historyCount < 20) return `约包过 ${historyCount} 本外壳：每本都是一次愿意被递出的许可。`;
  return `逾 ${historyCount} 次装帧：布面记得所有被护住的温柔。`;
}

export function formatClothEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先展开装帧布：今天从愿意给故事一件外衣开始。";
  if (circulationsToday < 3) return "裁布、贴脊、压平：流通也是一种装帧。";
  return "忙完把布卷好——外壳包完，人也要收一收。";
}

export function formatClothPair(day: number, warmth: number): string {
  return `${formatBookclothLine(day)} ${formatSpineStripLine(warmth)}`;
}
