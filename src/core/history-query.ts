import { lastOf } from "./pick";
import type { CirculationRecord, GameState, Quality, VesselKind } from "./types";

export function countByVessel(history: CirculationRecord[], vessel: VesselKind): number {
  return history.filter((h) => h.item.vessel === vessel).length;
}

export function countByQuality(history: CirculationRecord[], quality: Quality): number {
  return history.filter((h) => h.item.quality === quality).length;
}

export function lastCirculation(state: GameState): CirculationRecord | null {
  return lastOf(state.history) ?? null;
}

export function totalWarmthFromHistory(history: CirculationRecord[]): number {
  return history.reduce((sum, h) => sum + h.warmthGained, 0);
}
