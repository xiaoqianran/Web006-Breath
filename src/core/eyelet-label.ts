/**
 * 气眼与打孔钳叙事（纯函数，可单测）
 * 给页边一个可穿绳的洞：固定住，也能解开。
 */

export function formatEyeletLine(day: number): string {
  if (day % 3 === 0) return "气眼盒打开：浅铜与米白并排，像小星星。";
  if (day % 2 === 0) return "气眼扣紧了：页边有一个可穿绳的洞。";
  return "气眼安静：专门给需要被系住的边。";
}

export function formatEyeletPunchLine(warmth: number): string {
  if (warmth <= 0) return "打孔钳还凉：等第一份温存再打第一孔。";
  if (warmth < 12) return "钳口咬下轻轻一声：孔圆而干净。";
  if (warmth < 24) return "孔对齐了：绳穿过去，整本才连成一串。";
  return "钳与温存同在：固定住了，也仍可解开重系。";
}

export function formatEyeletAside(historyCount: number): string {
  if (historyCount <= 0) return "还没打孔：第一本串册会先要这一对圆洞。";
  if (historyCount < 20) return `约打过 ${historyCount} 对孔：每个洞都是一次愿意被系住的许可。`;
  return `逾 ${historyCount} 次打孔：钳口记得所有被串起的温柔。`;
}

export function formatEyeletEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先备好气眼：今天从愿意打一个圆孔开始。";
  if (circulationsToday < 3) return "打孔、扣眼、穿绳：流通也是一种可解的固定。";
  return "忙完把钳收好——孔打完了，人也要松一松手。";
}

export function formatEyeletPair(day: number, warmth: number): string {
  return `${formatEyeletLine(day)} ${formatEyeletPunchLine(warmth)}`;
}
