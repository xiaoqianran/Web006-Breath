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

/** 从状态读取某客人当前好感 */
export function favorForGuest(state: GameState, guestName: string): number {
  return rebuildFavorMap(state.history)[guestName] ?? 0;
}

/**
 * 接待时的好感驱动招呼文案（纯函数）
 * 新客 favor=0 返回空串，由 UI 用默认接待语。
 */
export function formatFavorGreeting(guestName: string, favor: number): string {
  if (favor <= 0) return "";
  const rank = favorRankTitle(favor);
  if (favor >= 12) {
    return `${guestName}又来了——${rank}。店里像为你留了一盏常亮的灯。`;
  }
  if (favor >= 7) {
    return `${guestName}推门进来，${rank}的脚步声你已经认得。`;
  }
  if (favor >= 3) {
    return `${guestName}再次光临。你们已算${rank}，招呼可以轻松些。`;
  }
  return `${guestName}回来过。好感尚浅（${rank}），仍值得认真听。`;
}

/** 选形态阶段：按好感给一点温和的旁白（非强制） */
export function formatFavorCraftAside(guestName: string, favor: number): string {
  if (favor <= 0) return "";
  if (favor >= 12) {
    return `为${guestName}选形态时，可以更放心地试一试贴合的容器。`;
  }
  if (favor >= 7) {
    return `${guestName}是熟客，匹配时多留一点他们偏爱的气息。`;
  }
  if (favor >= 3) {
    return `记得${guestName}上次的心情，这次可以试着更贴一点。`;
  }
  return `与${guestName}的缘分刚起，稳稳接住即可。`;
}

/** 接待处预览：队列下一位的好感招呼（无则空） */
export function formatNextGuestFavorHint(
  state: GameState,
  nextGuestName: string | null | undefined,
): string {
  if (!nextGuestName) return "";
  return formatFavorGreeting(nextGuestName, favorForGuest(state, nextGuestName));
}
