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
