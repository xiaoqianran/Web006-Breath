/**
 * 货架状态文案（纯函数）
 */
import type { GameState } from "./types";
import { SHELF_CAPACITY } from "./game";

export function shelfOccupancy(state: Pick<GameState, "shelf">): {
  used: number;
  capacity: number;
  free: number;
  full: boolean;
} {
  const used = state.shelf?.length ?? 0;
  const capacity = SHELF_CAPACITY;
  return {
    used,
    capacity,
    free: Math.max(0, capacity - used),
    full: used >= capacity,
  };
}

export function formatShelfLine(state: Pick<GameState, "shelf">): string {
  const o = shelfOccupancy(state);
  if (o.used === 0) return `货架空着（容量 ${o.capacity}）`;
  if (o.full) return `货架已满 ${o.used}/${o.capacity}，最早的温柔可能被收起`;
  return `货架 ${o.used}/${o.capacity}（还可上架 ${o.free}）`;
}
