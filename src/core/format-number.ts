/** 展示用数字格式 */

export function formatInt(n: number): string {
  if (!Number.isFinite(n)) return "0";
  return String(Math.trunc(n));
}

export function formatRatioPercent(ratio: number, digits = 0): string {
  if (!Number.isFinite(ratio)) return "0%";
  const p = Math.max(0, Math.min(1, ratio)) * 100;
  return p.toFixed(digits) + "%";
}
