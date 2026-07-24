/**
 * 淬火碗与钢砧叙事（纯函数，可单测）
 * 淬一下：不是急着定硬，是「让热丝也能被温柔地定住」。
 */

export function formatQuenchBowlLine(day: number): string {
  if (day % 3 === 0) return "淬火碗静放：水沿还带着一点凉的静。";
  if (day % 2 === 0) return "水很清：只淬一下，不硬甩。";
  return "淬火碗安静：专门给愿意把热丝也轻轻定住的人。";
}

export function formatSteelBlockLine(warmth: number): string {
  if (warmth <= 0) return "钢砧还冷：等第一份温存再敲第一下。";
  if (warmth < 12) return "面微稳：像轻轻说「定一下就好」。";
  if (warmth < 24) return "丝贴着面：像店把热丝也定成稳。";
  return "砧与温存同软：定到了，也不伤丝。";
}

export function formatSoftquenchAside(historyCount: number): string {
  if (historyCount <= 0) return "碗还满：第一笔流通会留下第一下被淬过的静。";
  if (historyCount < 20) return `约淬过 ${historyCount} 次：每一次都是愿意被温柔定住的许可。`;
  return `逾 ${historyCount} 次轻淬：水沿叠着被温柔浸过的丝。`;
}

export function formatSoftquenchEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好淬火碗与钢砧：今天从愿意定一点热丝开始。";
  if (circulationsToday < 3) return "取碗、轻淬、再定：流通也是一种轻轻的定住。";
  return "忙完把碗放好——淬完了，人也要松一松腕。";
}

export function formatSoftquenchPair(day: number, warmth: number): string {
  return `${formatQuenchBowlLine(day)} ${formatSteelBlockLine(warmth)}`;
}
