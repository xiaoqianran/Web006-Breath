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
    eitherMet: circulationsMet || warmthMet,
    bestRatio: Math.max(cRatio, wRatio),
  };
}

export function formatDayGoalLine(p: DayGoalProgress): string {
  const c = `流通 ${p.circulations}/${p.circulationsTarget}${p.circulationsMet ? "✓" : ""}`;
  const w = `温存 ${p.warmth}/${p.warmthTarget}${p.warmthMet ? "✓" : ""}`;
  return `今日目标：${c} · ${w}`;
}
