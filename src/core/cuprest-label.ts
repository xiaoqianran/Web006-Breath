/**
 * 杯托与茶巾叙事（纯函数，可单测）
 * 接住热杯：不是怕烫本身，是「让双手也有地方休息」。
 */

export function formatCupRestLine(day: number): string {
  if (day % 3 === 0) return "杯托垫好：木纹还带着一点掌温。";
  if (day % 2 === 0) return "托很稳：只接住杯，不接住慌。";
  return "杯托安静：专门给愿意让热也有落点的人。";
}

export function formatTeaClothLine(warmth: number): string {
  if (warmth <= 0) return "茶巾还叠着：等第一份温存再擦第一滴。";
  if (warmth < 12) return "巾角微潮：像轻轻说「洒了也没关系」。";
  if (warmth < 24) return "茶巾折在托旁：像店把失手也照顾进了准备。";
  return "巾与温存同软：擦过了，也不责备桌面。";
}

export function formatCuprestAside(historyCount: number): string {
  if (historyCount <= 0) return "托还空着：第一笔流通会留下第一杯的落点。";
  if (historyCount < 20) return `约托过 ${historyCount} 次热杯：每一次都是愿意被温柔接住的许可。`;
  return `逾 ${historyCount} 次落杯：托角叠着被温柔擦过的水痕。`;
}

export function formatCuprestEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好杯托与茶巾：今天从愿意接住一杯热开始。";
  if (circulationsToday < 3) return "垫托、折巾、递杯：流通也是一种轻轻的接住。";
  return "忙完把茶巾晾开——接完了，人也要松一松肩。";
}

export function formatCuprestPair(day: number, warmth: number): string {
  return `${formatCupRestLine(day)} ${formatTeaClothLine(warmth)}`;
}
