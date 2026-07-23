import { listEarnedUnlocks, type UnlockDef } from "./unlocks";
import type { GameState } from "./types";

/**
 * 比较前后状态，返回新获得的解锁（用于 toast）。
 */
export function newlyEarnedUnlocks(prev: GameState, next: GameState): UnlockDef[] {
  const before = new Set(listEarnedUnlocks(prev).map((u) => u.id));
  return listEarnedUnlocks(next).filter((u) => !before.has(u.id));
}
