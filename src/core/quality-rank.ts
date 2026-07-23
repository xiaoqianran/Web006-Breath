import type { Quality } from "./types";

const RANK: Record<Quality, number> = {
  simple: 0,
  fine: 1,
  rare: 2,
};

export function qualityRank(q: Quality): number {
  return RANK[q];
}

export function isBetterQuality(a: Quality, b: Quality): boolean {
  return qualityRank(a) > qualityRank(b);
}
