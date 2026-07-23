import type { VesselKind } from "../core/types";

/** 内联 SVG 图标（原创路径，雾绿系描边） */
export const VESSEL_SVG: Record<VesselKind, string> = {
  flower: `<svg viewBox="0 0 64 64" width="40" height="40" aria-hidden="true"><circle cx="32" cy="28" r="8" fill="#D4A5B0"/><circle cx="22" cy="34" r="7" fill="#E8D0CB"/><circle cx="42" cy="34" r="7" fill="#E8D0CB"/><circle cx="32" cy="38" r="6" fill="#A8C3B0"/><path d="M32 40 v14" stroke="#3D4F44" stroke-width="2" fill="none"/><path d="M32 48 c-6 2 -8 6 -8 6" stroke="#A8C3B0" stroke-width="2" fill="none"/></svg>`,
  tea: `<svg viewBox="0 0 64 64" width="40" height="40" aria-hidden="true"><path d="M18 24 h28 v4 c0 12 -6 20 -14 20 s-14 -8 -14 -20 z" fill="#F7F3EC" stroke="#B8956C" stroke-width="2"/><path d="M46 28 h6 c4 0 6 3 6 6 s-2 6 -6 6 h-6" fill="none" stroke="#B8956C" stroke-width="2"/><ellipse cx="32" cy="24" rx="14" ry="4" fill="#C4A574" opacity="0.85"/><path d="M26 14 c0 4 4 4 4 8" stroke="#A8C3B0" stroke-width="2" fill="none"/></svg>`,
  art: `<svg viewBox="0 0 64 64" width="40" height="40" aria-hidden="true"><rect x="14" y="12" width="36" height="40" rx="3" fill="#F7F3EC" stroke="#7BA3B8" stroke-width="2"/><path d="M20 40 l8 -12 8 8 6 -10 6 14" fill="none" stroke="#A8C3B0" stroke-width="2"/><circle cx="24" cy="22" r="3" fill="#E8D0CB"/></svg>`,
  music: `<svg viewBox="0 0 64 64" width="40" height="40" aria-hidden="true"><path d="M28 12 v28 a8 8 0 1 1 -4 -7" fill="none" stroke="#9B8EC4" stroke-width="3"/><path d="M28 12 l18 -4 v20" fill="none" stroke="#9B8EC4" stroke-width="3"/><circle cx="20" cy="44" r="6" fill="#9B8EC4"/><circle cx="40" cy="36" r="6" fill="#C4A574"/></svg>`,
  object: `<svg viewBox="0 0 64 64" width="40" height="40" aria-hidden="true"><path d="M32 10 l14 8 v16 l-14 8 -14 -8 v-16 z" fill="#F7F3EC" stroke="#C9B89A" stroke-width="2"/><path d="M32 26 v16" stroke="#A8C3B0" stroke-width="2"/><path d="M18 18 l14 8 14 -8" stroke="#C9B89A" stroke-width="2" fill="none"/><circle cx="32" cy="22" r="3" fill="#E8D0CB"/></svg>`,
};

export function vesselIconHtml(kind: VesselKind): string {
  return VESSEL_SVG[kind];
}
