import { describe, it, expect } from "vitest";
import {
  toneForSfx,
  listKnownSfxIds,
  ProceduralAudioBus,
  sfxForGameEvent,
  type ToneSpec,
} from "../src/core";

describe("procedural tones", () => {
  it("已知 sfx id 均有 tone 规格", () => {
    const ids = listKnownSfxIds();
    expect(ids.length).toBeGreaterThanOrEqual(5);
    for (const id of ids) {
      const t = toneForSfx(id);
      expect(t).not.toBeNull();
      expect(t!.frequency).toBeGreaterThan(0);
      expect(t!.durationMs).toBeGreaterThan(0);
    }
  });

  it("游戏事件映射到可播放 sfx", () => {
    for (const ev of ["accept", "craft", "rare", "circulate", "sell", "day_end", "click"] as const) {
      const id = sfxForGameEvent(ev);
      expect(toneForSfx(id)).not.toBeNull();
    }
  });

  it("ProceduralAudioBus 调用注入播放器并记录 lastTone", () => {
    const played: ToneSpec[] = [];
    const bus = new ProceduralAudioBus((spec, g) => {
      played.push(spec);
      expect(g).toBeGreaterThan(0);
    });
    expect(bus.isLive()).toBe(true);
    bus.playSfx(sfxForGameEvent("craft"));
    expect(bus.debugLastSfx()).toBe("sfx_craft_ok");
    expect(bus.debugLastTone()?.frequency).toBe(740);
    expect(played).toHaveLength(1);
  });

  it("禁用时不调用播放器", () => {
    let n = 0;
    const bus = new ProceduralAudioBus(() => {
      n += 1;
    });
    bus.setEnabled(false);
    bus.playSfx("sfx_click");
    expect(n).toBe(0);
    expect(bus.isLive()).toBe(false);
  });
});
