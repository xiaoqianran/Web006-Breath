/** 简单分组 */

export function groupByKey<T>(items: readonly T[], keyFn: (item: T) => string): Record<string, T[]> {
  const out: Record<string, T[]> = {};
  for (const item of items) {
    const k = keyFn(item);
    const bucket = out[k] ?? (out[k] = []);
    bucket.push(item);
  }
  return out;
}
