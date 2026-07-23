/**
 * 货架状态文案（纯函数）
 */
import type { GameState, VesselKind } from "./types";
import { VESSEL_LABELS } from "./types";
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

/** 货架上形态种类摘要 */
export function shelfVesselMix(
  state: Pick<GameState, "shelf">,
): Partial<Record<VesselKind, number>> {
  const mix: Partial<Record<VesselKind, number>> = {};
  for (const slot of state.shelf ?? []) {
    const v = slot.crafted.vessel;
    mix[v] = (mix[v] ?? 0) + 1;
  }
  return mix;
}

export function formatShelfMixLine(state: Pick<GameState, "shelf">): string {
  const mix = shelfVesselMix(state);
  const parts = (Object.keys(mix) as VesselKind[])
    .sort()
    .map((v) => `${VESSEL_LABELS[v]}×${mix[v]}`);
  if (parts.length === 0) return "货架上还没有形态，可以先上架一件。";
  return `架上：${parts.join(" · ")}`;
}

/** 货架鼓励短句 */
export function formatShelfEncourage(state: Pick<GameState, "shelf">): string {
  const o = shelfOccupancy(state);
  if (o.used === 0) return "空架子也在等人：上架后，「被买走」会完成流通。";
  if (o.full) return "架子满了，让最早的温柔被买走，腾一点位置给后来的人。";
  if (o.used === 1) return "第一件已安放，像把灯先点着。";
  return `还有 ${o.free} 格空位，知音可能随时推门。`;
}
