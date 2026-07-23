/**
 * 音频清单叙事文案（纯函数，可单测）
 */
import {
  AUDIO_MANIFEST,
  listBgmAssetIds,
  listSfxAssetIds,
  type AudioAssetEntry,
  type AudioAssetKind,
} from "./audio-manifest";

const NARRATIVE: Record<string, string> = {
  sfx_click: "轻点：柜台木纹上的一声小回响。",
  sfx_accept: "接待：门铃与帘子一起动了一下。",
  sfx_craft_ok: "成器：容器轻轻合拢，心情有了形状。",
  sfx_rare: "珍稀：像有人在远处回了一个柔和的音。",
  sfx_circulate: "流通：纸袋与脚步声叠在一起。",
  sfx_day_end: "打烊：灯拧暗一寸，店还在呼吸。",
  bgm_menu: "主菜单氛围：午后橱窗外的慢节奏。",
  bgm_shop: "店内氛围：货架与茶香之间的低回声。",
};

export function audioNarrative(id: string): string {
  return NARRATIVE[id] ?? "一段温柔的店内声音。";
}

export function formatAudioLine(entry: AudioAssetEntry): string {
  const kind = entry.kind === "bgm" ? "背景" : "音效";
  const loop = entry.loop ? "循环" : "单次";
  return `${kind} · ${entry.id}（${loop}）— ${audioNarrative(entry.id)}`;
}

export function listAudioNarratives(kind?: AudioAssetKind): string[] {
  return AUDIO_MANIFEST.filter((e) => (kind ? e.kind === kind : true)).map(
    (e) => formatAudioLine(e),
  );
}

export function formatAudioBoardSummary(): string {
  const sfx = listSfxAssetIds().length;
  const bgm = listBgmAssetIds().length;
  return `店内声音：音效 ${sfx} 条 · 背景 ${bgm} 条 · 皆为原创合成。`;
}

export function formatAudioEncourage(sfxEnabled: boolean): string {
  if (!sfxEnabled) return "音效已关：只剩文字与画面的温柔。";
  return "音效与 BGM 会陪着流通——可在设置里随时调轻。";
}
