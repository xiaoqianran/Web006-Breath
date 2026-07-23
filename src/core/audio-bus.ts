/**
 * 音频总线接口与静默/程序化实现。
 * 真实振荡器播放在 UI 注入；核心只做规格与调用记录。
 */

import { toneForSfx, type ToneSpec } from "./tones";

export type AudioChannel = "master" | "bgm" | "sfx" | "ambience";

export interface AudioBus {
  setVolume(channel: AudioChannel, value: number): void;
  getVolume(channel: AudioChannel): number;
  playSfx(id: string): void;
  playBgm(id: string): void;
  stopBgm(): void;
  /** 是否已启用真实输出 */
  isLive(): boolean;
}

export type TonePlayer = (spec: ToneSpec, channelGain: number) => void;

export class SilentAudioBus implements AudioBus {
  private volumes: Record<AudioChannel, number> = {
    master: 0.8,
    bgm: 0.45,
    sfx: 0.7,
    ambience: 0.3,
  };
  private lastSfx: string | null = null;
  private lastBgm: string | null = null;

  setVolume(channel: AudioChannel, value: number): void {
    this.volumes[channel] = Math.min(1, Math.max(0, value));
  }

  getVolume(channel: AudioChannel): number {
    return this.volumes[channel];
  }

  playSfx(id: string): void {
    this.lastSfx = id;
  }

  playBgm(id: string): void {
    this.lastBgm = id;
  }

  stopBgm(): void {
    this.lastBgm = null;
  }

  isLive(): boolean {
    return false;
  }

  /** 测试探测 */
  debugLastSfx(): string | null {
    return this.lastSfx;
  }

  debugLastBgm(): string | null {
    return this.lastBgm;
  }
}

/**
 * 程序化音效总线：playSfx 查 tone 表并调用注入的播放器。
 * 无播放器时退化为记录 lastSfx（与静默类似）。
 */
export class ProceduralAudioBus implements AudioBus {
  private volumes: Record<AudioChannel, number> = {
    master: 0.8,
    bgm: 0.45,
    sfx: 0.7,
    ambience: 0.3,
  };
  private lastSfx: string | null = null;
  private lastBgm: string | null = null;
  private lastTone: ToneSpec | null = null;
  private enabled = true;

  constructor(private readonly player: TonePlayer | null = null) {}

  setEnabled(on: boolean): void {
    this.enabled = on;
  }

  setVolume(channel: AudioChannel, value: number): void {
    this.volumes[channel] = Math.min(1, Math.max(0, value));
  }

  getVolume(channel: AudioChannel): number {
    return this.volumes[channel];
  }

  playSfx(id: string): void {
    this.lastSfx = id;
    if (!this.enabled) return;
    const tone = toneForSfx(id);
    this.lastTone = tone;
    if (tone && this.player) {
      const g = this.volumes.master * this.volumes.sfx * tone.gain;
      this.player(tone, g);
    }
  }

  playBgm(id: string): void {
    this.lastBgm = id;
  }

  stopBgm(): void {
    this.lastBgm = null;
  }

  isLive(): boolean {
    return this.player !== null && this.enabled;
  }

  debugLastSfx(): string | null {
    return this.lastSfx;
  }

  debugLastBgm(): string | null {
    return this.lastBgm;
  }

  debugLastTone(): ToneSpec | null {
    return this.lastTone;
  }
}

/** 根据游戏事件映射建议 SFX id（纯函数） */
export function sfxForGameEvent(
  event: "accept" | "craft" | "rare" | "circulate" | "sell" | "day_end" | "click",
): string {
  const map = {
    accept: "sfx_accept",
    craft: "sfx_craft_ok",
    rare: "sfx_rare",
    circulate: "sfx_circulate",
    sell: "sfx_circulate",
    day_end: "sfx_day_end",
    click: "sfx_click",
  } as const;
  return map[event];
}
