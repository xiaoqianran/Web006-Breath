/**
 * 设置页叙事文案（纯函数，可单测）
 */
import type { PlayerSettings } from "./settings";

import { formatVolumePercent as volumePercent } from "./settings";

export function formatHintsToggleLine(showHints: boolean): string {
  return showHints
    ? "气息提示：开 · 转化台会轻声建议形态"
    : "气息提示：关 · 更安静地自己选";
}

export function formatSfxToggleLine(sfxEnabled: boolean, reduceMotion: boolean): string {
  if (reduceMotion) return "音效：随减少动效一并放轻";
  return sfxEnabled ? "音效：开 · 店铃与轻响会陪着你" : "音效：关 · 只剩文字的温柔";
}

export function formatSettingsSummary(s: PlayerSettings): string {
  return [
    formatHintsToggleLine(s.showHints),
    formatSfxToggleLine(s.sfxEnabled, s.reduceMotion),
    `主音量 ${volumePercent(s.volumeMaster)} · 音效 ${volumePercent(s.volumeSfx)} · 背景 ${volumePercent(s.volumeBgm)}`,
  ].join("；");
}

export function formatSettingsEncourage(s: PlayerSettings): string {
  if (s.reduceMotion) {
    return "已减少动效：节奏更稳，适合慢慢经营。";
  }
  if (!s.showHints) {
    return "提示已关：相信你的手感就好。";
  }
  return "设置可以随时改，店还是那间温柔的店。";
}
