/**
 * 滚刀与软裁垫叙事（纯函数，可单测）
 * 滚一刀：不是粗暴分割，是「让布边也能被温柔地切开」。
 * 与 shears-label / matcut-label 区分命名。
 */

export function formatRotaryCutterLine(day: number): string {
  if (day % 3 === 0) return "滚刀静放：刀轮还亮着一点圆的光。";
  if (day % 2 === 0) return "刀很轻：只滚一痕，不撕扯。";
  return "滚刀安静：专门给愿意把布边也轻轻切开的人。";
}

export function formatSoftCutMatLine(warmth: number): string {
  if (warmth <= 0) return "软裁垫还净：等第一份温存再铺第一层。";
  if (warmth < 12) return "垫面微平：像轻轻说「滚这里就好」。";
  if (warmth < 24) return "刀轮过垫：像店把整齐也递给布边。";
  return "垫与温存同软：切到了，也不伤桌。";
}

export function formatRotarycutAside(historyCount: number): string {
  if (historyCount <= 0) return "垫还空着：第一笔流通会留下第一痕被切开的边。";
  if (historyCount < 20) return `约滚过 ${historyCount} 次：每一次都是愿意被温柔切开的许可。`;
  return `逾 ${historyCount} 次轻滚：垫沿叠着被温柔切过的痕。`;
}

export function formatRotarycutEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好滚刀与软裁垫：今天从愿意切一点边开始。";
  if (circulationsToday < 3) return "铺垫、轻滚、收刀：流通也是一种轻轻的分割。";
  return "忙完把刀收好——滚完了，人也要松一松腕。";
}

export function formatRotarycutPair(day: number, warmth: number): string {
  return `${formatRotaryCutterLine(day)} ${formatSoftCutMatLine(warmth)}`;
}
