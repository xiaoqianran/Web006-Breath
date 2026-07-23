/** 布尔辅助 */

export function allTrue(flags: readonly boolean[]): boolean {
  for (const f of flags) {
    if (!f) return false;
  }
  return true;
}

export function anyTrue(flags: readonly boolean[]): boolean {
  for (const f of flags) {
    if (f) return true;
  }
  return false;
}

export function countTrue(flags: readonly boolean[]): number {
  let n = 0;
  for (const f of flags) if (f) n += 1;
  return n;
}
