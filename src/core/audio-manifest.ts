/**
 * 外部音频资源清单（纯数据，无 DOM）。
 * 文件位于 public/assets/audio/，由 scripts/generate-audio-assets.mjs 生成。
 */

export type AudioAssetKind = "sfx" | "bgm";

export interface AudioAssetEntry {
  id: string;
  /** 相对 public 根的 URL 路径，如 /assets/audio/sfx_click.wav */
  publicPath: string;
  /** 仓库内相对路径（测试存在性用） */
  diskPath: string;
  kind: AudioAssetKind;
  /** 许可说明短标签 */
  license: "original-synth";
  loop: boolean;
}

/** 已交付的全部外部音频 id → 条目 */
export const AUDIO_MANIFEST: readonly AudioAssetEntry[] = [
  {
    id: "sfx_click",
    publicPath: "/assets/audio/sfx_click.wav",
    diskPath: "public/assets/audio/sfx_click.wav",
    kind: "sfx",
    license: "original-synth",
    loop: false,
  },
  {
    id: "sfx_accept",
    publicPath: "/assets/audio/sfx_accept.wav",
    diskPath: "public/assets/audio/sfx_accept.wav",
    kind: "sfx",
    license: "original-synth",
    loop: false,
  },
  {
    id: "sfx_craft_ok",
    publicPath: "/assets/audio/sfx_craft_ok.wav",
    diskPath: "public/assets/audio/sfx_craft_ok.wav",
    kind: "sfx",
    license: "original-synth",
    loop: false,
  },
  {
    id: "sfx_rare",
    publicPath: "/assets/audio/sfx_rare.wav",
    diskPath: "public/assets/audio/sfx_rare.wav",
    kind: "sfx",
    license: "original-synth",
    loop: false,
  },
  {
    id: "sfx_circulate",
    publicPath: "/assets/audio/sfx_circulate.wav",
    diskPath: "public/assets/audio/sfx_circulate.wav",
    kind: "sfx",
    license: "original-synth",
    loop: false,
  },
  {
    id: "sfx_day_end",
    publicPath: "/assets/audio/sfx_day_end.wav",
    diskPath: "public/assets/audio/sfx_day_end.wav",
    kind: "sfx",
    license: "original-synth",
    loop: false,
  },
  {
    id: "bgm_menu",
    publicPath: "/assets/audio/bgm_menu.wav",
    diskPath: "public/assets/audio/bgm_menu.wav",
    kind: "bgm",
    license: "original-synth",
    loop: true,
  },
  {
    id: "bgm_shop",
    publicPath: "/assets/audio/bgm_shop.wav",
    diskPath: "public/assets/audio/bgm_shop.wav",
    kind: "bgm",
    license: "original-synth",
    loop: true,
  },
] as const;

const BY_ID = new Map(AUDIO_MANIFEST.map((e) => [e.id, e]));

export function getAudioAsset(id: string): AudioAssetEntry | null {
  return BY_ID.get(id) ?? null;
}

/** 公开 URL；未知 id 返回 null */
export function audioPublicUrl(id: string): string | null {
  return BY_ID.get(id)?.publicPath ?? null;
}

export function listAudioAssetIds(): string[] {
  return AUDIO_MANIFEST.map((e) => e.id);
}

export function listAudioDiskPaths(): string[] {
  return AUDIO_MANIFEST.map((e) => e.diskPath);
}

export function listSfxAssetIds(): string[] {
  return AUDIO_MANIFEST.filter((e) => e.kind === "sfx").map((e) => e.id);
}

export function listBgmAssetIds(): string[] {
  return AUDIO_MANIFEST.filter((e) => e.kind === "bgm").map((e) => e.id);
}
