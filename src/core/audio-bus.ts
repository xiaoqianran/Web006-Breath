/**
 * 音频总线接口与静默/程序化/混合文件实现。
 * 真实振荡器与 HTMLAudio 播放在 UI 注入；核心只做规格、清单解析与调用记录。
 */

import { audioPublicUrl, getAudioAsset } from "./audio-manifest";
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

/** 外部采样播放（url 为 public 路径） */
export type SamplePlayer = (opts: {
  url: string;
  volume: number;
  loop?: boolean;
  channel: "sfx" | "bgm";
}) => void;

export type SampleStopper = () => void;

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

/**
 * 混合总线：优先播放清单中的外部文件，失败/无采样器时回退程序化 tone。
 * BGM 仅走采样器（无文件则只记录 id）。
 */
export class HybridAudioBus implements AudioBus {
  private volumes: Record<AudioChannel, number> = {
    master: 0.8,
    bgm: 0.45,
    sfx: 0.7,
    ambience: 0.3,
  };
  private lastSfx: string | null = null;
  private lastBgm: string | null = null;
  private lastTone: ToneSpec | null = null;
  private lastSampleUrl: string | null = null;
  private lastSource: "file" | "tone" | "none" = "none";
  private enabled = true;

  constructor(
    private readonly samplePlayer: SamplePlayer | null = null,
    private readonly tonePlayer: TonePlayer | null = null,
    private readonly stopSampleBgm: SampleStopper | null = null,
  ) {}

  setEnabled(on: boolean): void {
    this.enabled = on;
    if (!on) this.stopBgm();
  }

  setVolume(channel: AudioChannel, value: number): void {
    this.volumes[channel] = Math.min(1, Math.max(0, value));
  }

  getVolume(channel: AudioChannel): number {
    return this.volumes[channel];
  }

  playSfx(id: string): void {
    this.lastSfx = id;
    this.lastTone = null;
    this.lastSampleUrl = null;
    this.lastSource = "none";
    if (!this.enabled) return;

    const url = audioPublicUrl(id);
    const asset = getAudioAsset(id);
    if (url && asset?.kind === "sfx" && this.samplePlayer) {
      const g = this.volumes.master * this.volumes.sfx;
      this.samplePlayer({ url, volume: g, loop: false, channel: "sfx" });
      this.lastSampleUrl = url;
      this.lastSource = "file";
      return;
    }

    const tone = toneForSfx(id);
    this.lastTone = tone;
    if (tone && this.tonePlayer) {
      const g = this.volumes.master * this.volumes.sfx * tone.gain;
      this.tonePlayer(tone, g);
      this.lastSource = "tone";
    }
  }

  playBgm(id: string): void {
    this.lastBgm = id;
    if (!this.enabled) return;
    const url = audioPublicUrl(id);
    const asset = getAudioAsset(id);
    if (url && asset?.kind === "bgm" && this.samplePlayer) {
      const g = this.volumes.master * this.volumes.bgm;
      this.samplePlayer({
        url,
        volume: g,
        loop: asset.loop,
        channel: "bgm",
      });
      this.lastSampleUrl = url;
      this.lastSource = "file";
    }
  }

  stopBgm(): void {
    this.lastBgm = null;
    if (this.stopSampleBgm) this.stopSampleBgm();
  }

  isLive(): boolean {
    return this.enabled && (this.samplePlayer !== null || this.tonePlayer !== null);
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

  debugLastSampleUrl(): string | null {
    return this.lastSampleUrl;
  }

  debugLastSource(): "file" | "tone" | "none" {
    return this.lastSource;
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
