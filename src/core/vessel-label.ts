/**
 * 容器形态叙事文案（纯函数，可单测）
 */
import type { VesselKind } from "./types";
import { VESSEL_LABELS } from "./types";

const NARRATIVE: Record<VesselKind, string> = {
  flower: "花瓣托住未说完的话，适合放在有光的地方。",
  tea: "茶汤温着，把脚步和心跳都放慢一点。",
  art: "颜色替你说出口，挂在目光落得下的墙。",
  music: "旋律可带走，像傍晚的风贴着衣角。",
  object: "小物件握在手心，路上想起来就摸摸。",
};

const CRAFT_HINT: Record<VesselKind, string> = {
  flower: "想念、温柔、期待的气息更贴花。",
  tea: "疲惫、安心、释然时，茶往往刚好。",
  art: "遗憾、孤独、悸动，可交给画。",
  music: "孤独、想念、勇气，可交给音乐。",
  object: "安心、期待、温柔，可收成小物件。",
};

export function vesselNarrative(vessel: VesselKind): string {
  return NARRATIVE[vessel] ?? "一种安静的容器。";
}

export function vesselCraftHint(vessel: VesselKind): string {
  return CRAFT_HINT[vessel] ?? "随心选择即可。";
}

export function formatVesselLine(vessel: VesselKind): string {
  return `${VESSEL_LABELS[vessel]} · ${vesselNarrative(vessel)}`;
}

export function formatVesselPickLine(vessel: VesselKind): string {
  return `选中「${VESSEL_LABELS[vessel]}」：${vesselCraftHint(vessel)}`;
}

export function listVesselNarratives(): string[] {
  return (Object.keys(NARRATIVE) as VesselKind[]).map((v) => formatVesselLine(v));
}

/** 形态示意资源路径（UI 背景） */
export const VESSEL_ART_PATH: Record<VesselKind, string> = {
  flower: "/assets/ui/vessel_flower.jpg",
  tea: "/assets/ui/tea_cup.jpg",
  art: "/assets/ui/vessel_art.jpg",
  music: "/assets/ui/music_box.jpg",
  object: "/assets/ui/shelf_craft.jpg",
};

export function vesselArtPublicUrl(vessel: VesselKind): string {
  return VESSEL_ART_PATH[vessel] ?? VESSEL_ART_PATH.object;
}

export function vesselArtDiskPath(vessel: VesselKind): string {
  return `public${vesselArtPublicUrl(vessel)}`;
}
