/**
 * 温存档位叙事文案（纯函数，可单测）
 * 温存是情绪流通后店里积下的暖意，与口碑并列展示。
 */

/** 温存档位称号 */
export function warmthRankTitle(warmth: number): string {
  if (warmth >= 40) return "暖意成河";
  if (warmth >= 24) return "炉边常亮";
  if (warmth >= 12) return "掌心有暖";
  if (warmth >= 5) return "初有余温";
  if (warmth > 0) return "一点微光";
  return "尚待点燃";
}

export function formatWarmthLine(warmth: number): string {
  return `温存 ${warmth} · ${warmthRankTitle(warmth)}`;
}

/** 下一档温存门槛 */
export function nextWarmthThreshold(warmth: number): number | null {
  const steps = [1, 5, 12, 24, 40];
  for (const s of steps) {
    if (warmth < s) return s;
  }
  return null;
}

export function formatWarmthProgress(warmth: number): string {
  const next = nextWarmthThreshold(warmth);
  if (next == null) return formatWarmthLine(warmth) + "（已达最高叙事档）";
  return `${formatWarmthLine(warmth)}（距「${warmthRankTitle(next)}」还差 ${next - warmth}）`;
}

/** 温存鼓励短句（HUD / 读屏） */
export function formatWarmthEncourage(warmth: number): string {
  if (warmth >= 40) return "店里的暖意已成河，来往的人都会被轻轻接住。";
  if (warmth >= 24) return "炉火常亮，熟客会记得这间铺子的温度。";
  if (warmth >= 12) return "掌心有暖，再流通几份，余温会更稳。";
  if (warmth >= 5) return "初有余温，继续接待与赠予，暖意会慢慢攒下。";
  if (warmth > 0) return "一点微光已点着，下一次流通会让它更亮。";
  return "温存尚待点燃：完成一次流通，店里会亮起第一缕暖。";
}
