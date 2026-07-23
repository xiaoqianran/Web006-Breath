import type { CirculationRecord, GameState } from "./types";

/** 客人对店的好感：按 guestName 累计 */
export type FavorMap = Record<string, number>;

export function extractGuestFromMoment(card: string): string {
  const m = card.match(/^(.+?)的心情/);
  return m?.[1] ?? "匿名";
}

export function favorDeltaForRecord(record: CirculationRecord): number {
  let d = record.item.quality === "rare" ? 3 : record.item.quality === "fine" ? 2 : 1;
  if (record.action === "gift") d += 1;
  return d;
}

export function rebuildFavorMap(history: CirculationRecord[]): FavorMap {
  const map: FavorMap = {};
  for (const r of history) {
    const name = extractGuestFromMoment(r.momentCard);
    map[name] = (map[name] ?? 0) + favorDeltaForRecord(r);
  }
  return map;
}

export function topFavoredGuests(state: GameState, limit = 3): { name: string; favor: number }[] {
  const map = rebuildFavorMap(state.history);
  return Object.entries(map)
    .map(([name, favor]) => ({ name, favor }))
    .sort((a, b) => b.favor - a.favor)
    .slice(0, limit);
}
