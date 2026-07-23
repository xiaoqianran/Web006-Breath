/** 程序化音效规格（无外部音频文件，可单测） */

export type OscillatorKind = "sine" | "triangle" | "square" | "sawtooth";

export interface ToneSpec {
  frequency: number;
  durationMs: number;
  type: OscillatorKind;
  /** 0–1 相对音量 */
  gain: number;
}

const TABLE: Record<string, ToneSpec> = {
  sfx_click: { frequency: 660, durationMs: 40, type: "sine", gain: 0.08 },
  sfx_accept: { frequency: 520, durationMs: 90, type: "triangle", gain: 0.1 },
  sfx_craft_ok: { frequency: 740, durationMs: 120, type: "sine", gain: 0.1 },
  sfx_rare: { frequency: 880, durationMs: 180, type: "triangle", gain: 0.12 },
  sfx_circulate: { frequency: 480, durationMs: 100, type: "sine", gain: 0.09 },
  sfx_day_end: { frequency: 392, durationMs: 220, type: "triangle", gain: 0.1 },
};

export function toneForSfx(id: string): ToneSpec | null {
  return TABLE[id] ?? null;
}

export function listKnownSfxIds(): string[] {
  return Object.keys(TABLE);
}
