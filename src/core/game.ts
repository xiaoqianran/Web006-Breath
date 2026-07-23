import { craftLabel, evaluateMatch, warmthFromCirculation, buildMomentCard } from "./matching";
import {
  DEFAULT_CONFIG,
  type CirculationAction,
  type CraftedItem,
  type Emotion,
  type GameConfig,
  type GameState,
  type VesselKind,
} from "./types";

function uid(prefix: string): string {
  return `${prefix}_${Math.random().toString(36).slice(2, 10)}`;
}

export function createGameState(
  queue: Emotion[],
  config: Partial<GameConfig> = {},
): GameState {
  return {
    phase: "awaiting_emotion",
    day: 1,
    warmth: 0,
    reputation: 0,
    queue: [...queue],
    current: null,
    crafted: null,
    lastResult: null,
    history: [],
    circulationsToday: 0,
    qualityStreak: 0,
    config: { ...DEFAULT_CONFIG, ...config },
    message: queue.length > 0 ? "今日已有情绪在等候。请接待下一位。" : "店里很安静。",
  };
}

/** 兼容旧存档：补齐缺失字段 */
export function normalizeGameState(state: GameState): GameState {
  return {
    ...state,
    qualityStreak: typeof state.qualityStreak === "number" ? state.qualityStreak : 0,
    history: Array.isArray(state.history) ? state.history : [],
    queue: Array.isArray(state.queue) ? state.queue : [],
  };
}

/** 接待队列首位情绪 */
export function acceptNextEmotion(state: GameState): GameState {
  if (state.phase === "day_complete") {
    return { ...state, message: "今日目标已完成，可开始新的一天。" };
  }
  if (state.phase !== "awaiting_emotion" && state.phase !== "result") {
    return { ...state, message: "请先完成当前转化或流通。" };
  }
  if (state.queue.length === 0) {
    return {
      ...state,
      phase: state.circulationsToday > 0 ? state.phase : "awaiting_emotion",
      current: null,
      crafted: null,
      message: "暂时没有新的情绪了。",
    };
  }

  const [next, ...rest] = state.queue;
  if (!next) {
    return { ...state, message: "暂时没有新的情绪了。" };
  }

  return {
    ...state,
    phase: "awaiting_vessel",
    queue: rest,
    current: next,
    crafted: null,
    lastResult: null,
    message: `${next.guestName} 把心情交给了你。选择一种容器形态吧。`,
  };
}

/** 选择容器并完成转化 */
export function chooseVessel(state: GameState, vessel: VesselKind): GameState {
  if (state.phase !== "awaiting_vessel" || !state.current) {
    return { ...state, message: "现在还不能转化。" };
  }

  const match = evaluateMatch(state.current, vessel);
  const item: CraftedItem = {
    id: uid("item"),
    emotionId: state.current.id,
    vessel,
    quality: match.quality,
    matchScore: match.matchScore,
    circulationValue: match.circulationValue,
    label: craftLabel(state.current, vessel, match.quality),
  };

  return {
    ...state,
    phase: "awaiting_circulation",
    crafted: item,
    message: `转化完成：${item.label}（匹配 ${item.matchScore}，品质 ${item.quality}）。请上架或赠予。`,
  };
}

/** 上架或赠予，完成一次流通 */
export function circulate(state: GameState, action: CirculationAction): GameState {
  if (state.phase !== "awaiting_circulation" || !state.crafted || !state.current) {
    return { ...state, message: "没有可流通的成品。" };
  }

  const baseWarmth = warmthFromCirculation(state.crafted.circulationValue, action);
  const nextStreak =
    state.crafted.quality === "simple" ? 0 : state.qualityStreak + 1;
  const streakBonus = nextStreak >= 2 ? Math.min(nextStreak - 1, 3) : 0;
  const warmthGained = baseWarmth + streakBonus;
  const record = {
    item: state.crafted,
    action,
    warmthGained,
    momentCard: buildMomentCard(
      state.current,
      state.crafted.vessel,
      state.crafted.quality,
      action,
    ),
    at: Date.now(),
  };

  const warmth = state.warmth + warmthGained;
  const reputation =
    state.reputation + (state.crafted.quality === "rare" ? 2 : state.crafted.quality === "fine" ? 1 : 0);
  const circulationsToday = state.circulationsToday + 1;

  const goalMet =
    circulationsToday >= state.config.dayGoalCirculations ||
    warmth >= state.config.dayGoalWarmth;

  const phase = goalMet && state.queue.length === 0 ? "day_complete" : "result";

  const streakMsg =
    streakBonus > 0 ? `（精致连心 +${streakBonus}）` : "";

  return {
    ...state,
    phase,
    warmth,
    reputation,
    circulationsToday,
    qualityStreak: nextStreak,
    history: [...state.history, record],
    lastResult: record,
    current: null,
    crafted: null,
    message: goalMet
      ? `流通完成，获得温存 +${warmthGained}${streakMsg}。今日目标已达成！`
      : `流通完成，获得温存 +${warmthGained}${streakMsg}。可以继续接待。`,
  };
}

/** 从结果页回到可接待状态 */
export function continueAfterResult(state: GameState): GameState {
  if (state.phase === "day_complete") {
    return state;
  }
  if (state.phase !== "result") {
    return state;
  }
  return {
    ...state,
    phase: "awaiting_emotion",
    lastResult: state.lastResult,
    message: state.queue.length > 0 ? "下一位已经在门口了。" : "今日队列已空，可以打烊或等待。",
  };
}

/** 开始新的一天（保留温存与历史） */
export function startNextDay(
  state: GameState,
  newQueue: Emotion[],
  openerMessage?: string,
): GameState {
  const day = state.day + 1;
  return {
    ...state,
    phase: "awaiting_emotion",
    day,
    queue: [...newQueue],
    current: null,
    crafted: null,
    lastResult: null,
    circulationsToday: 0,
    message: openerMessage ?? `第 ${day} 日。新的情绪正缓缓到来。`,
  };
}

/** 便捷：从初始队列推进完整一笔流通（测试/脚本用） */
export function runFullCirculation(
  state: GameState,
  vessel: VesselKind,
  action: CirculationAction,
): GameState {
  let s = state;
  if (s.phase === "awaiting_emotion" || s.phase === "result") {
    s = acceptNextEmotion(s);
  }
  s = chooseVessel(s, vessel);
  s = circulate(s, action);
  return s;
}
