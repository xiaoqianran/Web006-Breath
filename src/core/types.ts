/** 情绪标签 */
export type EmotionTag =
  | "想念"
  | "释然"
  | "疲惫"
  | "悸动"
  | "遗憾"
  | "安心"
  | "期待"
  | "孤独"
  | "温柔"
  | "勇气";

/** 容器形态 */
export type VesselKind = "flower" | "tea" | "art" | "music" | "object";

export type Quality = "simple" | "fine" | "rare";

export type CirculationAction = "display" | "gift";

export type GamePhase =
  | "awaiting_emotion"
  | "awaiting_vessel"
  | "awaiting_circulation"
  | "result"
  | "day_complete";

export interface Emotion {
  id: string;
  text: string;
  tags: EmotionTag[];
  intensity: number; // 1–5
  guestName: string;
}

export interface CraftedItem {
  id: string;
  emotionId: string;
  vessel: VesselKind;
  quality: Quality;
  matchScore: number;
  circulationValue: number;
  label: string;
}

export interface CirculationRecord {
  item: CraftedItem;
  action: CirculationAction;
  warmthGained: number;
  momentCard: string;
  at: number;
}

export interface GameConfig {
  dayGoalCirculations: number;
  dayGoalWarmth: number;
}

export interface GameState {
  phase: GamePhase;
  day: number;
  warmth: number;
  reputation: number;
  queue: Emotion[];
  current: Emotion | null;
  crafted: CraftedItem | null;
  lastResult: CirculationRecord | null;
  history: CirculationRecord[];
  circulationsToday: number;
  /** 连续 fine/rare 次数，simple 会清零 */
  qualityStreak: number;
  config: GameConfig;
  message: string;
}

export const VESSEL_LABELS: Record<VesselKind, string> = {
  flower: "花",
  tea: "茶",
  art: "画",
  music: "音乐",
  object: "小物件",
};

export const VESSEL_AFFINITY: Record<VesselKind, EmotionTag[]> = {
  flower: ["想念", "温柔", "期待"],
  tea: ["疲惫", "安心", "释然"],
  art: ["遗憾", "孤独", "悸动"],
  music: ["孤独", "想念", "勇气"],
  object: ["安心", "期待", "温柔"],
};

export const QUALITY_LABELS: Record<Quality, string> = {
  simple: "素简",
  fine: "精致",
  rare: "珍稀",
};

export const DEFAULT_CONFIG: GameConfig = {
  dayGoalCirculations: 3,
  dayGoalWarmth: 8,
};
