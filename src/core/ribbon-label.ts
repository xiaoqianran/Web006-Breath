/**
 * 丝带卷与剪线头叙事（纯函数，可单测）
 * 包装不是多余：是把心意绑成「可以带走」的形状。
 */

export function formatRibbonSpoolLine(day: number): string {
  if (day % 3 === 0) return "丝带卷换了浅杏：今天的结会更软一点。";
  if (day % 2 === 0) return "柜上丝带卷像小小的彩虹：随手可抽一条。";
  return "丝带卷静静转着：下一份礼物会从这里开始。";
}

export function formatSnipThreadLine(historyCount: number): string {
  if (historyCount <= 0) return "剪线头还干净：第一份包装会留下第一截。";
  if (historyCount < 15) return `剪线头匣里约有 ${historyCount} 截碎彩，像未说完的附言。`;
  return `逾 ${historyCount} 次包装的线头：匣子鼓鼓的，温柔也堆叠着。`;
}

export function formatRibbonAside(isGift: boolean): string {
  if (isGift) return "赠予时多绕一圈丝带：让对方解开时也有仪式。";
  return "上架时留一截可抽的丝带头：路过的人会想轻轻一拉。";
}

export function formatRibbonEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好丝带卷：第一结会决定今天的手感。";
  if (circulationsToday < 3) return "打结、剪断、再打结：流通也是一种手作。";
  return "忙完把线头收进匣：也给自己的袖口理一理。";
}

export function formatRibbonPair(day: number, historyCount: number): string {
  return `${formatRibbonSpoolLine(day)} ${formatSnipThreadLine(historyCount)}`;
}
