/**
 * 音频总线接口与静默实现。
 * 真实播放器可在 UI 层注入；核心逻辑不依赖浏览器 Audio。
 */

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
