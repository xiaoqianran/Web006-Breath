/** 数值边界工具 */

export function clamp(n: number, min: number, max: number): number {
  if (min > max) {
    const t = min;
    min = max;
    max = t;
  }
  return Math.min(max, Math.max(min, n));
}

export function clampInt(n: number, min: number, max: number): number {
  return clamp(Math.round(n), min, max);
}
