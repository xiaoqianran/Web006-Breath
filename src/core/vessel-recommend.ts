/**
 * 形态推荐文案（纯函数）：结合客人与委托
 */
import { bestVesselForGuest } from "./affinity";
import { orderVesselHintLine, vesselHelpsAnyOrder } from "./orders";
import type { Emotion, GameState, VesselKind } from "./types";
import { VESSEL_LABELS } from "./types";
import { VESSEL_ORDER } from "./vessel-list";

export function recommendVesselForEmotion(emotion: Emotion): VesselKind {
  return bestVesselForGuest(emotion);
}

export function formatVesselRecommendLine(
  emotion: Emotion | null,
  state: Pick<GameState, "activeOrder" | "pendingOrders">,
): string {
  if (!emotion) return "接待客人后，会有形态气息提示。";
  const best = recommendVesselForEmotion(emotion);
  const orderPart = orderVesselHintLine(state);
  const orderNote =
    orderPart && vesselHelpsAnyOrder(state, best)
      ? "（亦贴近今日委托）"
      : orderPart
        ? `；另：${orderPart}`
        : "";
  return `隐约更靠近「${VESSEL_LABELS[best]}」${orderNote}`;
}

export function listVesselHotkeyHints(): string {
  return VESSEL_ORDER.map((v, i) => `${i + 1}=${VESSEL_LABELS[v]}`).join(" · ");
}
