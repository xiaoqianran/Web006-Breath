/**
 * 饼干模与冷却架叙事（纯函数，可单测）
 * 压出形状再晾凉：不是定型强迫，是「让热也有地方慢慢退」。
 */

export function formatCookieCutterLine(day: number): string {
  if (day % 3 === 0) return "饼干模按下：边缘还带着一点粉的白。";
  if (day % 2 === 0) return "模很轻：只定形状，不定心情。";
  return "饼干模安静：专门给愿意把面也变成小形状的人。";
}

export function formatCoolingRackLine(warmth: number): string {
  if (warmth <= 0) return "冷却架还空：等第一份温存再搁第一片。";
  if (warmth < 12) return "网面微凉：像轻轻说「先放这里散一散」。";
  if (warmth < 24) return "冷却架接住刚出炉的热：像店把烫也摊开呼吸。";
  return "架与温存同透：晾了热，也不晾掉香。";
}

export function formatCutterAside(historyCount: number): string {
  if (historyCount <= 0) return "模还闲着：第一笔流通会留下第一枚形状。";
  if (historyCount < 20) return `约压过 ${historyCount} 枚小形：每一枚都是愿意被温柔定型的许可。`;
  return `逾 ${historyCount} 次压模：架上叠着被温柔晾过的热。`;
}

export function formatCutterEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好饼干模与冷却架：今天从愿意压一枚小形开始。";
  if (circulationsToday < 3) return "压模、入炉、晾凉：流通也是一种轻轻的定型。";
  return "忙完把模洗净——压完了，人也要松一松腕。";
}

export function formatCutterPair(day: number, warmth: number): string {
  return `${formatCookieCutterLine(day)} ${formatCoolingRackLine(warmth)}`;
}
