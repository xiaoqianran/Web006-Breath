import { anyTrue } from "./bool";
import type { GameState } from "./types";

export interface DayGoalProgress {
  circulations: number;
  circulationsTarget: number;
  warmth: number;
  warmthTarget: number;
  circulationsMet: boolean;
  warmthMet: boolean;
  eitherMet: boolean;
  /** 0–1 综合进度（取两指标较高完成度） */
  bestRatio: number;
}

/** 日目标进度（与 game 结算条件一致：流通或温存任达其一） */
export function dayGoalProgress(state: GameState): DayGoalProgress {
  const cT = state.config.dayGoalCirculations;
  const wT = state.config.dayGoalWarmth;
  const c = state.circulationsToday;
  const w = state.warmth;
  const circulationsMet = c >= cT;
  const warmthMet = w >= wT;
  const cRatio = cT > 0 ? Math.min(1, c / cT) : 1;
  const wRatio = wT > 0 ? Math.min(1, w / wT) : 1;
  return {
    circulations: c,
    circulationsTarget: cT,
    warmth: w,
    warmthTarget: wT,
    circulationsMet,
    warmthMet,
    eitherMet: anyTrue([circulationsMet, warmthMet]),
    bestRatio: Math.max(cRatio, wRatio),
  };
}

export function formatDayGoalLine(p: DayGoalProgress): string {
  const c = `流通 ${p.circulations}/${p.circulationsTarget}${p.circulationsMet ? "✓" : ""}`;
  const w = `温存 ${p.warmth}/${p.warmthTarget}${p.warmthMet ? "✓" : ""}`;
  return `今日目标：${c} · ${w}`;
}

/** 距日目标还差多少（纯函数） */
export function dayGoalRemaining(p: DayGoalProgress): {
  circulationsLeft: number;
  warmthLeft: number;
  status: "done" | "close" | "mid" | "early";
} {
  const circulationsLeft = Math.max(0, p.circulationsTarget - p.circulations);
  const warmthLeft = Math.max(0, p.warmthTarget - p.warmth);
  let status: "done" | "close" | "mid" | "early" = "early";
  if (p.eitherMet) status = "done";
  else if (p.bestRatio >= 0.66) status = "close";
  else if (p.bestRatio >= 0.33) status = "mid";
  return { circulationsLeft, warmthLeft, status };
}

/** 日目标鼓励短句（HUD / 读屏） */
export function formatDayGoalEncourage(p: DayGoalProgress): string {
  const r = dayGoalRemaining(p);
  if (r.status === "done") return "今日目标已达成，可以慢慢打烊或继续流通。";
  if (r.status === "close") {
    return `就差一点：还差流通 ${r.circulationsLeft} 或温存 ${r.warmthLeft}。`;
  }
  if (r.status === "mid") {
    return `过半了：流通还差 ${r.circulationsLeft}，温存还差 ${r.warmthLeft}。`;
  }
  return `新的一天：目标流通 ${p.circulationsTarget} / 温存 ${p.warmthTarget}。`;
}
