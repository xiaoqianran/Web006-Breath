/**
 * 再访叙事文案（纯函数，可单测）
 * 与 evaluateRevisitEligibility / formatRevisitHint 互补。
 */
import type { RevisitEligibility } from "./revisit";
import { REVISIT_FAVOR_THRESHOLD } from "./revisit";

export function formatRevisitWelcome(guestName: string): string {
  return `${guestName}又推门进来了——故人的脚步，店铃认得。`;
}

export function formatRevisitLuggageAside(): string {
  return "柜台边多了一只小行李箱，像有人打算把温柔带走再走远一点。";
}

export function formatRevisitEligibilityAside(e: RevisitEligibility): string {
  if (e.allowed && e.reason === "high_favor" && e.topName) {
    return `${e.topName} 好感已满 ${e.topFavor}，明日可能带着行李再来。`;
  }
  if (e.allowed && e.reason === "even_day") {
    return "偶数日：曾受赠的客人可能回来道谢。";
  }
  if (e.reason === "no_gift") {
    return "尚未有赠予记录，故人的行李箱还不会停在门口。";
  }
  if (e.topFavor > 0) {
    return `最高好感 ${e.topFavor}/${REVISIT_FAVOR_THRESHOLD}，再暖一点或等偶数日。`;
  }
  return "再访的门还关着，流通会慢慢打开它。";
}

export function formatRevisitBoardEmpty(): string {
  return "完成赠予后，故人可能推门回来，柜台边会多一点行李的影子。";
}
