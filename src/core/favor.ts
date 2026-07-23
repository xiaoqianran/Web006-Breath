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

/** 好感档位称号（纯函数，可单测） */
export function favorRankTitle(favor: number): string {
  if (favor >= 12) return "知心故人";
  if (favor >= 7) return "熟客";
  if (favor >= 3) return "面熟";
  if (favor > 0) return "初见";
  return "未识";
}

export function formatFavorLine(entry: { name: string; favor: number }): string {
  return `${entry.name} · ${favorRankTitle(entry.favor)} · 好感 ${entry.favor}`;
}

/** 好感板空态 / 有客摘要 */
export function formatFavorBoardSummary(
  entries: readonly { name: string; favor: number }[],
): string {
  if (entries.length === 0) {
    return "完成流通后，常客的好感会慢慢累积。";
  }
  return entries.map((e) => formatFavorLine(e)).join("；");
}
