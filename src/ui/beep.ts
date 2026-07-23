import type { ToneSpec } from "../core/tones";

let sharedCtx: AudioContext | null = null;

function getCtx(): AudioContext | null {
  try {
    const AC =
      typeof window !== "undefined"
        ? window.AudioContext ||
          (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext
        : undefined;
    if (!AC) return null;
    if (!sharedCtx) sharedCtx = new AC();
    return sharedCtx;
  } catch {
    return null;
  }
}

/** Web Audio 短音；失败时静默 */
export function playWebAudioTone(spec: ToneSpec, channelGain: number): void {
  const ctx = getCtx();
  if (!ctx) return;
  void ctx.resume().catch(() => undefined);
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = spec.type;
  osc.frequency.value = spec.frequency;
  const now = ctx.currentTime;
  const vol = Math.max(0, Math.min(1, channelGain));
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(Math.max(0.0001, vol), now + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + spec.durationMs / 1000);
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start(now);
  osc.stop(now + spec.durationMs / 1000 + 0.02);
}
