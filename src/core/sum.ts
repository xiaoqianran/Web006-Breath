/** 数值累加 */

export function sumNumbers(values: readonly number[]): number {
  let s = 0;
  for (const v of values) {
    if (Number.isFinite(v)) s += v;
  }
  return s;
}

export function averageNumbers(values: readonly number[]): number {
  if (values.length === 0) return 0;
  return sumNumbers(values) / values.length;
}
