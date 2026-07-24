/**
 * 留言簿叙事（纯函数，可单测）
 * 从好感条目生成柜台留言簿短句，供图鉴/好感板展示。
 */
import { favorRankTitle } from "./favor";

export interface GuestbookEntry {
  name: string;
  favor: number;
  note: string;
}

export function guestbookNoteForFavor(name: string, favor: number): string {
  const rank = favorRankTitle(favor);
  if (favor >= 12) {
    return `${name}（${rank}）：「灯替我留着就好。」`;
  }
  if (favor >= 7) {
    return `${name}（${rank}）：「下次还来听雨。」`;
  }
  if (favor >= 3) {
    return `${name}（${rank}）：「谢谢你接住了我。」`;
  }
  if (favor > 0) {
    return `${name}（${rank}）：「第一次推门，心还跳。」`;
  }
  return `${name}：页角空白，等一句温柔。`;
}

export function buildGuestbookEntries(
  entries: readonly { name: string; favor: number }[],
  limit = 5,
): GuestbookEntry[] {
  return [...entries]
    .sort((a, b) => b.favor - a.favor)
    .slice(0, limit)
    .map((e) => ({
      name: e.name,
      favor: e.favor,
      note: guestbookNoteForFavor(e.name, e.favor),
    }));
}

export function formatGuestbookLine(entry: GuestbookEntry): string {
  return entry.note;
}

export function formatGuestbookBoardSummary(
  entries: readonly GuestbookEntry[],
): string {
  if (entries.length === 0) {
    return "留言簿还是空白页：流通之后，常客会留下一句轻声的话。";
  }
  return entries.map((e) => e.note).join(" ");
}

export function formatGuestbookEncourage(entryCount: number): string {
  if (entryCount <= 0) return "先接待、再流通，留言会慢慢写满。";
  if (entryCount >= 5) return "留言簿快满了——每句都是被接住的证明。";
  return `已有 ${entryCount} 位客人留下字迹，店铃记得他们。`;
}

export function formatLanternAside(reputation: number): string {
  if (reputation >= 12) return "纸灯常亮：街角已有人把这里当作归处。";
  if (reputation >= 6) return "纸灯摇着：有人路过时会多看一眼门帘。";
  if (reputation >= 2) return "纸灯刚点着：口碑像微光一样在攒。";
  return "纸灯待点燃：第一次流通会让它亮起来。";
}
