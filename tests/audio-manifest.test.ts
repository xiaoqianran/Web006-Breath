import { describe, it, expect } from "vitest";
import { existsSync, statSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import {
  AUDIO_MANIFEST,
  audioPublicUrl,
  getAudioAsset,
  listAudioAssetIds,
  listAudioDiskPaths,
  listBgmAssetIds,
  listSfxAssetIds,
  listKnownSfxIds,
  HybridAudioBus,
  sfxForGameEvent,
} from "../src/core";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");

describe("audio manifest & hybrid bus", () => {
  it("清单至少包含 6 个 sfx 与 2 个 bgm", () => {
    expect(listSfxAssetIds().length).toBeGreaterThanOrEqual(6);
    expect(listBgmAssetIds()).toEqual(
      expect.arrayContaining(["bgm_menu", "bgm_shop"]),
    );
    expect(AUDIO_MANIFEST.every((e) => e.license === "original-synth")).toBe(true);
  });

  it("磁盘上每个清单文件存在且非空", () => {
    for (const rel of listAudioDiskPaths()) {
      const p = resolve(root, rel);
      expect(existsSync(p), `missing ${rel}`).toBe(true);
      expect(statSync(p).size, rel).toBeGreaterThan(44); // WAV header
    }
    expect(existsSync(resolve(root, "public/assets/audio/LICENSE.txt"))).toBe(true);
  });

  it("已知程序化 sfx id 均有对应文件路径", () => {
    for (const id of listKnownSfxIds()) {
      expect(audioPublicUrl(id), id).toMatch(/^\/assets\/audio\/.+\.wav$/);
      expect(getAudioAsset(id)?.kind).toBe("sfx");
    }
  });

  it("HybridAudioBus 优先走采样器", () => {
    const samples: string[] = [];
    const tones: number[] = [];
    const bus = new HybridAudioBus(
      (opts) => {
        samples.push(opts.url);
      },
      (spec) => {
        tones.push(spec.frequency);
      },
    );
    bus.playSfx(sfxForGameEvent("craft"));
    expect(bus.debugLastSource()).toBe("file");
    expect(bus.debugLastSampleUrl()).toBe("/assets/audio/sfx_craft_ok.wav");
    expect(samples).toHaveLength(1);
    expect(tones).toHaveLength(0);
  });

  it("无采样器时回退 tone", () => {
    const tones: number[] = [];
    const bus = new HybridAudioBus(null, (spec) => {
      tones.push(spec.frequency);
    });
    bus.playSfx("sfx_click");
    expect(bus.debugLastSource()).toBe("tone");
    expect(tones[0]).toBe(660);
  });

  it("BGM 走文件并 stop 调用停止器", () => {
    let stopped = 0;
    const urls: string[] = [];
    const bus = new HybridAudioBus(
      (opts) => {
        urls.push(opts.url);
        expect(opts.channel).toBe("bgm");
        expect(opts.loop).toBe(true);
      },
      null,
      () => {
        stopped += 1;
      },
    );
    bus.playBgm("bgm_menu");
    expect(urls[0]).toBe("/assets/audio/bgm_menu.wav");
    bus.stopBgm();
    expect(stopped).toBe(1);
    expect(bus.debugLastBgm()).toBeNull();
  });

  it("禁用时不播放且 isLive=false", () => {
    let n = 0;
    const bus = new HybridAudioBus(() => {
      n += 1;
    });
    bus.setEnabled(false);
    bus.playSfx("sfx_accept");
    bus.playBgm("bgm_shop");
    expect(n).toBe(0);
    expect(bus.isLive()).toBe(false);
    expect(listAudioAssetIds().length).toBe(AUDIO_MANIFEST.length);
  });
});
