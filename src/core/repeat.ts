/** 重复构造 */

export function repeatItem<T>(item: T, count: number): T[] {
  const n = Math.max(0, Math.floor(count));
  return Array.from({ length: n }, () => item);
}

export function times(count: number, fn: (i: number) => void): void {
  const n = Math.max(0, Math.floor(count));
  for (let i = 0; i < n; i++) fn(i);
}
