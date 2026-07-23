import type { KeyValueStore } from "./save";

export interface PlayerSettings {
  /** 显示转化台气息提示 */
  showHints: boolean;
  /** 减少动效 */
  reduceMotion: boolean;
  /** 是否已看过首次教程 */
  tutorialSeen: boolean;
}

export const DEFAULT_SETTINGS: PlayerSettings = {
  showHints: true,
  reduceMotion: false,
  tutorialSeen: false,
};

export const SETTINGS_KEY = "yixi.settings.v1";

export function serializeSettings(s: PlayerSettings): string {
  return JSON.stringify(s);
}

export function parseSettings(raw: string): PlayerSettings {
  const p = JSON.parse(raw) as Partial<PlayerSettings>;
  return {
    showHints: typeof p.showHints === "boolean" ? p.showHints : DEFAULT_SETTINGS.showHints,
    reduceMotion:
      typeof p.reduceMotion === "boolean" ? p.reduceMotion : DEFAULT_SETTINGS.reduceMotion,
    tutorialSeen:
      typeof p.tutorialSeen === "boolean" ? p.tutorialSeen : DEFAULT_SETTINGS.tutorialSeen,
  };
}

export function loadSettings(store: KeyValueStore, key = SETTINGS_KEY): PlayerSettings {
  const raw = store.getItem(key);
  if (!raw) return { ...DEFAULT_SETTINGS };
  try {
    return parseSettings(raw);
  } catch {
    return { ...DEFAULT_SETTINGS };
  }
}

export function saveSettings(
  store: KeyValueStore,
  settings: PlayerSettings,
  key = SETTINGS_KEY,
): void {
  store.setItem(key, serializeSettings(settings));
}

export function updateSettings(
  store: KeyValueStore,
  patch: Partial<PlayerSettings>,
  key = SETTINGS_KEY,
): PlayerSettings {
  const next = { ...loadSettings(store, key), ...patch };
  saveSettings(store, next, key);
  return next;
}
