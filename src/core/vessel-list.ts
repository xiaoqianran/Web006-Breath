import type { VesselKind } from "./types";
import { VESSEL_LABELS } from "./types";

/** 固定形态顺序（与 UI 1–5 一致） */
export const VESSEL_ORDER: VesselKind[] = [
  "flower",
  "tea",
  "art",
  "music",
  "object",
];

export function vesselIndex(kind: VesselKind): number {
  return VESSEL_ORDER.indexOf(kind);
}

export function vesselByHotkey(key: string): VesselKind | null {
  const n = Number(key);
  if (!Number.isInteger(n) || n < 1 || n > VESSEL_ORDER.length) return null;
  return VESSEL_ORDER[n - 1] ?? null;
}

export function listVesselChoices(): { kind: VesselKind; label: string; hotkey: number }[] {
  return VESSEL_ORDER.map((kind, i) => ({
    kind,
    label: VESSEL_LABELS[kind],
    hotkey: i + 1,
  }));
}
