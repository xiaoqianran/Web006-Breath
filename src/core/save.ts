import { inspectGameState } from "./assert-state";
import { normalizeGameState } from "./game";
import type { GameState } from "./types";

export const SAVE_KEY = "yixi.save.v1";
export const SAVE_VERSION = 1;

export interface SaveBlob {
  version: number;
  savedAt: number;
  state: GameState;
}

export function serializeState(state: GameState): string {
  const blob: SaveBlob = {
    version: SAVE_VERSION,
    savedAt: Date.now(),
    state,
  };
  return JSON.stringify(blob);
}

export function deserializeState(raw: string): GameState {
  const parsed = JSON.parse(raw) as SaveBlob;
  if (!parsed || parsed.version !== SAVE_VERSION || !parsed.state) {
    throw new Error("存档版本不兼容或已损坏");
  }
  const s = parsed.state;
  if (typeof s.warmth !== "number" || !Array.isArray(s.history) || !Array.isArray(s.queue)) {
    throw new Error("存档结构无效");
  }
  const normalized = normalizeGameState(s);
  const check = inspectGameState(normalized);
  if (!check.ok) {
    throw new Error("存档结构无效: " + check.messages.join("; "));
  }
  return normalized;
}

/** 可注入 storage 以便测试 */
export interface KeyValueStore {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
  removeItem(key: string): void;
}

export function saveToStore(store: KeyValueStore, state: GameState, key = SAVE_KEY): void {
  store.setItem(key, serializeState(state));
}

export function loadFromStore(store: KeyValueStore, key = SAVE_KEY): GameState | null {
  const raw = store.getItem(key);
  if (!raw) return null;
  return deserializeState(raw);
}

export function clearSave(store: KeyValueStore, key = SAVE_KEY): void {
  store.removeItem(key);
}

/** 内存 store，单测用 */
export function createMemoryStore(initial: Record<string, string> = {}): KeyValueStore {
  const map = new Map(Object.entries(initial));
  return {
    getItem: (k) => (map.has(k) ? map.get(k)! : null),
    setItem: (k, v) => {
      map.set(k, v);
    },
    removeItem: (k) => {
      map.delete(k);
    },
  };
}
