/**
 * HTMLAudioElement 采样播放（BGM 循环 + SFX 一次性）。
 * 浏览器自动播放策略下失败时静默。
 */

export interface SamplePlayOpts {
  url: string;
  volume: number;
  loop?: boolean;
  channel: "sfx" | "bgm";
}

let bgmEl: HTMLAudioElement | null = null;
let bgmUrl: string | null = null;

function clampVol(v: number): number {
  return Math.max(0, Math.min(1, v));
}

/** 播放外部采样；BGM 会替换当前循环轨 */
export function playHtmlSample(opts: SamplePlayOpts): void {
  if (typeof Audio === "undefined") return;
  const vol = clampVol(opts.volume);
  if (opts.channel === "bgm") {
    if (bgmEl && bgmUrl === opts.url) {
      bgmEl.volume = vol;
      if (bgmEl.paused) void bgmEl.play().catch(() => undefined);
      return;
    }
    stopHtmlBgm();
    const el = new Audio(opts.url);
    el.loop = opts.loop ?? true;
    el.volume = vol;
    bgmEl = el;
    bgmUrl = opts.url;
    void el.play().catch(() => undefined);
    return;
  }
  const el = new Audio(opts.url);
  el.volume = vol;
  void el.play().catch(() => undefined);
}

export function stopHtmlBgm(): void {
  if (bgmEl) {
    try {
      bgmEl.pause();
      bgmEl.src = "";
    } catch {
      /* ignore */
    }
    bgmEl = null;
    bgmUrl = null;
  }
}

/** 测试/调试 */
export function debugHtmlBgmUrl(): string | null {
  return bgmUrl;
}
