import { orderMatches, type ShopOrder } from "./orders";
import type { CraftedItem, Quality } from "./types";

/** 「温情价」：不以金钱为核心，而是流通时的温存估价展示 */
export function warmthPrice(item: CraftedItem): number {
  return item.circulationValue;
}

export function priceLabel(item: CraftedItem): string {
  const p = warmthPrice(item);
  const tone =
    item.quality === "rare" ? "珍重" : item.quality === "fine" ? "妥当" : "素朴";
  return `${tone} · 温存估价 ${p}`;
}

export function qualityMultiplier(q: Quality): number {
  if (q === "rare") return 1.5;
  if (q === "fine") return 1.15;
  return 1;
}

/**
 * 若成品可履约某委托，返回奖励提示文案；否则空串。
 * 纯展示，不修改 state。
 */
export function orderBonusHint(
  item: CraftedItem,
  order: ShopOrder | null | undefined,
): string {
  if (!order) return "";
  if (!orderMatches(order, item)) return "";
  const rep =
    order.bonusReputation > 0 ? ` · 口碑 +${order.bonusReputation}` : "";
  return `可履约「${order.guestName}」的委托（温存 +${order.bonusWarmth}${rep}）`;
}

/** 在主单与候补中找第一笔可履约委托的提示 */
export function firstOrderBonusHint(
  item: CraftedItem,
  active: ShopOrder | null | undefined,
  pending: readonly ShopOrder[] | null | undefined,
): string {
  const primary = orderBonusHint(item, active);
  if (primary) return primary;
  for (const o of pending ?? []) {
    const line = orderBonusHint(item, o);
    if (line) return line;
  }
  return "";
}
