/**
 * 薄纱与别针叙事（纯函数，可单测）
 * 披一下：不是硬遮住，是「让眉眼也能被温柔地映软」。
 */

export function formatSoftVeilLine(day: number): string {
  if (day % 3 === 0) return "薄纱静放：纱沿还带着一点细的光。";
  if (day % 2 === 0) return "纱很轻：只映一点，不硬遮。";
  return "薄纱安静：专门给愿意把眉眼也温柔映软的人。";
}

export function formatVeilPinLine(warmth: number): string {
  if (warmth <= 0) return "别针还松：等第一份温存再轻轻别上。";
  if (warmth < 12) return "针微定：像轻轻说「披一下就好」。";
  if (warmth < 24) return "针带着纱：像店把散的光也映成安。";
  return "针与温存同软：披到了，也不闷。";
}

export function formatSoftveilAside(historyCount: number): string {
  if (historyCount <= 0) return "纱还齐：第一笔流通会留下第一记被温柔映过的光。";
  if (historyCount < 20) return `约披过 ${historyCount} 次：每一次都是愿意被温柔映软的许可。`;
  return `逾 ${historyCount} 次轻披：纱沿叠着被温柔映过的光。`;
}

export function formatSoftveilEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好薄纱与别针：今天从愿意轻轻映一下开始。";
  if (circulationsToday < 3) return "展纱、别针、轻披：流通也是一种轻轻的映软。";
  return "忙完把纱摘下——披完了，人也要松一松肩。";
}

export function formatSoftveilPair(day: number, warmth: number): string {
  return `${formatSoftVeilLine(day)} ${formatVeilPinLine(warmth)}`;
}
