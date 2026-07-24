/**
 * 蜂蜡小烛与擦火条叙事（纯函数，可单测）
 * 点一盏：不是仪式做作，是「让一小圈暖也能被温柔地点起」。
 * 与 tealight-label / matchbox-label / waxseal 区分命名。
 */

export function formatBeeswaxTinLine(day: number): string {
  if (day % 3 === 0) return "蜂蜡小烛静放：烛面还带着一点蜜的光。";
  if (day % 2 === 0) return "烛很浅：只照一小圈，不刺眼。";
  return "蜂蜡烛安静：专门给愿意把暗也轻轻照亮的人。";
}

export function formatStrikeStripLine(warmth: number): string {
  if (warmth <= 0) return "擦火条还净：等第一份温存再划第一下。";
  if (warmth < 12) return "条面微糙：像轻轻说「划一下就好」。";
  if (warmth < 24) return "火柴擦过条面：像店把第一点暖也递进暗里。";
  return "条与温存同短：亮到了，也不灼人。";
}

export function formatBeeswaxAside(historyCount: number): string {
  if (historyCount <= 0) return "烛还新：第一笔流通会留下第一圈被点亮的蜜香。";
  if (historyCount < 20) return `约点过 ${historyCount} 次：每一次都是愿意被温柔照亮的许可。`;
  return `逾 ${historyCount} 次轻点：罐沿叠着被温柔给过的光。`;
}

export function formatBeeswaxEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好蜂蜡烛与擦火条：今天从愿意点一点暖开始。";
  if (circulationsToday < 3) return "开罐、轻划、点燃：流通也是一种轻轻的明灭。";
  return "忙完把条收好——点完了，人也要松一松肩。";
}

export function formatBeeswaxPair(day: number, warmth: number): string {
  return `${formatBeeswaxTinLine(day)} ${formatStrikeStripLine(warmth)}`;
}
