/**
 * 情绪强度叙事文案（纯函数，可单测）
 * intensity 约定 1–5
 */

export function intensityRankTitle(intensity: number): string {
  const n = Math.round(intensity);
  if (n >= 5) return "几乎满溢";
  if (n >= 4) return "很重";
  if (n >= 3) return "中等起伏";
  if (n >= 2) return "轻轻一触";
  return "如羽毛";
}

export function formatIntensityLine(intensity: number): string {
  const n = Math.min(5, Math.max(1, Math.round(intensity)));
  return `强度 ${n}/5 · ${intensityRankTitle(n)}`;
}

/** 强度对形态选择的温和建议（非强制） */
export function intensityCraftHint(intensity: number): string {
  const n = Math.round(intensity);
  if (n >= 5) return "这份心情很满，适合更稳妥的容器慢慢托住。";
  if (n >= 4) return "情绪偏重，细心匹配会更贴。";
  if (n <= 1) return "很轻的一缕，素简形态也足够温柔。";
  return "中等强度，随心选择即可。";
}
