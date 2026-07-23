/**
 * 客人姓名池（纯函数）：订单、再访、叙事共用。
 */

const POOL = [
  "林晚",
  "阿澄",
  "周予",
  "小满",
  "沈辞",
  "南枝",
  "陆安",
  "温叙",
  "禾",
  "棠",
  "予",
  "安",
  "疏",
  "汀",
  "涟",
  "澄",
  "满",
  "匿名",
] as const;

export function listGuestNames(): readonly string[] {
  return POOL;
}

export function guestNameCount(): number {
  return POOL.length;
}

/** 确定性取名：seed 映射到池内 */
export function pickGuestName(seed: number): string {
  const n = Math.abs(Math.floor(seed));
  return POOL[n % POOL.length]!;
}

export function isKnownGuestName(name: string): boolean {
  return (POOL as readonly string[]).includes(name);
}
