/** 轻量 id 生成（非加密安全，仅游戏内用） */

export function makeId(prefix: string): string {
  const p = prefix.replace(/[^a-zA-Z0-9_-]/g, "") || "id";
  return `${p}_${Math.random().toString(36).slice(2, 10)}`;
}

export function isGameId(id: string): boolean {
  return typeof id === "string" && id.length >= 3 && id.length <= 64;
}
