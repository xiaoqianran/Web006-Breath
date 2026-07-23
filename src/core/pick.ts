/** 数组选取工具 */

export function pickAt<T>(arr: readonly T[], index: number): T | undefined {
  if (index < 0 || index >= arr.length) return undefined;
  return arr[index];
}

export function firstOf<T>(arr: readonly T[]): T | undefined {
  return arr[0];
}

export function lastOf<T>(arr: readonly T[]): T | undefined {
  if (arr.length === 0) return undefined;
  return arr[arr.length - 1];
}
