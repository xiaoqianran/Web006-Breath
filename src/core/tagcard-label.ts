/**
 * 温言小卡与细线叙事（纯函数，可单测）
 * 打包之外再塞一张小卡：不是广告语，是「路上也能想起的一句」。
 */

export function formatWarmTagCardLine(day: number): string {
  if (day % 3 === 0) return "温言小卡抽出：纸面还带着指尖的温。";
  if (day % 2 === 0) return "卡上字很浅：只写一句，够走很远。";
  return "小卡安静：专门给愿意在袋里多留一句的人。";
}

export function formatFineStringLine(warmth: number): string {
  if (warmth <= 0) return "细线还松：等第一份温存再穿第一孔。";
  if (warmth < 12) return "线穿卡角：像轻轻别住一句还没说完的话。";
  if (warmth < 24) return "细线绕过卡孔：像店悄悄说「记得慢一点」。";
  return "线与温存同细：卡住了，也不勒住余白。";
}

export function formatTagcardAside(historyCount: number): string {
  if (historyCount <= 0) return "卡还没写：第一笔流通会留下第一张温言。";
  if (historyCount < 20) return `约写过 ${historyCount} 张小卡：每张都是一次愿意被想起的许可。`;
  return `逾 ${historyCount} 张小卡：抽屉里叠着被温柔写过的离别句。`;
}

export function formatTagcardEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好小卡：今天从愿意写下一句温言开始。";
  if (circulationsToday < 3) return "写卡、穿线、塞袋：流通也是一种轻轻的叮嘱。";
  return "忙完把细线理顺——卡写完了，人也要松一松腕。";
}

export function formatTagcardPair(day: number, warmth: number): string {
  return `${formatWarmTagCardLine(day)} ${formatFineStringLine(warmth)}`;
}
