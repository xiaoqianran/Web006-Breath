/**
 * 托盘陈列叙事（纯函数，可单测）
 * 把多形态成品比作托盘上的一份份温柔。
 */
import type { VesselKind } from "./types";
import { VESSEL_LABELS } from "./types";

export function formatTrayPlaceLine(vessel: VesselKind): string {
  return `托盘上多了一份「${VESSEL_LABELS[vessel]}」，像被点名。`;
}

export function formatTrayFullAside(count: number): string {
  if (count <= 0) return "托盘还空着：第一份温柔会轻轻放上。";
  if (count === 1) return "托盘上只有一份：足够认真对待。";
  if (count < 5) return `托盘上 ${count} 份：可以端给不同的人。`;
  return `托盘已满 ${count} 份：记得让最早的一份被带走。`;
}

export function formatTrayServeAside(actionGift: boolean): string {
  if (actionGift) return "端离托盘，当面交到需要的人手上。";
  return "托盘移到货架：等知音自己来取。";
}

export function formatTrayEncourage(): string {
  return "托盘不怕慢：一份一份放，也一份一份送出。";
}
