/**
 * 口碑档位文案（纯函数）
 */

export function reputationRankTitle(reputation: number): string {
  if (reputation >= 20) return "街角灯塔";
  if (reputation >= 12) return "口碑小铺";
  if (reputation >= 6) return "被记得的店";
  if (reputation >= 2) return "初有人知";
  return "静静开张";
}

export function formatReputationLine(reputation: number): string {
  return `口碑 ${reputation} · ${reputationRankTitle(reputation)}`;
}

/** 下一档口碑门槛 */
export function nextReputationThreshold(reputation: number): number | null {
  const steps = [2, 6, 12, 20];
  for (const s of steps) {
    if (reputation < s) return s;
  }
  return null;
}

export function formatReputationProgress(reputation: number): string {
  const next = nextReputationThreshold(reputation);
  if (next == null) return formatReputationLine(reputation) + "（已达最高叙事档）";
  return `${formatReputationLine(reputation)}（距「${reputationRankTitle(next)}」还差 ${next - reputation}）`;
}
