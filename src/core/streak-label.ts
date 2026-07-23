/**
 * 连心 streak 叙事文案（纯函数）
 */

export function streakRankTitle(streak: number): string {
  if (streak >= 6) return "心流不息";
  if (streak >= 4) return "连心正旺";
  if (streak >= 2) return "微微连心";
  if (streak >= 1) return "一缕连心";
  return "尚无连心";
}

export function formatStreakLine(streak: number): string {
  return `连心 ${streak} · ${streakRankTitle(streak)}`;
}

/** 下一连心叙事档 */
export function nextStreakThreshold(streak: number): number | null {
  const steps = [1, 2, 4, 6];
  for (const s of steps) {
    if (streak < s) return s;
  }
  return null;
}

export function formatStreakEncourage(streak: number): string {
  if (streak >= 6) return "连心已入佳境，继续温柔即可。";
  const next = nextStreakThreshold(streak);
  if (next == null) return formatStreakLine(streak);
  if (streak === 0) return "精致或珍稀流通可点燃连心。";
  return `${formatStreakLine(streak)}（再连 ${next - streak} 次更亮）`;
}
