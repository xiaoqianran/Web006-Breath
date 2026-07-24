/**
 * 罗盘/方向叙事（纯函数，可单测）
 * 把形态推荐比作罗盘指向，增强选形文艺感。
 */
import type { Emotion, VesselKind } from "./types";
import { VESSEL_LABELS } from "./types";
import { recommendVesselForEmotion } from "./vessel-recommend";

const DIRECTION: Record<VesselKind, string> = {
  flower: "东 · 朝光生长",
  tea: "南 · 温热停驻",
  art: "西 · 余晖落笔",
  music: "北 · 风声远去",
  object: "中央 · 握在掌心",
};

export function vesselCompassDirection(vessel: VesselKind): string {
  return DIRECTION[vessel] ?? "中央 · 随心";
}

export function formatCompassNeedleLine(vessel: VesselKind): string {
  return `罗盘轻转：指针指向「${VESSEL_LABELS[vessel]}」（${vesselCompassDirection(vessel)}）`;
}

export function formatCompassForEmotion(emotion: Emotion | null): string {
  if (!emotion) return "接待客人后，罗盘才会轻轻转动。";
  const best = recommendVesselForEmotion(emotion);
  return formatCompassNeedleLine(best);
}

export function formatCompassAside(emotion: Emotion | null): string {
  if (!emotion) return "先听，再看罗盘。";
  const best = recommendVesselForEmotion(emotion);
  return `非强制：罗盘只是建议，你仍可走向任何形态。当前隐约偏「${VESSEL_LABELS[best]}」。`;
}

export function formatMapPathAside(day: number): string {
  if (day <= 1) return "地图上的起点：第一日巷口，刚画上一个小圆点。";
  if (day < 10) return `地图上的路径已有 ${day} 个小点，像浅浅的脚印。`;
  return `第 ${day} 日：地图折痕里，藏着许多被接住的温柔。`;
}
