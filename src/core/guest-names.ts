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
  "柏",
  "简",
  "暖",
  "陆",
  "阿初",
  "听雨",
  "暮山",
  "青禾",
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

/** 姓名气质短句（叙事用，纯函数） */
export function guestNameFlavor(name: string): string {
  if (name === "匿名") return "不愿留名的人，把故事轻轻放下。";
  if (name.length <= 1) return `${name}——名字很短，心事不一定短。`;
  if (name.includes("雨") || name.includes("晚") || name.includes("暮")) {
    return `${name}像傍晚的巷口，脚步声总是轻轻的。`;
  }
  if (name.includes("禾") || name.includes("棠") || name.includes("枝")) {
    return `${name}带着一点草木气，像刚从院子里走进来。`;
  }
  return `${name}推开了门，店铃记得这个名字。`;
}

export function formatGuestNameLine(name: string): string {
  return guestNameFlavor(name);
}
