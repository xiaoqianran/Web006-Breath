import { clamp } from "./clamp";
import type { KeyValueStore } from "./save";

export interface PlayerSettings {
  /** 显示转化台气息提示 */
  showHints: boolean;
  /** 减少动效 */
  reduceMotion: boolean;
  /** 是否已看过首次教程 */
  tutorialSeen: boolean;
  /** 程序化/文件音效开关（与 reduceMotion 叠加） */
  sfxEnabled: boolean;
  /** 主音量 0–1 */
  volumeMaster: number;
  /** 音效通道 0–1 */
  volumeSfx: number;
  /** BGM 通道 0–1 */
  volumeBgm: number;
}

export const DEFAULT_SETTINGS: PlayerSettings = {
  showHints: true,
  reduceMotion: false,
  tutorialSeen: false,
  sfxEnabled: true,
  volumeMaster: 0.8,
  volumeSfx: 0.7,
  volumeBgm: 0.45,
};

export const SETTINGS_KEY = "yixi.settings.v1";

/** 将任意输入规范为 0–1 音量 */
export function normalizeVolume(value: unknown, fallback: number): number {
  if (typeof value !== "number" || Number.isNaN(value)) return clamp(fallback, 0, 1);
  return clamp(value, 0, 1);
}

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
    sfxEnabled: typeof p.sfxEnabled === "boolean" ? p.sfxEnabled : DEFAULT_SETTINGS.sfxEnabled,
    volumeMaster: normalizeVolume(p.volumeMaster, DEFAULT_SETTINGS.volumeMaster),
    volumeSfx: normalizeVolume(p.volumeSfx, DEFAULT_SETTINGS.volumeSfx),
    volumeBgm: normalizeVolume(p.volumeBgm, DEFAULT_SETTINGS.volumeBgm),
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
  const base = loadSettings(store, key);
  const merged: PlayerSettings = { ...base, ...patch };
  // 音量字段强制钳制
  merged.volumeMaster = normalizeVolume(merged.volumeMaster, DEFAULT_SETTINGS.volumeMaster);
  merged.volumeSfx = normalizeVolume(merged.volumeSfx, DEFAULT_SETTINGS.volumeSfx);
  merged.volumeBgm = normalizeVolume(merged.volumeBgm, DEFAULT_SETTINGS.volumeBgm);
  saveSettings(store, merged, key);
  return merged;
}

/** 音量百分比展示（无 DOM） */
export function formatVolumePercent(v: number): string {
  return `${Math.round(normalizeVolume(v, 0) * 100)}%`;
}
