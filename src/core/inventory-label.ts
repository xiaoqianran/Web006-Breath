/**
 * 店内存货/小物叙事（纯函数，可单测）
 * 不引入真实库存系统，只对货架与流通做文艺摘要。
 */
import type { GameState, VesselKind } from "./types";
import { VESSEL_LABELS } from "./types";
import { shelfVesselMix, shelfOccupancy } from "./shelf-info";

export function formatInventoryEmptyLine(): string {
  return "柜台小罐与货架都空着——流通会把它们慢慢填满。";
}

export function formatInventoryShelfAside(state: Pick<GameState, "shelf">): string {
  const o = shelfOccupancy(state);
  if (o.used === 0) return formatInventoryEmptyLine();
  const mix = shelfVesselMix(state);
  const parts = (Object.keys(mix) as VesselKind[])
    .sort()
    .map((v) => `${VESSEL_LABELS[v]}×${mix[v]}`);
  return `店内陈列：${parts.join(" · ")}（${o.used}/${o.capacity}）`;
}

export function formatSpiceJarAside(circulations: number): string {
  if (circulations <= 0) return "茶罐与糖罐盖子还紧着，等待第一位客人。";
  if (circulations < 3) return "小罐被拧开过几次，香气开始在店里绕。";
  return "茶罐香气稳了：像店已经记得今天的节奏。";
}

export function formatInventoryEncourage(
  state: Pick<GameState, "shelf" | "circulationsToday">,
): string {
  const o = shelfOccupancy(state);
  if (o.full) return "架子满了，让最早的温柔被买走，腾位置给后来的人。";
  if (o.used === 0 && state.circulationsToday === 0) {
    return "新的一天：可以从接待开始，或先擦亮柜台上的小罐。";
  }
  if (o.used === 0) return "流通过了，货架仍空——也可以直接赠予。";
  return `还有 ${o.free} 格空位，知音可能随时推门。`;
}
